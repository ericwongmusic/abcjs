const animation = require('./src/api/abc_animation');
const tunebook = require('./src/api/abc_tunebook');

let abcjs = {};

abcjs.signature = "abcjs_midi v3.3.0";

Object.keys(animation).forEach(function (key) {
	abcjs[key] = animation[key];
});

Object.keys(tunebook).forEach(function (key) {
	abcjs[key] = tunebook[key];
});

abcjs.renderAbc = require('./src/api/abc_tunebook_svg');
abcjs.renderMidi = require('./src/api/abc_tunebook_midi');

const parser = require('./src/parse/abc_parse');
abcjs['parse'] = { Parse: parser };

const engraverController = require('./src/write/abc_engraver_controller');
abcjs['write'] = { EngraverController: engraverController };

const editor = require('./src/edit/abc_editor');
abcjs['Editor'] = editor;

const midi = require('./src/midi/abc_midi_controls');
const sequence = require('./src/midi/abc_midi_sequencer');
const flatten = require('./src/midi/abc_midi_flattener');
const midiCreate = require('./src/midi/abc_midi_create');
const midiUiGenerator = require('./src/midi/abc_midi_ui_generator');
editor.setMidiUiGenerator(midiUiGenerator);
abcjs['midi'] = midi;
abcjs['midi'].sequence = sequence;
abcjs['midi'].flatten = flatten;
abcjs['midi'].create = midiCreate;

module.exports = abcjs;
