"use strict";

devdiv.directive('devLayout', [function () {
	return {
		restrict: 'E',
		link: function (scope, iElement, iAttrs) {
			iElement.addClass("dev-layout");
		}
	};
}])