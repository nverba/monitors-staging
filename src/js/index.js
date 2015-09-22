require('angular');
require('../components/uptimerobot/service.js');
require('../components/google-sheets/service.js');
require('../components/log-entry/directive.js');
require('../components/monitor/directive.js');
require('../components/ng-group/filter.js');

angular.module('monitors', ['uptimeRobotService', 'googleSheetsService', 'logEntryDirective', 'systemMonitorDirective', 'ng.group']);
angular.module('monitors').controller('main', ['fetchMonitors', 'fetchSheet', mainControllerFn]);

function mainControllerFn(fetchMonitors, fetchSheet) {

	fetchMonitors().then(function(data) {  console.log(data);
		this.monitors = data;
	}.bind(this));
	
	fetchSheet().then(function(res) { console.log('result', res);
		this.log = res.reverse();
	}.bind(this));

}