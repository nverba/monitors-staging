angular.module('uptimeRobotService', [])
angular.module('uptimeRobotService').factory('uptimeRobotSync', ['$http', monitorServiceFn]);

function monitorServiceFn($http) {
	
	var url = "https://api.uptimerobot.com/getMonitors?apiKey=m777091914-646a859e24b88474997640bb&format=json&customUptimeRatio=7-30&noJsonCallback=1"
	
	$http.get(url).success(function(data) {
		console.log('Returned', data);
	});
	
	return {};
	
}