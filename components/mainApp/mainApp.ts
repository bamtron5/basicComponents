namespace App.components {
  const componentName = 'mainApp'; //<contact-list></contact-list>
  const templateUrl = '/components/mainApp/mainApp.html';

  export interface IContact {
    firstName:string;
    lastName:string;
    phone:string;
  }

  export const contacts:[IContact] = [
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
