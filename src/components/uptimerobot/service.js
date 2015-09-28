import config from "../../../config";

angular.module('uptimeRobotService', []);
angular.module('uptimeRobotService').factory('fetchMonitors', ['$http', '$q', monitorServiceFn]);

function monitorServiceFn($http, $q) {
	
	let max = config.monitors.length;
	
	return function() {
		
		let results = [];
		
		for (var index = 0; index < max; index++) {
			results.push($http.get(`https://api.uptimerobot.com/getMonitors?apiKey=${ config.monitors[index] }&format=json&logs=1&customUptimeRatio=7-14-30&responseTimes=1&noJsonCallback=1`));
		}
		
		return $q.all(results).then(function(monitors) {
    	return monitors.map(function(monitor) {
				return monitor.data.monitors.monitor[0];
			});
		});
	};
}
