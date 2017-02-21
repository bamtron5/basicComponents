namespace App.components {
  const componentName = 'contactList'; //<contact-list></contact-list>
  const templateUrl = '/components/contactList/contactList.html';

  interface IContact {
    firstName:string;
    lastName:string;
    phone:string;
  }

  export class ContactList {
    contacts:[IContact];
    constructor() {
      this.contacts = [
        {
          firstName: 'Kevin',
          lastName: 'Gerfunkle',
          phone: '7147402000'
        },
        {
          firstName: 'Sled',
          lastName: 'Franchescho',
          phone: '7147402010'
        },
        {
          firstName: 'Sheera',
          lastName: 'TheGreat',
          phone: '911'
        }
      ];
    }
  }
  angular.module('app')
    .component(componentName, {
      templateUrl: templateUrl,
      controller: App.components.ContactList,
      controllerAs: 'vm'
    })
}
