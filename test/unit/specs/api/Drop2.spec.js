import Drop2 from '@/api/rules/drop_2'

describe('api/rules/drop_2', () => {
  it('should have the right name', () => {
    expect(Drop2.name)
      .to.equal('Drop 2')
  })
  it('should have output the correct voicings', () => {
    expect(Drop2.makeVoicing({chord: 'Am7', melody: 'C'})[1].toString(true))
      .to.equal('e')
  })
})
