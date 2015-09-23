require('angular');
require('../components/uptimerobot/service.js');
require('../components/google-sheets/service.js');
require('../components/log-entry/directive.js');
require('../components/monitor/directive.js');
require('../components/ng-group/filter.js');

angular.module('monitors', ['uptimeRobotService', 'googleSheetsService', 'logEntryDirective', 'systemMonitorDirective', 'ng.group']);
angular.module('monitors').controller('main', ['fetchMonitors', 'fetchSheet', '$interval', mainControllerFn]);

function mainControllerFn(fetchMonitors, fetchSheet, $interval) {
	
	var fetchData = angular.bind(this, function() {  console.log('fetching data');
		fetchMonitors().then(function(data) {  console.log(data);
			this.monitors = data;
		}.bind(this));
		
		fetchSheet().then(function(res) { console.log('result', res);
			this.log = res.reverse();
		}.bind(this));
	});
	fetchData();
	//$interval(fetchData, 30000);
}