angular.module('myApp', []).controller('voteCtrl', function ($scope) {
    $scope.femaleCount = 0,
    $scope.maleCount = 0
    $scope.customStyle = {};

    $scope.female = function () {
        return $femaleCount;
    }

    $scope.addFemale = function () {
        $scope.femaleCount = $scope.femaleCount + 1;
        return $scope.femaleCount;
    }

    $scope.addMale = function () {
        $scope.maleCount = $scope.maleCount + 1;
        return $scope.maleCount;
    }
    $scope.genderRate = function (number) {
        rate = "0 %";

        if ($scope.femaleCount > $scope.maleCount) {
            $scope.customStyle.femalestyle = { "color": "green" };
            $scope.customStyle.malestyle = { "color": "red" };
        }
        else if ($scope.femaleCount < $scope.maleCount) {
            $scope.customStyle.femalestyle = { "color": "red" };
            $scope.customStyle.malestyle = { "color": "green" };
        }
        else {
            $scope.customStyle.femalestyle = { "color": "green" };
            $scope.customStyle.malestyle = { "color": "green" };
        }
        var total = $scope.femaleCount + $scope.maleCount;
        if (total != 0)
            rate = Math.floor((number / total) * 100) + " %";
        return rate;
    }

    
});