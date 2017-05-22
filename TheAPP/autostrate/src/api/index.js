import t from 'tonal'
import drop2 from './rules/drop_2'

var api = {}

api.rules = {
  drop2
}

api.isValidChord = function (chord) {
  return t.chord.isKnownChord(chord)
}

api.isValidNote = function (note) {
  return !!t.note.name(note)
}

export default api