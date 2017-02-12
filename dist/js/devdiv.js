
"use strict";

devdiv.directive('devDiv', [function () {
	return {
		restrict: 'E',
		link: function (scope, iElement, iAttrs) {
			iElement.addClass("dev-div");
			iElement.addClass("row");
		}
	};
}])

devdiv.controller('NameCtrl', ["$scope", "$watch", function ($scope, $watch) {
	
}]);
"use strict";

devdiv.directive('devLayout', [function () {
	return {
		restrict: 'E',
		link: function (scope, iElement, iAttrs) {
			iElement.addClass("dev-layout");
		}
	};
}])