'use strict';
/*jshint esnext: true */

class NavbarCtrl {
  constructor($scope) {
    $scope.time = new Date();
  }
}

NavbarCtrl.$inject = ['$scope'];

export default NavbarCtrl;
