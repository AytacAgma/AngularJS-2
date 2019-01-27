(function () {
    'use strict';

    angular.module('AssignmentApp', [])
        .controller('AssignmentController', AssignmentController);

    AssignmentController.$inject = ['$scope'];
    function AssignmentController($scope) {
        $scope.name = "";
        $scope.result = "";

        $scope.displayResult = function () {
            var result = calculateFood($scope.name);
            $scope.result = result;
        };


        function calculateFood(string) {
            var totalStringValue = 0;
            var foodResult = "";

            var str = $scope.name;

            if (str != "") {
                var words = str.split(',');

                for (var i = 0; i < words.length; i++) {
                    totalStringValue += 1;
                }
            }
            else
                totalStringValue = 0;

            if (totalStringValue < 4 && totalStringValue > 0) {
                foodResult = "Enjoy!";
            }
            else if (totalStringValue > 3) {
                foodResult = "Too much!";
            }
            else {
                foodResult = "Please enter data first";
            }

            return foodResult;
        }
    }

})();


//var str = 'The quick brown fox jumped over the lazy dog.';

//var words = str.split(',');

//console.log(words[3]);
// expected output: "fox"

//var chars = str.split('');
//console.log(chars[8]);
// expected output: "k"

//var strCopy = str.split();
//console.log(strCopy);
// expected output: Array ["The quick brown fox jumped over the lazy dog."]
