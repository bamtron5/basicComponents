angular.module('app', ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
  (
    $stateProvider: ng.ui.router,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $locationProvider: ng.ILocationProvider
  ) => {
    $stateProvider
      .state('main', {
        url: '',
        abstract: true,
        template: '<main-app></main-app>'
      })
      .state('home', {
        parent: 'main',
        url: '/',
        template: '<contact-list></contact-list>'
      })
      .state('details', {
        parent: 'main',
        url: '/details/:name',
        template: '<contact-details></contact-details>'
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true,
      rewriteLinks: false
    });

    $urlRouterProvider.otherwise('/');
  }])
