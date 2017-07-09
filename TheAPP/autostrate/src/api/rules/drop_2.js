import t from 'teoria'
import close from './close'

export default {
  name: 'Drop 2',
  number_of_instruments: [4],
  makeVoicing: function ({chord, melody}) {
    let chordNotes = close.makeVoicing({chord, melody})
    let two = chordNotes[2].transpose(t.interval('P8').direction('down'))
    chordNotes[2] = two
    chordNotes.sort((a, b) => (a.key() - b.key()))
    return chordNotes
  }
}
