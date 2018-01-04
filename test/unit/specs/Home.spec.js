import Vue from 'vue'
import Home from '@/components/Home'

describe('Home.vue', () => {
  const Constructor = Vue.extend(Home)
  const vm = new Constructor().$mount()
  it('should have titles', () => {
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Autostrate')
    expect(vm.$el.querySelector('h4').textContent)
      .to.equal('A harmonization tool')
    expect(vm.$el.querySelector('h5').textContent)
      .to.include('Version ')
  })
  it('should have a title "Autostrate"', () => {
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Autostrate')
  })
  it('should have a description "A harmonization tool"', () => {
    expect(vm.$el.querySelector('h4').textContent)
      .to.equal('A harmonization tool')
  })
  it('should have a version number', () => {
    let versionText = vm.$el.querySelector('h5').textContent.split(' ')
    expect(versionText[0])
      .to.equal('Version')
    expect(isNaN(versionText[1]))
      .to.be.false
  })

  it('should have features section heading', () => {
    expect(vm.$el.querySelector('#grid-hdg').textContent)
      .to.equal('Features')
  })
  // Check each feature in turn
  for (let n = 1; n <= 4; n++) {
    it('should have a title for feature ' + n, () => {
      expect(vm.$el.querySelector('#grid-fh'.concat(n)).textContent).to.exist
    })
    it('should have a description for feature ' + n, () => {
      expect(vm.$el.querySelector('#grid-fp'.concat(n)).textContent).to.exist
    })
    it('should have an image for feature ' + n, () => {
      let imageElement = vm.$el.querySelector('#grid-fi'.concat(n))
      expect(imageElement.attributes.getNamedItem('src')).to.exist
    })
  }

  it('should have a quote', () => {
    expect(vm.$el.querySelector('#grid-qtt').textContent)
      .to.exist
  })
  it('should have a quote attribution', () => {
    expect(vm.$el.querySelector('#grid-qta').textContent)
      .to.exist
  })

  it('should have a "Get Started Button"', () => {
    expect(vm.$el.querySelector('#grid-btn').textContent)
      .to.equal('Get Started')
  })
})
