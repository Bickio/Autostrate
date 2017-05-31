import api from '@/api/index'

describe('api/index isValidChord', () => {
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
