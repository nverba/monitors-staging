require('angular');
require('../components/uptimerobot/service.js');

angular.module('monitors', ['uptimeRobotService']);
angular.module('monitors').controller('main', ['uptimeRobotSync', mainController]);

function mainController() {

	console.log('loaded controller');
	
	return {};

}