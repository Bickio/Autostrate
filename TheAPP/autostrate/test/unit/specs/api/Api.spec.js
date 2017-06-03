import api from '@/api/index'

describe('api/index isValidChord', () => {
  it('should output true for a blank input', () => {
    expect(api.isValidChord(''))
      .to.equal(true)
  })
  it('should output true for Dsus4add9', () => {
    expect(api.isValidChord('Dsus4add9'))
      .to.equal(true)
  })
  it('should output false for Fblah', () => {
    expect(api.isValidChord('Fblah'))
      .to.equal(false)
  })
})

describe('api/index isValidNote', () => {
  it('should output true for a blank input', () => {
    expect(api.isValidNote(''))
      .to.equal(true)
  })
  it('should output true for D', () => {
    expect(api.isValidNote('D'))
      .to.equal(true)
  })
  it('should output false for Fblah', () => {
    expect(api.isValidNote('Fblah'))
      .to.equal(false)
  })
})

describe('api/index transposeNote', () => {
  it('should transpose correctly', () => {
    expect(api.transposeNote('C', 'Bb'))
      .to.equal('D')
  })
})

describe('api/index transposeVoicing', () => {
  it('should transpose correctly', () => {
    let voicing = ['E', 'D', 'B', 'G#']
    let instruments = {
      a: {key: 'C'},
      b: {key: 'Bb'},
      c: {key: 'D'},
      d: {key: 'C'}
    }
    expect(api.transposeVoicing(voicing, instruments).b)
      .to.equal('C#')
  })
})

describe('api/index voicing', () => {
  let chord = 'Am7'
  let melody = 'C'
  let rule = 'r_54321'
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
    expect(api.voicing(chord, melody, rule, instruments).i_1496284508012)
      .to.equal('F#')
  })
  it('should output blank on blank chord', () => {
    expect(api.voicing('', melody, rule, instruments).i_1496284508012)
      .to.equal()
  })
})
