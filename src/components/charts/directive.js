angular.module('chartMonitorDirective', []);
angular.module('chartMonitorDirective').directive('chartMonitor', [chartMonitorFn]);

console.log('chart loaded');

var d = new Date();
var dx = new Date( new Date().setDate(d.getDate() + 1));
var dm = new Date( new Date(new Date().setDate(d.getDate() -7)).setHours(0, 0, 0, 0) );

function doData(ary) {
	return ary.map(function(item) {
		return { date: new Date(item.datetime), value: value };
	});
}

function chartMonitorFn() {
	
	console.log('chart registered');
	
	return {

		restrict: 'A',
		scope: { "monitor": "=chartMonitor" },
		templateUrl: './src/components/chart/template.html',
		link: function (scope, elem, attrs) {
			
			var datum = datum || {
					
				data: doData(scope.monitor.responsetime.reverse()),
				width: 300,
				height: 200,
				target: "#chart-" + scope.$parent.$index,
				x_accessor: "date",
				y_accessor: "value",
				max_x: dx,
				min_x: dm,
				interpolate: 'step-after',
				show_year_markers: false,
				y_axis: false,
				small_text: true,
				show_secondary_x_label: false,
				x_extended_ticks: true,
				missing_is_hidden: true,
				animate_on_load: true
			};

			elem.ready(function(){
				updateCharts();
			});
			
			function updateCharts() {
				MG.data_graphic(datum);
			}
		}
	};
}



