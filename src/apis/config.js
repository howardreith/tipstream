let googleClientId
const clientIds = {
  production: '326254808743-if5pm1sdv2cqs25ikdkdcbdh360pkvbk.apps.googleusercontent.com',
  development: '326254808743-oqfspace8f7v5i0irb7bv37m7m1gn08l.apps.googleusercontent.com'
}

if (window.location.hostname === 'localhost') {
  googleClientId = clientIds.development
} else {
  googleClientId = clientIds.production
}

export default googleClientId
