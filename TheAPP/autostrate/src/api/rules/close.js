var t = require('teoria')

export default {
  name: 'Close',
  number_of_instruments: '',
  makeVoicing: function ({chord, melody}) {
    // Helper functions
    var simpleNotes = function (notes) {
      let simple = []
      for (let note of notes) {
        simple.push(note.name())
      }
      return simple
    }

    var chromaNotes = function (notes) {
      let chroma = []
      for (let note of notes) {
        chroma.push(note.chroma())
      }
      return chroma
    }

    var removeNote = function (notes, note) {
      let i = simpleNotes(notes).indexOf(note.name())
      notes.splice(i, 1)
      return notes
    }

    melody = t.note.fromString(melody)
    chord = t.chord(chord)
    var root = chord.root

    var chordNotes = chord.notes()

    let i = chromaNotes(chordNotes).indexOf(melody.chroma())
    // If the melody is not in the chord
    if (i === -1) {
      chordNotes.push(melody)
    }

    // If the chord has more than four notes & the root is not the melody
    if (chordNotes.length > 4 && root.chroma() !== melody.chroma()) {
      chordNotes = removeNote(chordNotes, root) // remove the root
    }
    // If the chord still has more than four notes
    if (chordNotes.length > 4) {
      let fifth = chord.get('fifth')
      if (fifth.chroma() !== melody.chroma()) {
        chordNotes = removeNote(chordNotes, fifth)
      }
    }

    // If the chord still has more than four notes throw an Error
    if (chordNotes.length > 4) {
      throw new Error('Too many notes in the chord')
    }
    if (chordNotes.length < 4) {
      throw new Error('Not enough notes in the chord')
    }

    // Shift notes down an octave if more than an octave higher than the root
    for (let note in chordNotes) {
      let interval = t.interval(root, chordNotes[note])
      let baseInterval = interval.simple()
      chordNotes[note] = root.interval(baseInterval)
    }

    // Sort them
    chordNotes.sort((a, b) => (a.key() - b.key()))

    // Rearrange until the melody is on top
    while (chordNotes[3].chroma() !== melody.chroma()) {
      chordNotes[0].transpose(t.interval('P8'))
      chordNotes.sort((a, b) => (a.key() - b.key()))
    }

    // Transpose up or down so that the melody is at the right octave
    let interval = t.interval(chordNotes[3], melody)
    for (let note in chordNotes) {
      chordNotes[note].transpose(interval)
    }

    for (let note in chordNotes) {
      chordNotes[note] = chordNotes[note].scientific()
    }

    return chordNotes
  }
}
