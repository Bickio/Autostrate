import teoria from 'teoria'
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
api.isValidKey = function (key) {
  return api.isValidNote(key) && key
}
api.transposeNote = function (note, key) {
  let refNote = teoria.note('C4')
  if (teoria.note(key).octave() === 2) {
    refNote.transpose(teoria.interval('P8').direction('down'))
    refNote.transpose(teoria.interval('P8').direction('down'))
  }
  let interval = teoria.interval.between(teoria.note(key), refNote)
  return note.transpose(interval)
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
  // If any of the keys are blank output a blank voicing
  for (let i of Object.keys(instruments)) {
    if (!instruments[i].key) {
      return Array(numberOfInstruments).fill('')
    }
  }
  let data = {
    chord,
    melody,
    numberOfInstruments,
    instruments
  }
  let voicing
  voicing = api.rules[rule].makeVoicing(data)
  voicing = api.transposeVoicing(voicing, instruments)

  for (let note in voicing) {
    if (!isNaN(melody.slice(-1))) {
      voicing[note] = voicing[note].scientific()
    } else {
      voicing[note] = voicing[note].toString(true)
      voicing[note] = voicing[note][0].toUpperCase() + voicing[note].slice(1)
    }
  }

  return voicing
}

export default api
