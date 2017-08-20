import Drop2 from '@/api/rules/drop_2'

describe('api/rules/drop_2', () => {
  it('should have the right name', () => {
    expect(Drop2.name)
      .to.equal('Drop 2')
  })
  it('should have output the correct voicings', () => {
    expect(Drop2.makeVoicing('Am', 'C')[1])
      .to.equal('C')
  })
})
