#!/usr/bin/osascript -l JavaScript
/*
 * build.js — förkompilerar alla .jsx-filer till en enda dist/app.js.
 *
 * Kör:  ./build.sh        (eller: osascript -l JavaScript build.js)
 *
 * Varför: så att webbläsaren INTE behöver ladda ner Babel (~2,4 MB) och
 * transpilera 20 filer vid varje besök. Sidan laddar då bara react,
 * react-dom, data.js, copy.js och dist/app.js — fem filer, ingen CDN.
 *
 * Detta använder Babel Standalone körd i macOS inbyggda JavaScript-motor
 * (osascript), så ingen Node/npm behövs. Kör om efter varje .jsx-ändring.
 */
ObjC.import('Foundation');

function read(p) {
  var s = $.NSString.stringWithContentsOfFileEncodingError($(p), $.NSUTF8StringEncoding, null);
  if (!s) throw new Error('Kan inte läsa ' + p);
  return ObjC.unwrap(s);
}
function write(p, txt) {
  $(txt).writeToFileAtomicallyEncodingError($(p), true, $.NSUTF8StringEncoding, null);
}

// Babel Standalone förväntar sig webbläsarglobaler.
var g = this;
if (typeof self === 'undefined') g.self = this;
if (typeof window === 'undefined') g.window = this;
if (typeof global === 'undefined') g.global = this;
eval(read('vendor/babel.min.js'));

var PRESETS = [['react', { runtime: 'classic' }]];
var strip = function (src) {
  return src
    .replace(/^\s*import[^;]*;\s*$/gm, '')
    .replace(/^\s*export\s+/gm, '');
};
var xform = function (code, filename) {
  return Babel.transform(code, { presets: PRESETS, filename: filename, compact: false }).code;
};

// Samma ordning och beroendelogik som bootstrap.js.
var SOURCES = [
  'components/core/Button.jsx',
  'components/core/Badge.jsx',
  'components/core/Card.jsx',
  'components/core/Ornament.jsx',
  'components/core/SectionHeading.jsx',
  'components/forms/Checkbox.jsx',
  'components/forms/Switch.jsx',
  'components/forms/Input.jsx',
  'components/forms/Select.jsx',
  'components/menu/MenuItem.jsx',
  'components/menu/CategoryTabs.jsx',
  'components/navigation/NavBar.jsx',
  'components/navigation/LangToggle.jsx',
  'components/feedback/Notice.jsx'
];
var SCREENS = [
  'motion.jsx', 'PhotoSlot.jsx', 'Hero.jsx', 'Featured.jsx', 'MenuSection.jsx', 'About.jsx',
  'Gallery.jsx', 'Reviews.jsx', 'FindUs.jsx', 'HoursBand.jsx', 'SiteFooter.jsx', 'app.jsx'
];

var parts = [];
parts.push('/* Autogenererad av build.js — REDIGERA INTE. Ändra .jsx-källorna och kör om ./build.sh */');
parts.push('(function(){');
parts.push('"use strict";');
parts.push('var React = window.React, ReactDOM = window.ReactDOM;');
parts.push('var LD_DS = (window.LD_DS = window.LD_DS || {});');

var built = [];
SOURCES.forEach(function (url) {
  var name = url.split('/').pop().replace(/\.jsx$/, '');
  var src = strip(read(url));
  var pre = built.length ? 'const { ' + built.join(', ') + ' } = __DS;\n' : '';
  // Hela satsen (tilldelning + IIFE-anrop) transpileras i ETT stycke — annars
  // sätter Babel ett ";" efter funktionsuttrycket och anropet blir en föräldralös
  // sats, så LD_DS[name] skulle få själva fabriksfunktionen i stället för komponenten.
  var stmt = 'LD_DS[' + JSON.stringify(name) + '] = (function(React, __DS){\n' +
             pre + src + '\nreturn ' + name + ';\n})(React, LD_DS);';
  parts.push('/* ' + url + ' */');
  parts.push(xform(stmt, url));
  built.push(name);
});

SCREENS.forEach(function (url) {
  var src = strip(read(url));
  var stmt = '(function(React, ReactDOM){\n' + src + '\n})(React, ReactDOM);';
  parts.push('/* ' + url + ' */');
  parts.push(xform(stmt, url));
});

parts.push('})();');

var out = parts.join('\n');

// Sanity: varje LD_DS-tilldelning MÅSTE anropa sin fabrik (sluta med "}(React, LD_DS);"),
// annars hamnar själva funktionen i LD_DS och headern/menyn kraschar vid render.
var assigns = out.match(/LD_DS\[[^\]]+\] = function/g) || [];
var calls = out.match(/\}\(React, LD_DS\);/g) || [];
if (assigns.length !== SOURCES.length || calls.length !== SOURCES.length) {
  throw new Error('Bygg avbrutet: ' + assigns.length + ' tilldelningar men ' + calls.length +
    ' anrop (väntade ' + SOURCES.length + '). Babel-utdata ändrad?');
}

write('dist/app.js', out);
console.log('dist/app.js skriven — ' + out.length + ' tecken, ' + (SOURCES.length + SCREENS.length) + ' filer. Sanity OK.');
