/* ============================================================
 * export_pdf.js
 * Exporte la fiche de personnage (index.html) vers le formulaire PDF
 * compact (2 pages A4, champs restant modifiables).
 *
 * Dépendances (à charger avant ce fichier) :
 *   assets/JS/pdf-lib.min.js        (bibliothèque pdf-lib)
 *   assets/JS/fiche_pdf_modele.js   (modèle PDF encodé en base64)
 *
 * Fonction exposée : exporterFichePDF()
 * ============================================================ */
(function () {
  "use strict";

  // ---------- petits utilitaires de lecture du DOM ----------
  function $(id) {
    return document.getElementById(id);
  }
  function val(id) {
    var e = $(id);
    return e && e.value != null ? String(e.value).trim() : "";
  }
  function selText(id) {
    var s = $(id);
    if (!s || s.value === "" || s.selectedIndex < 0) return "";
    var o = s.options[s.selectedIndex];
    return o ? o.textContent.trim() : "";
  }
  function all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }
  function filled(el) {
    return !!el && el.classList.contains("filled");
  }

  // HTML (contenteditable, infobulles) -> texte brut avec retours à la ligne
  function htmlToText(html) {
    if (!html) return "";
    var h = String(html)
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<li[^>]*>/gi, "\n\u2022 ")
      .replace(/<(div|p|h[1-6]|ul|ol)(\s[^>]*)?>/gi, "\n")
      .replace(/<\/(div|p|li|h[1-6]|tr|ul|ol)>/gi, "\n");
    var d = document.createElement("div");
    d.innerHTML = h;
    var t = d.textContent || "";
    return t
      .replace(/\u00a0/g, " ")
      .split("\n")
      .map(function (l) {
        return l.replace(/[ \t]+/g, " ").trim();
      })
      .join("\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  }
  function elText(id) {
    var e = $(id);
    return e ? htmlToText(e.innerHTML) : "";
  }

  // ---------- collecte des données de la fiche ----------
  function collecter() {
    var T = {}; // champs texte : nom -> valeur
    var C = {}; // cases à cocher : nom -> booléen

    // --- identité
    var champs = all('.header-block input[type="text"]').filter(function (e) {
      return (
        !e.classList.contains("cb-input") && !e.classList.contains("nom-perso")
      );
    });
    T.nom = champs[0] ? champs[0].value.trim() : "";
    T.titres = champs[1] ? champs[1].value.trim() : "";
    T.ascendance = selText("ascendance-select");
    T.communaute = selText("communaute-select");
    T.niveau = val("niveau-input");
    T.classe = selText("classe-select");
    T.sous_classe = selText("sousclasse-select");
    T.classe2 = selText("seconde-classe-select");
    T.sous_classe2 = selText("seconde-sousclasse-select");

    var doms = [];
    [1, 3, 2].forEach(function (n) {
      var slot = $("domain-icon-" + n);
      var tip = $("domain-tooltip-" + n);
      if (!slot || !tip || slot.style.display === "none") return;
      var b = tip.querySelector("b");
      var nom = b ? b.textContent.replace(/\.\s*$/, "").trim() : "";
      if (nom && doms.indexOf(nom) < 0) doms.push(nom);
    });
    T.domaines = doms.join(" / ");

    // --- esquive, armure, attributs
    T.esquive = val("esquive-input");
    T.armure_score = val("armure-score-esquive");
    all(".shield-grid-mini .shield-toggle").forEach(function (el, i) {
      if (i < 12) C["armure_slot_" + (i + 1)] = filled(el);
    });
    var attrs = ["agilite", "force", "finesse", "instinct", "presence", "savoir"];
    var marques = all(".top-row .tier-check");
    attrs.forEach(function (k, i) {
      T["attr_" + k] = val("attr-mod-" + k);
      C["attr_" + k + "_marque"] = marques[i] ? !!marques[i].checked : false;
    });

    // --- dégâts & santé
    T.seuil_majeurs = val("seuil-mineurs");
    T.seuil_graves = val("seuil-majeurs");
    all("#blessure-boxes .box").forEach(function (el, i) {
      if (i < 12) C["blessure_" + (i + 1)] = filled(el);
    });
    all("#stress-boxes .box").forEach(function (el, i) {
      if (i < 12) C["stress_" + (i + 1)] = filled(el);
    });

    // --- espoir
    all(".espoir-toggle").forEach(function (el, i) {
      if (i < 6) C["espoir_" + (i + 1)] = el.dataset.filled === "true";
    });
    T.aptitude_espoir = val("hope-ability-input");
    T.aptitude_espoir_desc = val("hope-ability-desc");

    // --- expériences
    all("#tab-aptitude .exp-line").forEach(function (ln, i) {
      var ins = ln.querySelectorAll("input");
      if (i < 5 && ins.length >= 2) {
        T["exp_" + (i + 1) + "_nom"] = ins[0].value.trim();
        T["exp_" + (i + 1) + "_bonus"] = ins[1].value.trim();
      }
    });

    // --- or (poignées / sacs / coffre)
    var groupes = all("#tab-aptitude .or-group");
    function rempliOr(el) {
      var t = el.textContent.trim();
      return t !== "" && t !== "\u25cb";
    }
    if (groupes[0])
      all(".or-toggle", groupes[0]).forEach(function (el, i) {
        if (i < 10) C["or_poignee_" + (i + 1)] = rempliOr(el);
      });
    if (groupes[1])
      all(".or-toggle", groupes[1]).forEach(function (el, i) {
        if (i < 8) C["or_sac_" + (i + 1)] = rempliOr(el);
      });
    if (groupes[2]) {
      var cof = groupes[2].querySelector(".or-toggle");
      C.or_coffre = cof ? rempliOr(cof) : false;
    }

    // --- aptitudes
    T.capacites_classe = elText("class-abilities-textarea");
    var scTxt = [];
    ["sousclasse-tooltip", "seconde-sousclasse-tooltip"].forEach(function (id) {
      var t = elText(id);
      if (t && !/^Choisissez/i.test(t)) scTxt.push(t);
    });
    T.capacites_sousclasse = scTxt.join("\n\n");

    // --- maîtrise
    var mait = all("#maitrise-row .round-check");
    mait.forEach(function (el, i) {
      if (i < 6) C["maitrise_" + (i + 1)] = filled(el);
    });
    if (mait.length && !mait.some(filled)) C.maitrise_1 = true;

    // --- armes
    function arme(prefixe, slot) {
      T[prefixe + "_nom"] = selText("arme-" + slot + "-select");
      var trait = val("arme-" + slot + "-trait");
      var portee = val("arme-" + slot + "-portee");
      T[prefixe + "_trait"] = (trait + (portee ? " " + portee : "")).trim();
      T[prefixe + "_degats"] = val("arme-" + slot + "-degats");
      T[prefixe + "_aptitude"] = elText("arme-" + slot + "-aptitude");
    }
    arme("arme_p", "principale");
    arme("arme_s", "secondaire");
    arme("arme_i1", "inv1");
    arme("arme_i2", "inv2");
    var armeInv = all("#tab-aptitude .armeinv");
    ["arme_i1", "arme_i2"].forEach(function (p, i) {
      var cbs = armeInv[i] ? armeInv[i].querySelectorAll('.checks input[type="checkbox"]') : [];
      C[p + "_principale"] = cbs[0] ? !!cbs[0].checked : false;
      C[p + "_secondaire"] = cbs[1] ? !!cbs[1].checked : false;
    });

    // --- armure active
    T.armure_nom = selText("armure-select");
    T.armure_seuils = val("armure-seuils");
    T.armure_valeur = val("armure-score");
    T.armure_aptitude = elText("armure-atout");

    // --- inventaire (lignes non vides, dans l'ordre)
    var inv = all('#tab-aptitude .inv-list .field input[type="text"]')
      .map(function (e) {
        return e.value.trim();
      })
      .filter(Boolean);
    inv.slice(0, 9).forEach(function (v, i) {
      T["inv_" + (i + 1)] = v;
    });
    if (inv.length > 9) {
      T.inv_9 = inv.slice(8).join(" ; ");
    }

    // --- cartes de domaine
    try {
      if (
        typeof CARTES !== "undefined" &&
        typeof cartesActives !== "undefined" &&
        typeof cartesConnues !== "undefined"
      ) {
        cartesActives.slice(0, 9).forEach(function (idx, i) {
          var c = CARTES[idx];
          if (!c) return;
          T["carte_" + (i + 1) + "_nom"] = c.nom || "";
          T["carte_" + (i + 1) + "_domaine"] = c.domaine || "";
          T["carte_" + (i + 1) + "_niveau"] = c.niveau != null ? String(c.niveau) : "";
          T["carte_" + (i + 1) + "_rappel"] = c.cout_rappel != null ? String(c.cout_rappel) : "";
        });
        cartesConnues
          .filter(function (idx) {
            return cartesActives.indexOf(idx) < 0;
          })
          .slice(0, 7)
          .forEach(function (idx, i) {
            var c = CARTES[idx];
            if (!c) return;
            T["caveau_" + (i + 1) + "_nom"] = c.nom || "";
            T["caveau_" + (i + 1) + "_domaine"] = c.domaine || "";
            T["caveau_" + (i + 1) + "_niveau"] = c.niveau != null ? String(c.niveau) : "";
          });
      }
    } catch (e) {
      /* cartes non lisibles : on laisse vide */
    }

    // --- page 2 : description, background, liens, histoire
    T.saga_vetements = val("saga-vetement");
    T.saga_yeux = val("saga-yeux");
    T.saga_corps = val("saga-corps");
    T.saga_peau = val("saga-peau");
    T.saga_attitude = val("saga-attitude");
    T.saga_description = val("saga-description-libre");
    for (var i = 1; i <= 3; i++) {
      var qbg = $("q-liens-bg-" + i);
      var qpj = $("q-liens-pj-" + i);
      T["bg_q" + i] = qbg ? qbg.textContent.trim() : "";
      T["bg_r" + i] = val("liens-bg-" + i);
      T["lien_q" + i] = qpj ? qpj.textContent.trim() : "";
      T["lien_r" + i] = val("liens-pj-" + i);
    }
    T.histoire = elText("mon-histoire");

    // --- transformation
    try {
      var tid = typeof transformationChoisie !== "undefined" ? transformationChoisie : "";
      if (tid) {
        var carte = all("#tf-liste .tf-carte").filter(function (c) {
          return c.dataset.id === tid;
        })[0];
        if (carte) {
          var titre = carte.querySelector(".tf-carte-titre");
          T.transformation_nom = titre ? titre.textContent.trim() : "";
          T.transformation_notes = all(".tf-desc, .tf-apt", carte)
            .map(function (e) {
              return e.textContent.trim();
            })
            .join("\n");
        }
      }
    } catch (e) {
      /* ignore */
    }

    // --- animal de compagnie
    T.animal_nom = val("animal-nom");
    T.animal_description = val("animal-description");
    T.animal_caractere = val("animal-caractere");

    // --- compagnon du rôdeur
    T.compagnon_nom = val("rodeur-nom");
    T.compagnon_esquive = val("rodeur-esquive");
    T.compagnon_portee = val("rodeur-portee");
    var expC = [
      [val("rodeur-exp1-nom"), val("rodeur-exp1-mod")],
      [val("rodeur-exp2-nom"), val("rodeur-exp2-mod")],
    ];
    all("#rodeur-exp-extra-lines input").forEach(function (e, k) {
      var j = 2 + Math.floor(k / 2);
      if (!expC[j]) expC[j] = ["", ""];
      expC[j][k % 2] = e.value.trim();
    });
    expC.slice(0, 5).forEach(function (p, k) {
      T["compagnon_exp_" + (k + 1) + "_nom"] = p[0];
      T["compagnon_exp_" + (k + 1) + "_bonus"] = p[1];
    });
    var de = $("compagnon-die-select-row")
      ? $("compagnon-die-select-row").querySelector(".die-select-option.selected")
      : null;
    if (de && de.dataset.faces) C["compagnon_de_d" + de.dataset.faces] = true;
    var ty = $("compagnon-type-select-row")
      ? $("compagnon-type-select-row").querySelector(".die-select-option.selected")
      : null;
    if (ty) C[ty.dataset.type === "mag" ? "compagnon_mag" : "compagnon_phy"] = true;
    all("#compagnon-stress-boxes .box").forEach(function (el, i) {
      if (i < 6) C["compagnon_stress_" + (i + 1)] = filled(el);
    });
    var cles = ["intelligent", "lumiere", "reconfort", "caparacone", "vicieux", "resilient", "lie", "attentif"];
    all("#subtab-rodeur .entrainement-item").forEach(function (it, k) {
      if (!cles[k]) return;
      all('.entrainement-checks input[type="checkbox"]', it).forEach(function (cb, j) {
        C["compagnon_train_" + cles[k] + "_" + (j + 1)] = !!cb.checked;
      });
    });
    var notesC = [];
    var armeC = val("rodeur-arme");
    if (armeC) notesC.push("Attaque : " + armeC);
    var dons = elText("rodeur-dons-speciaux");
    if (dons) notesC.push(dons);
    T.compagnon_notes = notesC.join("\n");

    return { T: T, C: C };
  }

  // ---------- adaptation du texte à la police du PDF (WinAnsi) ----------
  var REMPLACEMENTS = {
    "\u2212": "-",
    "\u2192": "->",
    "\u2190": "<-",
    "\u2265": ">=",
    "\u2264": "<=",
    "\u202f": " ",
    "\u2009": " ",
    "\u200b": "",
    "\u2022": "\u2022",
  };
  function nettoyer(txt, charset) {
    var s = String(txt).replace(/\r\n?/g, "\n").replace(/\t/g, " ");
    var out = "";
    for (var ch of s) {
      if (ch === "\n") {
        out += ch;
        continue;
      }
      if (REMPLACEMENTS.hasOwnProperty(ch)) ch = REMPLACEMENTS[ch];
      for (var c2 of ch) if (charset.has(c2.codePointAt(0))) out += c2;
    }
    return out;
  }

  // nombre de lignes occupées par un texte à une taille donnée
  function nbLignes(font, texte, taille, largeur) {
    var n = 0;
    texte.split("\n").forEach(function (par) {
      if (par === "") {
        n++;
        return;
      }
      var cur = "";
      par.split(" ").forEach(function (w) {
        var t = cur ? cur + " " + w : w;
        if (font.widthOfTextAtSize(t, taille) <= largeur) {
          cur = t;
        } else {
          if (cur) n++;
          cur = w;
          var ww = font.widthOfTextAtSize(w, taille);
          if (ww > largeur) n += Math.floor(ww / largeur);
        }
      });
      n++;
    });
    return n;
  }
  function tailleAjustee(font, texte, base, w, h, multiligne) {
    for (var s = base; s >= 4.25; s -= 0.25) {
      if (multiligne) {
        if (nbLignes(font, texte, s, w - 5) * font.heightAtSize(s) <= h - 3) return s;
      } else if (font.widthOfTextAtSize(texte, s) <= w - 5) {
        return s;
      }
    }
    return 4.25;
  }

  function base64ToBytes(b64) {
    var bin = atob(b64);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }
  function slug(txt) {
    var s = String(txt || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return s || "personnage";
  }

  // ---------- génération du PDF ----------
  async function genererPDF() {
    var PDFDocument = PDFLib.PDFDocument;
    var StandardFonts = PDFLib.StandardFonts;
    var doc = await PDFDocument.load(base64ToBytes(window.FICHE_PDF_MODELE_B64));
    var font = await doc.embedFont(StandardFonts.Helvetica);
    var charset = new Set(font.getCharacterSet());
    var form = doc.getForm();
    var data = collecter();

    Object.keys(data.T).forEach(function (nom) {
      var valeur = data.T[nom];
      if (valeur == null || valeur === "") return;
      var champ;
      try {
        champ = form.getTextField(nom);
      } catch (e) {
        return;
      }
      var texte = nettoyer(valeur, charset);
      if (!texte) return;
      try {
        champ.setMaxLength(undefined);
      } catch (e) {}
      champ.setText(texte);
      try {
        var w0 = champ.acroField.getWidgets()[0].getRectangle();
        var da = champ.acroField.getDefaultAppearance() || "";
        var m = /([\d.]+)\s+Tf/.exec(da);
        var base = m ? parseFloat(m[1]) : 8;
        champ.setFontSize(tailleAjustee(font, texte, base, w0.width, w0.height, champ.isMultiline()));
      } catch (e) {
        /* taille par défaut conservée */
      }
    });

    Object.keys(data.C).forEach(function (nom) {
      var cb;
      try {
        cb = form.getCheckBox(nom);
      } catch (e) {
        return;
      }
      if (data.C[nom]) cb.check();
      else cb.uncheck();
    });

    form.updateFieldAppearances(font);
    // Les apparences générées ci-dessus sont conservées telles quelles par les lecteurs ;
    // la police est aussi déclarée dans les ressources du formulaire (modification ultérieure).
    var N = PDFLib.PDFName;
    var acro = doc.catalog.lookup(N.of("AcroForm"), PDFLib.PDFDict);
    acro.set(N.of("NeedAppearances"), PDFLib.PDFBool.False);
    var dr = acro.lookup(N.of("DR"), PDFLib.PDFDict);
    var polices = dr.lookup(N.of("Font"), PDFLib.PDFDict);
    polices.set(N.of(font.name), font.ref);
    doc.setTitle("Fiche de personnage - " + (data.T.nom || "Daggerheart"));
    var octets = await doc.save();
    return { octets: octets, nom: data.T.nom };
  }

  async function exporterFichePDF() {
    if (!window.PDFLib) {
      alert("Export PDF impossible : assets/JS/pdf-lib.min.js est introuvable.");
      return;
    }
    if (!window.FICHE_PDF_MODELE_B64) {
      alert("Export PDF impossible : assets/JS/fiche_pdf_modele.js est introuvable.");
      return;
    }
    try {
      var res = await genererPDF();
      var blob = new Blob([res.octets], { type: "application/pdf" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "fiche-" + slug(res.nom) + ".pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () {
        URL.revokeObjectURL(a.href);
      }, 3000);
    } catch (err) {
      console.error(err);
      alert("L'export PDF a échoué : " + (err && err.message ? err.message : err));
    }
  }

  window.exporterFichePDF = exporterFichePDF;
  window._genererFichePDF = genererPDF; // utile pour les tests
})();
