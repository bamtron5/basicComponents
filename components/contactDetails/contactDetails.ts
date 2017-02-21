namespace App.components {
  const componentName = 'contactDetails'; //<contact-list></contact-list>
  const templateUrl = '/components/contactDetails/contactDetails.html';

  export class ContactDetails {
    contacts:[IContact];
    contact:IContact;
    constructor(
      $stateParams: ng.ui.IStateParamsService
    ) {
      this.contact = contacts.filter((contact) => contact.firstName === $stateParams['firstName'])[0];
    }
  }

  ContactDetails.$inject = ['$stateParams'];

  angular.module('app')
    .component(componentName, {
      templateUrl: templateUrl,
      controller: App.components.ContactDetails,
      controllerAs: 'vm'
    })
}
