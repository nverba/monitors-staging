angular.module('chartMonitorDirective', []);
angular.module('chartMonitorDirective').directive('chartMonitor', [chartMonitorFn]);

var d = new Date();
var dx = new Date( new Date().setDate(d.getDate() + 1));
var dm = new Date( new Date(new Date().setDate(d.getDate() -7)).setHours(0, 0, 0, 0) );

function doData(ary) {
	return ary.map(function(item) {
		return { date: new Date(item.datetime), value: parseInt(item.value) };
	});
}

function chartMonitorFn() {
	
	return {

		restrict: 'A',
		scope: { "monitor": "=chartMonitor" },
		templateUrl: './src/components/charts/template.html',
		link: function (scope, elem, attrs) {

			var datum = datum || {

				data: doData(scope.monitor.responsetime.reverse()),
				width: 500,
				height: 200,
				target: "#chart-" + scope.$parent.$parent.$index,
				x_accessor: "date",
				y_accessor: "value",
				show_year_markers: false,
				interpolate: 'basic',
				small_text: true,
				top: 20,
				right: 20,
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



