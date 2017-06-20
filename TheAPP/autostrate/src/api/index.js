import t from 'tonal'
import drop2 from './rules/drop_2'
import close from './rules/close'

function makeRules (ruleList) {
  let rules = {}
  for (let i = 0; i < ruleList.length; i++) {
    rules['r_' + i] = ruleList[i]
    rules['r_' + i].id = ['r_' + i]
  }
  return rules
}

var api = {}

api.rules = makeRules([drop2, close])

api.isValidChord = function (chord) {
  return t.chord.isKnownChord(chord)
}

api.isValidNote = function (note) {
  if (!note) {
    return true
  }
  return !!t.note.name(note)
}

api.transposeNote = function (note, key) {
  let interval = t.interval(key, 'C')
  return t.transpose(note, interval)
}

api.transposeVoicing = function (voicing, instruments) {
  let transposed = {}
  for (let id in instruments) {
    transposed[id] = api.transposeNote(voicing.pop(), instruments[id].key)
  }
  return transposed
}

api.voicing = function (chord, melody, rule, instruments) {
  let numberOfInstruments = Object.keys(instruments).length
  // Check for an empty field or unselected rule
  if (!chord || !melody || !rule) {
    // Output a blank output for each instrument
    return Array(numberOfInstruments).fill('')
  }
  let voicing = api.rules[rule].makeVoicing(chord, melody)
  voicing = api.transposeVoicing(voicing, instruments)
  return voicing
}

export default api
