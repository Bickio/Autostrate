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

export default class Api {
  constructor () {
    this._rules = makeRules([drop2, close])
  }

  static isValidChord (chord) {
    return t.chord.isKnownChord(chord)
  }

  static isValidNote (note) {
    if (!note) {
      return true
    }
    return !!t.note.name(note)
  }

  static isValidKey (key) {
    return this.isValidNote(key) && key
  }

  static transposeNote (note, key) {
    let refNote = teoria.note('C4')
    if (teoria.note(key).octave() === 2) {
      refNote.transpose(teoria.interval('P8').direction('down'))
      refNote.transpose(teoria.interval('P8').direction('down'))
    }
    let interval = teoria.interval.between(teoria.note(key), refNote)
    return note.transpose(interval)
  }

  static transposeVoicing (voicing, instruments) {
    let transposed = {}
    for (let id in instruments) {
      transposed[id] = this.transposeNote(voicing.pop(), instruments[id].key)
    }
    return transposed
  }

  voicing (chord, melody, rule, instruments) {
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
    // If the number of instruments is not supported by the rule output blank
    let validNumbersOfInstruments = this._rules[rule].number_of_instruments
                                  // indexOf returns 0 (false) if not found
    if (validNumbersOfInstruments.indexOf(numberOfInstruments)) {
      throw new Error('This rule needs ' + validNumbersOfInstruments + ' instruments')
    }
    let data = {
      chord,
      melody,
      numberOfInstruments,
      instruments
    }
    let voicing
    voicing = this._rules[rule].makeVoicing(data)
    voicing = this.transposeVoicing(voicing, instruments)

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

  get rules () {
    return this._rules
  }
}
