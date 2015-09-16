'use strict';
// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'partials/partial1.html',
      controller: 'MyCtrl1'
    }).when('/view2', {
      templateUrl: 'partials/partial2.html',
      controller: 'MyCtrl2'
    }).otherwise({ redirectTo: '/view1' });
  }
]);
'use strict';
// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp').value('version', '0.1');
'use strict';
angular.module('myApp').controller('MyCtrl1', [function () {
  }]);
'use strict';
angular.module('myApp').controller('MyCtrl2', [function () {
  }]);
'use strict';
angular.module('myApp').filter('interpolate', [
  'version',
  function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/gm, version);
    };
  }
]);
'use strict';
angular.module('myApp').directive('appVersion', [
  'version',
  function (version) {
    return function (scope, elm, attrs) {
      elm.text(version);
    };
  }
]);