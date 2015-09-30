angular.module('monitorInfoDirective', []);
angular.module('monitorInfoDirective').directive('monitorInfo', [monitorInfoFn]);

function monitorInfoFn() {
	
	return {

		restrict: 'A',
		scope: { "monitor": "=monitorInfo" },
		templateUrl: './src/components/monitor-info/template.html',
		link: function (scope, elem, attrs) {
			
			console.log(scope.monitor);
			
			scope.uptimes = {};
			var upkey = [1, 2, 7, 14, 30];
			var splituptime =  scope.monitor.customuptimeratio.split('-');
			
			for (var u = 0; u < 5; u++) {
				scope.uptimes[upkey[u]] = splituptime[u];
			}

			var logs = scope.monitor.log.reverse();
			scope.incidents = [];
			
			for (var i = 0; i < logs.length; i++) {
				
				var log = logs[i];
				var llog = logs[i - 1];
				
				if (log.type === '2' && llog.type === '1') {
					let day = new Date(new Date(log.datetime).setHours(0, 0, 0, 0));					
					scope.incidents.push({ endtime: new Date(log.datetime), starttime: new Date(llog.datetime), day: day });
				}
			}
		}
	};
}