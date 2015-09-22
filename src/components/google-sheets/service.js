import config from "../../../config";

var goog = `https://spreadsheets.google.com/feeds/list/${ config.sheetLogKey }/od6/public/basic?alt=json`;

angular.module('googleSheetsService', []);
angular.module('googleSheetsService').factory('fetchSheet', ['$http', monitorServiceFn]);

function updateTime(date, time) {
	var times = time.split(':');
	date.setHours(times[0]);
	date.setMinutes(times[1]);
	return date;
}

function monitorServiceFn($http) {
	
	return function() {
		return $http.get(goog).then(sheetTransformFn);
	};

	function sheetTransformFn(res) { //console.log(res);
		
		return res.data.feed.entry.map(function(entry) {
			
			var obj = {};
			
			entry.content.$t.split(/,\s(?=\w+:)/).forEach(function(content) {
				var arr = content.split(/:\s/);
				obj[arr[0]] = arr[1];
			});
	
			obj.startdate = new Date(entry.title.$t);
			
			if (obj.starttime) {
				let st = new Date(obj.startdate);
				obj.starttime = updateTime(st, obj.starttime);
			}
			
			if (obj.enddate) {
				obj.enddate = new Date(obj.enddate);
				if (obj.endtime) {
					let et = new Date(obj.enddate);
					obj.endtime = updateTime(et, obj.endtime);
				}
			}
			
			return obj;
			
		});
	}
}