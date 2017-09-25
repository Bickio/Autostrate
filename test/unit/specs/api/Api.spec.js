import Api from '@/api/index'
const api = new Api()
import teoria from 'teoria'

describe('api/index isValidChord', () => {
  it('should output true for a blank input', () => {
    expect(Api.isValidChord(''))
      .to.equal(true)
  })
  it('should output true for Dsus4add9', () => {
    expect(Api.isValidChord('Dsus4add9'))
      .to.equal(true)
  })
  it('should output false for Fblah', () => {
    expect(Api.isValidChord('Fblah'))
      .to.equal(false)
  })
})

describe('api/index isValidNote', () => {
  it('should output true for a blank input', () => {
    expect(Api.isValidNote(''))
      .to.equal(true)
  })
  it('should output true for D', () => {
    expect(Api.isValidNote('D'))
      .to.equal(true)
  })
  it('should output false for Fblah', () => {
    expect(Api.isValidNote('Fblah'))
      .to.equal(false)
  })
})

describe('api/index transposeNote', () => {
  it('should transpose correctly', () => {
    expect(api.transposeNote(teoria.note('C'), 'Bb').toString(true))
      .to.equal('d')
  })
})

describe('api/index transposeVoicing', () => {
  it('should transpose correctly', () => {
    let voicing = ['E', 'D', 'B', 'G#']
    for (let note in voicing) {
      voicing[note] = teoria.note(voicing[note])
    }
    let instruments = {
      a: {key: 'C'},
      b: {key: 'Bb'},
      c: {key: 'D'},
      d: {key: 'C'}
    }
    expect(api.transposeVoicing(voicing, instruments)['b'].toString(true))
      .to.equal('c#')
  })
})

describe('api/index voicing', () => {
  let chord = 'Am7'
  let melody = 'C'
  let rule
  for (let id in api.rules) {
    if (api.rules[id].name === 'Drop 2') {
      rule = id
    }
  }
  let instruments = {
    'i_1496284506526': {
      'id': 'i_1496284506526',
      'name': 'Trumpet',
      'key': 'Bb'
    },
    'i_1496284507508': {
      'id': 'i_1496284507508',
      'name': 'Alto Sax',
      'key': 'Eb'
    },
    'i_1496284508012': {
      'id': 'i_1496284508012',
      'name': 'Tenor Sax',
      'key': 'Bb'
    },
    'i_1496284509005': {
      'id': 'i_1496284509005',
      'name': 'Trombone',
      'key': 'C'
    }
  }
  it('should voice correctly on valid input', () => {
    expect(api.voicing(chord, melody, rule, instruments).i_1496284506526.toString())
      .to.equal('D')
  })
  it('should output blank on blank chord', () => {
    expect(api.voicing('', melody, rule, instruments).i_1496284508012)
      .to.equal()
  })
})
