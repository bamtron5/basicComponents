namespace App.components {
  const componentName = 'contactList'; //<contact-list></contact-list>
  const templateUrl = '/components/contactList/contactList.html';

  export class ContactList {
    contacts:[IContact];
    constructor() {
      this.contacts = App.components.contacts;
    }
  }
  angular.module('app')
    .component(componentName, {
      templateUrl: templateUrl,
      controller: App.components.ContactList,
      controllerAs: 'vm'
    })
}
