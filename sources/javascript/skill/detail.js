NJCControllers.controller('skillDetail', [
  '$routeParams', '$rootScope', '$scope', '$location', '$window', 'sCharacterBase', 'sSkillCommon',
  'sSkillExtra', 'sUser',
  function (
    $routeParams, $rootScope, $scope, $location, $window, sCharacterBase, sSkillCommon,
    sSkillExtra, sUser
  ) {

    $rootScope.pageColor = '#ff7b7b';
    $rootScope.pageName = 'njc-page-skill';

    $scope.isAdditionnal = false;
    $scope.deleteSkill = function (key) {

      sUser.removeSkill(key, true);
    };

    sCharacterBase.load().then(function (data) {

      $scope.characterBases = data;

      sSkillCommon.load().then(function (data) {
        $scope.commonSkills = data;
        if (data[$routeParams.key]) {
          $scope.skill = data[$routeParams.key];
          $scope.score = sUser.getSkillValues($scope.skill);
          $scope.isAdditionnal = false;
          $scope.base = $scope.characterBases[data[$routeParams.key].base.toLowerCase()];
        }
      });

      sSkillExtra.load().then(function (data) {
        $scope.additionnalSkills = data;
        if (data[$routeParams.key]) {
          $scope.skill = data[$routeParams.key];
          $scope.score = sUser.getSkillValues($scope.skill);
          $scope.isAdditionnal = true;
          $scope.base = $scope.characterBases[data[$routeParams.key].base.toLowerCase()];
        }
      });

    });

  }
]);
