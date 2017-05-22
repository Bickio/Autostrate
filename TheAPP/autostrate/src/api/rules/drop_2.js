import t from 'tonal'

export default {
  id: 'r_54321',
  name: 'Drop 2',
  number_of_instruments: 4,
  makeVoicing: function (chord, melody) {
    let notes = t.chord.notes(chord)
    let i = notes.indexOf(melody) + 1

    notes = notes.slice(i, notes.length).concat(notes.slice(0, i))
    console.log(notes)
    if (notes) {
      return notes
    }
    return ['', '', '', '']
  }
}
