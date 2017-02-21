namespace App.services {
  export class GithubService {
    constructor(
      private $http: ng.IHttpService
    ) {
    }

    getGithubUser(selectedUser:string) {
      return this.$http.get(`https://api.github.com/users/${selectedUser}`);
    }
  }

  GithubService.$inject = ['$http'];

  angular.module('app').service('GithubService', GithubService);
}
