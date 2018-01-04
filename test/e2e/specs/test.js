// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'test landing page': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('h1', 'Autostrate')
      .assert.containsText('h4', 'A harmonization tool')

    browser.expect.element('h5').text.to.contain('Version ')

    browser.expect.element('#grid-btn').text.to.contain('Get Started')

    browser
      .click('button[id="grid-btn"]')
      .waitForElementVisible('input[placeholder="Project Name"]', 1000)

  },
  'test editor': function (browser) {

    browser
      .assert.value('input[placeholder="Project Name"]', 'Default Project')
      .assert.value('input[placeholder="Key"]', 'C Major')
      .assert.containsText('h1', 'Chords')
      .assert.value('select', '')
      .assert.containsText('option[value="r_0"]', 'Drop 2')
      .assert.containsText('option[value="r_1"]', 'Close')
      .assert.containsText('button[name=button]', 'Add')
      .assert.containsText('a[class~=button]', 'New Istrument')
      .setValue('select', 'r_0')

    browser.end()
  }
}
