require('angular');
require('../components/uptimerobot/service.js');
require('../components/google-sheets/service.js');
require('../components/log-entry/directive.js');
require('../components/monitor/directive.js');
require('../components/ng-filter/filter.js');
require('../components/monitor-info/directive.js');

angular.module('monitors', ['uptimeRobotService', 'googleSheetsService', 'logEntryDirective', 'systemMonitorDirective', 'monitorInfoDirective', 'angular.filter']);
angular.module('monitors').controller('main', ['fetchMonitors', 'fetchSheet', '$interval', '$location', mainControllerFn]);

// todo - move this to seperate component/module
angular.module('monitors').filter('asdate', function() {
  return function(input) {
    return new Date(input);
  };
});

function mainControllerFn(fetchMonitors, fetchSheet, $interval, $location) {
	
	var fetchData = angular.bind(this, function() {  console.log('fetching data');
		fetchMonitors().then(function(data) {  console.log(data);
			this.monitors = data;
		}.bind(this));
		
		fetchSheet().then(function(res) { console.log('result', res);
			this.log = res.reverse();
		}.bind(this));
	});
	
	fetchData();
	if ($location.host() !== 'localhost') {
		$interval(fetchData, 30000);
	}
	
	this.newDate = function(date) {
		
		console.log(date);
		
		return new Date(date);	
	};
}