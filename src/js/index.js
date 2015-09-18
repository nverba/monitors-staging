require('angular');
require('../components/monitor-service/monitor-service.js');

angular.module('monitors', ['uptimerobot']);
angular.module('monitors').controller('main', ['fetchMonitors', mainController]);

function mainController() {

}