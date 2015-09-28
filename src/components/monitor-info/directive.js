angular.module('monitorInfoDirective', []);
angular.module('monitorInfoDirective').directive('monitorInfo', [monitorInfoFn]);

function monitorInfoFn() {
	
	return {

		restrict: 'A',
		scope: { "monitor": "=monitorInfo" },
		templateUrl: './src/components/monitor-info/template.html',
		link: function (scope, elem, attrs) {
			
			console.log('info monitor');

			
		}
	};
}



