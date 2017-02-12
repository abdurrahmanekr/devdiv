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

devdiv.controller('NameCtrl', function ($scope, $watch) {
	
});