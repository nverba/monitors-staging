require('angular');
require('../components/uptimerobot/service.js');
require('../components/google-sheets/service.js');

angular.module('monitors', ['uptimeRobotService', 'googleSheetsService']);
angular.module('monitors').controller('main', ['fetchMonitors', 'fetchSheet', mainControllerFn]);

function mainControllerFn(fetchMonitors, fetchSheet) {

	console.log('loaded controller');
	
	fetchSheet().then(function(data) {
		console.log(data);
	});

}