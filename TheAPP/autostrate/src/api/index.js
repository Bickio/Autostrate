import t from 'tonal'
import drop2 from './rules/drop_2'

var api = {}

api.rules = {}

api.rules[drop2.id] = drop2

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
  // Check for an empty field
  if (!chord || !melody) {
    return Array(numberOfInstruments).fill('')
  }
  let voicing = api.rules[rule].makeVoicing(chord, melody)
  voicing = api.transposeVoicing(voicing, instruments)
  return voicing
}

export default api
