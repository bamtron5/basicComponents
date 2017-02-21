namespace App.components {
  const componentName = 'contactDetails'; //<contact-list></contact-list>
  const templateUrl = '/components/contactDetails/contactDetails.html';

  interface IContact {
    firstName:string;
    lastName:string;
    phone:string;
  }

  export class ContactDetails {
    constructor(
      $stateParams: ng.ui.IStateParamsService
    ) {

      console.log($stateParams['name']);
    }
  }

  ContactDetails.$inject = ['$stateParams'];

  angular.module('app')
    .component(componentName, {
      templateUrl: templateUrl,
      controller: App.components.ContactDetails,
      controllerAs: 'vm',
      bindings: {
        contact: '<'
      }
    })
}
