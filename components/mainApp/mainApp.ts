namespace App.components {
  const componentName = 'mainApp'; //<contact-list></contact-list>
  const templateUrl = '/components/mainApp/mainApp.html';

  export class MainApp {
    constructor() {
    }
  }
  angular.module('app')
    .component(componentName, {
      templateUrl: templateUrl,
      controller: MainApp,
      controllerAs: 'vm'
    })
}
