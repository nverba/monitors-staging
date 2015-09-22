angular.module('logEntryDirective', []);
angular.module('logEntryDirective').directive('logEntry', [logEntryFn]);

function logEntryFn() {
	
	return {

		restrict: 'A',
		scope: { "log": "=logEntry" },
		templateUrl: './src/components/log-entry/template.html',
		link: function (scope, elem, attrs) {
			
		}
	};
}



