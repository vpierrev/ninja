NJCControllers.controller('CharacterCreate', [
  '$routeParams', '$rootScope', '$scope', '$location', '$window', 'sNinjaClan', 'sNinjaRank', 'sUser',
  function ($routeParams, $rootScope, $scope, $location, $window, sNinjaClan, sNinjaRank, sUser) {

    $scope.user = sUser.get();
    $scope.changeName = sUser.setName;
    $scope.updateRank = function (rank) {
        sUser.setRank(rank);
        $scope.user = sUser.get();
    };
    $scope.updateClan = function (clan) {

      sUser.setClan(clan).then(function (user) {
        $scope.user = user;
      });
    };
    $scope.updateName = function (name) {

      sUser.setName(name);
      $scope.user = sUser.get();
    };
    $scope.validate = function () {

      sUser.save();
      location.hash = '#/character/edit/';

    };

    $rootScope.pageColor = '#947bff';
    $rootScope.pageName = 'njc-page-create';

    sNinjaRank.load().then(function (data) {
      $scope.ninjaRanks = data;
    });

    sNinjaClan.load().then(function (data) {
      $scope.ninjaClans = data;
    });

  }
]);
