module.exports = {
    title: 'VuePress-Test',
    description: 'Just playing around',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'First', link: '/First.md' },
        { text: 'Second', link: '/Second.md' },
      ]
    },
    head: [
      ['link', { rel: 'icon', type: 'image/png', href: '/fivicon.png' }],
    ]
  }