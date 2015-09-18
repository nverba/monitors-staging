angular.module('uptimerobot').factory('fetchMonitors', ['$http', monitorServiceFn]);

function monitorServiceFn($http) {
	
	var url = "https://api.uptimerobot.com/getMonitors?apiKey=m777091914-646a859e24b88474997640bb&format=json&customUptimeRatio=7-30";
	
	$http.get(url).then(function(res) {
		console.log(res);
	});
	
}