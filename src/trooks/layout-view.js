import {LayoutView} from 'backbone.marionette';
import template from './layout-template.hbs';
import angular from 'angular';

export default (function() {
  var root;

  return LayoutView.extend({
    template: template,
    className: 'container',

    onAttach: function () {
      root = document.getElementById('angular-app');
      angular.module('myApp', [])
        .controller('MyCtrl', function ($scope) {
          $scope.xyz = 123;
        })
        .config(function ($interpolateProvider) {
          $interpolateProvider.startSymbol('#{').endSymbol('}');
        });

      angular.bootstrap(root, ['myApp']);
    },

    onDestroy: function () {
      root.parentNode.remove(root);
      root = null;
    }
  });
})();
