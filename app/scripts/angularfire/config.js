angular.module('firebase.config', [])
  .constant('FBURL', 'https://blinding-fire-6733.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous','facebook','google','twitter','github'])

  .constant('loginRedirectPath', '/login');
