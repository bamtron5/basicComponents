namespace App.components {
  const componentName = 'contactList';
  const templateUrl = '/components/contactList/contactList.html';
  export class ContactList {
    contacts:[IContact];
    githubResult:any;
    selectedUser:string = 'bamtron5';
    $scope:ng.IScope;
    constructor(
      private $http: ng.IHttpService,
      $scope: ng.IScope,
      private GithubService: App.services.GithubService
    ) {
      this.$scope = $scope;
      this.$scope.$watch(() => this.selectedUser, (oldValue, newValue) => this.selectedUserChanged(oldValue, newValue));
      this.contacts = App.components.contacts;
      this.getSelectedUser();
    }

    selectedUserChanged(oldValue, newValue) {
      return oldValue !== newValue ? this.getSelectedUser() : angular.noop();
    }

    getSelectedUser() {
      this.GithubService.getGithubUser(this.selectedUser)
        .then((user) => {
          this.githubResult = user.data;
        })
        .catch((e) => {
          this.githubResult = e.data.message;
        })
    }
  }

  ContactList.$inject = ['$http', '$scope', 'GithubService'];
  angular.module('app')
    .component(componentName, {
      templateUrl: templateUrl,
      controller: App.components.ContactList,
      controllerAs: 'vm'
    })
}
