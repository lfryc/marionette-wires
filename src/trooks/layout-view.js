import {LayoutView} from 'backbone.marionette';
import template from './layout-template.hbs';
import angular from 'angular';
import 'ups-admin-ui';

export default (function() {
  var root;

  return LayoutView.extend({
    template: template,
    className: 'container',

    onAttach: function () {
      root = document.getElementById('angular-app');
      angular.module('myApp', ['upsActivity'])
        .controller('MyCtrl', function ($scope) {
          $scope.xyz = 123;
        })
        .config(function ($interpolateProvider) {
          $interpolateProvider.startSymbol('#{').endSymbol('}');
        })
        .directive('upsActivity', function () {
          return {
            restrict: 'E',
            replace: false,
            controller: 'MyCtrl',
            //template: 'Hello there {{ xyz }}'
            templateUrl: 'components/app-detail/include/activity.html'
          };
        });

      angular.bootstrap(root, ['myApp']);
    },

    onDestroy: function () {
      root.parentNode.remove(root);
      root = null;
    }
  });
})();
