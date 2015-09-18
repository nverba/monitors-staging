import config from "../../../config";

export default function() {

	angular.module('uptimeRobotService', [])
	angular.module('uptimeRobotService').factory('uptimeRobotSync', ['$http', monitorServiceFn]);
	
	function monitorServiceFn($http) {
		
		console.log(config);
		
		var url = "https://api.uptimerobot.com/getMonitors?apiKey=m777091914-646a859e24b88474997640bb&format=json&customUptimeRatio=7-30&noJsonCallback=1"
		
		$http.get(url).success(function(data) {
			console.log('Returned', data);
		});
		
		
		var dataurl = "https://spreadsheets.google.com/feeds/list/0AtMEoZDi5-pedElCS1lrVnp0Yk1vbFdPaUlOc3F3a2c/od6/public/values?alt=json-in-script&callback="
		
		
		// https://docs.google.com/spreadsheets/d/1BlJc6q5JSBhSZumsqJSzW-3kCEG3L49KF9yzxiRa10k/?alt=json-in-script&callback=JSON_CALLBACK
		
		// https://spreadsheets.google.com/feeds/list/PUT-KEY-HERE/od6/public/values?alt=json-in-script&callback=JSON_CALLBACK
		
		// http://spreadsheets.google.com/feeds/feed/key/worksheet/public/basic?alt=json-in-script&callback=JSON_CALLBACK

		
		return {};
		
	}
}