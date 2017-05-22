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

api.voicing = function (chord, melody, rule) {
  // Check for an empty field
  if (!chord || !melody) {
    return Array(10).fill('')
  }
  return api.rules[rule].makeVoicing(chord, melody)
}
export default api
