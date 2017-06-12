import t from 'tonal'

export default {
  name: 'Drop 2',
  number_of_instruments: 4,
  makeVoicing: function (chord, melody) {
    let notes = t.chord.notes(chord)
    let i = notes.indexOf(melody) + 1

    // Cheap hack to make sure there are enough notes
    notes = notes.concat(notes).concat(notes)

    notes = notes.slice(i, notes.length).concat(notes.slice(0, i))
    notes = notes.reverse()
    notes = notes.slice(0, 4)
    let droppedNote = notes.splice(1, 1)[0]
    notes.push(droppedNote)
    notes = notes.reverse()
    return notes
  }
}
