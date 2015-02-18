'use strict';
/*jshint esnext: true */

class SidebarCtrl {
  constructor($scope) {
    $scope.encodeURIComponent = window.encodeURIComponent;
  }
}

SidebarCtrl.$inject = ['$scope'];

export default SidebarCtrl;
