import Drop2 from '@/api/rules/drop_2'

describe('api/rules/drop_2', () => {
  it('should have the right name', () => {
    expect(Drop2.name)
      .to.equal('Drop 2')
  })
  it('should output the correct voicings', () => {
    let voicing = Drop2.makeVoicing({chord: 'Am7', melody: 'C'})
    let secondInstrumentNote = voicing[1].toString(true)
    expect(secondInstrumentNote)
      .to.equal('e')
  })
})
