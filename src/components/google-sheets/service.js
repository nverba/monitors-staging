import config from "../../../config";

var goog = `https://spreadsheets.google.com/feeds/list/${ config.sheetLogKey }/od6/public/basic?alt=json`

angular.module('googleSheetsService', []);
angular.module('googleSheetsService').factory('fetchSheet', ['$http', monitorServiceFn]);

function monitorServiceFn($http) {
	
	return function() {
		return $http.get(goog);
	};
	
}
