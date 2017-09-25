import teoria from 'teoria'
import t from 'tonal'
import drop2 from './rules/drop_2'
import close from './rules/close'

const IMPORTED_RULES = [drop2, close]
const OCTAVE_DOWN = teoria.interval('P8').direction('down')

/**
 * Creates a rules object with unique ids from a list of rules.
 * @param {array} ruleList - The list of rules.
 */
function makeRules (ruleList) {
  let rules = {}
  for (let i = 0; i < ruleList.length; i++) {
    rules['r_' + i] = ruleList[i]
    rules['r_' + i].id = ['r_' + i]
  }
  return rules
}

export default class Api {
  /**
   * Initialise the class with a rules object
   * @constructor
  */
  constructor () {
    this._rules = makeRules(IMPORTED_RULES)
  }

  /**
   * Checks if a string is a valid chord
   * @param {string} text - The string to be checked
  */
  static isValidChord (text) {
    return t.chord.isKnownChord(text)
  }

  /**
   * Checks if a string is a valid note
   * Beware that a blank string IS valid so as not to overwhelm the user with
   red before they even start
   * @param {string} text - The string to be checked
  */
  static isValidNote (text) {
    if (!text) { // If text is blank
      return true
    }
    return !!t.note.name(text) // Return whether t.note.name(text) is truthy
  }

  /**
   * Checks if a string is a valid key (transposition)
   * @param {string} text - The string to be checked
  */
  static isValidKey (text) {
    return this.isValidNote(text) && text
  }

  /**
   * Transposes a note from concert to a given key
   * @param {object} note - The note to be transposed
   * @param {string} key - The note to be transposed
  */
  transposeNote (note, key) {
    // Sets a reference note
    var refNote = teoria.note('C4')
    // If the key is in the second octave, put it down two octaves
    // This is to account for teoria automatically setting an undefined octave
    // to 2 for some unknown reason. We want it to be 4 (middle c)
    if ((teoria.note(key).octave() === 2) && (key.slice(-1) !== '2')) {
      refNote.transpose(OCTAVE_DOWN).transpose(OCTAVE_DOWN)
    }
    let interval = teoria.interval.between(teoria.note(key), refNote)
    return note.transpose(interval)
  }

  /**
   * Returns a new voicing where the notes are transposed according to the .key property of the intruments.
   * @param {array} voicing - the list of notes.
   * @param {object} instruments - An object containing instruments.
   */
  transposeVoicing (voicing, instruments) {
    let transposed = {}
    for (let id in instruments) {
      transposed[id] = this.transposeNote(voicing.pop(), instruments[id].key)
    }
    return transposed
  }

  /**
   * Returns true if all input is valid or empty otherwise returns false
   * @param {string} chord - name of chord
   * @param {string} melody - melody note
   * @param {string} rule - the rule id
   * @param {object} instruments - An object containing instruments.
   */
  inputIsInvalid (chord, melody, rule, instruments) {
    let numberOfInstruments = Object.keys(instruments).length
    // Check for an empty field or unselected rule
    if (!chord || !melody || !rule) {
      return true
    }
    // If any of the keys are blank
    for (let i of Object.keys(instruments)) {
      if (!instruments[i].key) {
        return true
      }
    }
    // If both the chord and note are valid
    if (!t.chord.isKnownChord(chord) || !t.note.name(melody)) {
      return true
    }
    // If the number of instruments is not supported by the rule output blank
    let validNumbersOfInstruments = this._rules[rule].number_of_instruments
    // Note: Array.indexOf(item) returns 0 (false) if not found
    if (validNumbersOfInstruments.indexOf(numberOfInstruments)) {
      throw new Error('This rule needs ' + validNumbersOfInstruments + ' instruments')
    }
    return false
  }

  /**
   * Returns a finished voicing created from the inputs:
   * @param {string} chord - name of chord
   * @param {string} melody - melody note
   * @param {string} rule - the rule id
   * @param {object} instruments - An object containing instruments.
   */
  voicing (chord, melody, rule, instruments) {
    // If the input is not valid, return a blank voicing
    if (this.inputIsInvalid(chord, melody, rule, instruments)) {
      return Array(numberOfInstruments).fill('')
    }
    let numberOfInstruments = Object.keys(instruments).length
    let data = {
      chord,
      melody,
      numberOfInstruments,
      instruments
    }
    // Create voicing
    let voicing
    voicing = this._rules[rule].makeVoicing(data)

    // Transpose the voicing
    voicing = this.transposeVoicing(voicing, instruments)

    // Convert voicing to strings
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
  /**
   * Gets the rules (object)
   */
  get rules () {
    return this._rules
  }
}
