let googleClientId
const clientIds = {
  production: '1050762786478-mhv4d9v3t4kuk117cuampvc4tpo3i02j.apps.googleusercontent.com',
  development: '326254808743-oqfspace8f7v5i0irb7bv37m7m1gn08l.apps.googleusercontent.com'
}

if (window.location.hostname === 'localhost') {
  googleClientId = clientIds.development
} else {
  googleClientId = clientIds.production
}

export default googleClientId
