/* ============================================================
   acces.js : accès joueurs / MJ, partagé par toutes les pages

   - Pages publiques : visibles par tout le monde.
   - Pages MJ : visibles seulement après avoir saisi la clé MJ.
   - Pour saisir la clé : cliquer 5 fois de suite sur le titre de la page
     (par exemple "Fiche de personnage"). Même geste pour verrouiller.
   - Le menu (bandeau) est construit ici : pour ajouter une page, il
     suffit de l'ajouter à la liste PAGES ci-dessous.

   Important : ceci cache les pages, mais ne les chiffre pas. Sur un site
   public, quelqu'un qui connaît l'adresse exacte d'un fichier peut encore
   le télécharger. C'est un verrou "de table", pas un coffre-fort.

   Changer la clé : modifier simplement CLE_MJ ci-dessous (la casse et les
   espaces autour sont ignorés). Les appareils déjà débloqués sont
   automatiquement reverrouillés.
   ============================================================ */
(function () {
  'use strict';

  // ---------- RÉGLAGES ----------
  // Clé MJ, écrite en clair : modifie-la ici quand tu veux.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var CLE_MJ = 'Devine';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var CLE_STOCKAGE = 'dh_acces_mj';
  var NB_CLICS = 5;        // nombre de clics sur le titre
  var DELAI_CLICS = 1500;  // ms maximum entre deux clics

  // Liste des pages, dans l'ordre d'affichage du menu.
  // mj:true = page réservée au MJ.
  var PAGES = [
    { fichier: 'index.html',             nom: 'Fiche',       mj: false },
    { fichier: 'catalogue.html',         nom: 'Marché noir', mj: false },
    { fichier: 'carte_interactive.html', nom: 'Carte',       mj: false },
    { fichier: 'Compendium.html',        nom: 'Compendium',  mj: true  },
    { fichier: 'ecran-mj.html',          nom: 'Écran MJ',    mj: true  },
    { fichier: 'kohd.html',              nom: 'Kohd',        mj: true  }
  ];

  function norm(cle) { return String(cle || '').trim().toLowerCase(); }

  // ---------- ÉTAT MJ ----------
  function lire() { try { return localStorage.getItem(CLE_STOCKAGE); } catch (e) { return null; } }
  function ecrire(v) {
    try {
      if (v === null) localStorage.removeItem(CLE_STOCKAGE);
      else localStorage.setItem(CLE_STOCKAGE, v);
    } catch (e) { /* stockage indisponible : l'accès MJ ne sera pas mémorisé */ }
  }
  function estMJ() { return lire() === norm(CLE_MJ); }

  // ---------- PAGE COURANTE ----------
  function pageCourante() {
    var f = location.pathname.split('/').pop();
    if (!f) f = 'index.html';
    try { f = decodeURIComponent(f); } catch (e) { /* garde tel quel */ }
    if (f.indexOf('.') < 0) f += '.html';
    return f.toLowerCase();
  }
  function infoPage(fichier) {
    for (var i = 0; i < PAGES.length; i++) {
      if (PAGES[i].fichier.toLowerCase() === fichier) return PAGES[i];
    }
    return null;
  }

  // ---------- GARDE : page réservée au MJ ----------
  var script = document.currentScript;
  var info = infoPage(pageCourante());
  var exigeMJ = (script && script.getAttribute('data-acces') === 'mj') || (info && info.mj);
  if (exigeMJ && !estMJ()) {
    document.documentElement.style.visibility = 'hidden';
    location.replace('index.html');
    return;
  }

  // ---------- MENU ----------
  function construireNav() {
    var nav = document.querySelector('.bandeau-nav');
    if (!nav) return;
    var courant = pageCourante(), mj = estMJ();
    nav.textContent = '';
    PAGES.forEach(function (p) {
      if (p.mj && !mj) return;
      var el;
      if (p.fichier.toLowerCase() === courant) {
        el = document.createElement('span');
        el.className = 'bandeau-nav-link actif';
        el.setAttribute('aria-current', 'page');
      } else {
        el = document.createElement('a');
        el.className = 'bandeau-nav-link';
        el.href = p.fichier;
      }
      el.textContent = p.nom;
      nav.appendChild(el);
    });
  }

  // ---------- FENÊTRE CLÉ / VERROU ----------
  function injecterStyle() {
    if (document.getElementById('dhacces-style')) return;
    var st = document.createElement('style');
    st.id = 'dhacces-style';
    st.textContent =
      '.dhacces-fond{position:fixed;inset:0;z-index:99999;background:rgba(8,8,20,.65);display:flex;align-items:center;justify-content:center;padding:20px}' +
      '.dhacces-boite{background:var(--charcoal,#14162b);color:var(--ink,#eeeef7);border:1px solid var(--rule,rgba(190,194,230,.25));border-radius:14px;padding:20px 22px;width:min(360px,100%);box-shadow:0 12px 40px rgba(0,0,0,.5);font-family:inherit}' +
      '.dhacces-titre{margin:0 0 12px;font-size:1rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;border-bottom:2px solid var(--rule,rgba(190,194,230,.25));padding-bottom:8px}' +
      '.dhacces-texte{margin:0 0 12px;font-size:.85rem;line-height:1.5;color:var(--muted,#a9a6c8)}' +
      '.dhacces-champ{width:100%;box-sizing:border-box;padding:9px 12px;border-radius:8px;border:1px solid var(--rule,rgba(190,194,230,.25));background:rgba(255,255,255,.06);color:inherit;font:inherit;font-size:.9rem}' +
      '.dhacces-champ:focus{outline:2px solid var(--accent,#a691d2);outline-offset:1px}' +
      '.dhacces-erreur{min-height:1.2em;margin:6px 0 0;font-size:.78rem;color:#ff9aa8}' +
      '.dhacces-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:12px}' +
      '.dhacces-btn{cursor:pointer;font:inherit;font-size:.78rem;font-weight:bold;text-transform:lowercase;border:1px solid var(--rule,rgba(190,194,230,.25));background:transparent;color:var(--ink,#eeeef7);border-radius:999px;padding:7px 18px}' +
      '.dhacces-btn:hover{border-color:var(--accent,#a691d2)}' +
      '.dhacces-btn.principal{background:var(--ink,#eeeef7);color:var(--charcoal,#14162b);border-color:var(--ink,#eeeef7)}' +
      '.dhacces-toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:99999;background:var(--charcoal,#14162b);color:var(--ink,#eeeef7);border:1px solid var(--rule,rgba(190,194,230,.25));border-radius:999px;padding:8px 18px;font-size:.8rem;box-shadow:0 8px 24px rgba(0,0,0,.4)}';
    document.head.appendChild(st);
  }

  function el(tag, classe, texte) {
    var n = document.createElement(tag);
    if (classe) n.className = classe;
    if (texte) n.textContent = texte;
    return n;
  }

  function toast(message) {
    injecterStyle();
    var t = el('div', 'dhacces-toast', message);
    t.setAttribute('role', 'status');
    document.body.appendChild(t);
    setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 2200);
  }

  function fermerModale() {
    var f = document.getElementById('dhacces-fond');
    if (f && f.parentNode) f.parentNode.removeChild(f);
    document.removeEventListener('keydown', surTouche, true);
  }
  function surTouche(ev) { if (ev.key === 'Escape') fermerModale(); }

  function ouvrirModale() {
    if (document.getElementById('dhacces-fond')) return;
    injecterStyle();

    var fond = el('div', 'dhacces-fond');
    fond.id = 'dhacces-fond';
    var boite = el('div', 'dhacces-boite');
    boite.setAttribute('role', 'dialog');
    boite.setAttribute('aria-modal', 'true');
    var actions = el('div', 'dhacces-actions');
    var focus = null;

    if (estMJ()) {
      boite.appendChild(el('h2', 'dhacces-titre', 'Mode MJ actif'));
      boite.appendChild(el('p', 'dhacces-texte',
        'Les pages réservées au MJ sont visibles. Pense à verrouiller avant de partager ton écran avec les joueurs.'));
      var bFermer = el('button', 'dhacces-btn', 'fermer');
      bFermer.type = 'button';
      bFermer.onclick = fermerModale;
      var bVerrou = el('button', 'dhacces-btn principal', 'verrouiller');
      bVerrou.type = 'button';
      bVerrou.onclick = function () {
        ecrire(null);
        fermerModale();
        var c = infoPage(pageCourante());
        if (c && c.mj) { location.replace('index.html'); return; }
        construireNav();
        toast('Mode MJ verrouillé');
      };
      actions.appendChild(bFermer);
      actions.appendChild(bVerrou);
      boite.appendChild(actions);
      focus = bVerrou;
    } else {
      boite.appendChild(el('h2', 'dhacces-titre', 'Accès MJ'));
      boite.appendChild(el('p', 'dhacces-texte', 'Entre la clé pour afficher les pages réservées au MJ.'));
      var champ = el('input', 'dhacces-champ');
      champ.type = 'password';
      champ.autocomplete = 'off';
      champ.setAttribute('aria-label', 'Clé MJ');
      var erreur = el('p', 'dhacces-erreur');
      erreur.setAttribute('role', 'alert');
      var valider = function () {
        if (norm(champ.value) === norm(CLE_MJ)) {
          ecrire(norm(CLE_MJ));
          fermerModale();
          construireNav();
          toast('Mode MJ activé');
        } else {
          erreur.textContent = 'Clé incorrecte.';
          champ.select();
        }
      };
      champ.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') valider(); });
      var bAnnuler = el('button', 'dhacces-btn', 'annuler');
      bAnnuler.type = 'button';
      bAnnuler.onclick = fermerModale;
      var bValider = el('button', 'dhacces-btn principal', 'valider');
      bValider.type = 'button';
      bValider.onclick = valider;
      boite.appendChild(champ);
      boite.appendChild(erreur);
      actions.appendChild(bAnnuler);
      actions.appendChild(bValider);
      boite.appendChild(actions);
      focus = champ;
    }

    fond.appendChild(boite);
    fond.addEventListener('mousedown', function (ev) { if (ev.target === fond) fermerModale(); });
    document.addEventListener('keydown', surTouche, true);
    document.body.appendChild(fond);
    if (focus) focus.focus();
  }

  // ---------- DÉCLENCHEUR CACHÉ : 5 clics sur le titre ----------
  function brancherTitre() {
    var titre = document.querySelector('.bandeau-titre');
    if (!titre) return;
    titre.style.userSelect = 'none';
    titre.style.webkitUserSelect = 'none';
    var n = 0, minuteur = null;
    titre.addEventListener('click', function () {
      n++;
      clearTimeout(minuteur);
      minuteur = setTimeout(function () { n = 0; }, DELAI_CLICS);
      if (n >= NB_CLICS) {
        n = 0;
        clearTimeout(minuteur);
        ouvrirModale();
      }
    });
  }

  function init() { construireNav(); brancherTitre(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
