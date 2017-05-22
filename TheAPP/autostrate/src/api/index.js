import t from 'tonal'
import drop2 from './rules/drop_2'

var api = {}

api.rules = {}

api.rules[drop2.id] = drop2

api.isValidChord = function (chord) {
  return t.chord.isKnownChord(chord)
}

api.isValidNote = function (note) {
  return !!t.note.name(note)
}

api.voicing = function (chord, melody, rule) {
  return api.rules[rule].makeVoicing(chord, melody)
}
export default api
