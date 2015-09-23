angular.module('systemMonitorDirective', []);
angular.module('systemMonitorDirective').directive('sysMonitor', [sysMonitorFn]);

function sysMonitorFn() {
	
	return {

		restrict: 'A',
		scope: { "monitor": "=sysMonitor" },
		templateUrl: './src/components/monitor/template.html',
		link: function (scope, elem, attrs) {
			
			
			scope.state_id = {
				
				"0": "paused",
				"1": "not checked yet",
				"2": "up",
				"8": "seems down",
				"9": "down"
			};
			
			scope.ico = {
				
				"0": "pause",
				"2": "check",
				"8": "error",
				"9": "warninng"
			};
			
		}
	};
}



