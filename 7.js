var csv = Papa.parse(document.getElementById('data').innerHTML);
Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#003f5c','#2f4b7c','#665191','#a05195','#d45087','#f95d6a','#ff7c43','#ffa600','#45B39D']
})


Highcharts.chart('container7', {
	title: {text: 'Terrorist activity statistics of cities in UK, 2000-2019'},
	
  xAxis: {
    type: 'category'
  },
 
  subtitle: {
        text: 'Source: <a href="https://start.umd.edu/gtd/">Global Terrorism database(GTD)</a>'
    },
	tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
  
  series: [{
    type: 'pie',
    name: 'people',
	
    data: [
      ['Total attacks', 35],
      ['Total successful attacks', 45],
      ['Total death', 29]
	  ['Total wounded',54]
    ],
    keys: ['name', 'y']
  }],
 
});




var select = document.getElementById('select');

select.addEventListener('change', (e) => {
  var month = e.target.value;
  var monthsArr = Highcharts.defaultOptions.lang.shortMonths;
  var monthIndex = monthsArr.indexOf(month) + 1;
  var data = [];

  for (var j = 0; j < csv.data.length; j++) {
    data.push([
      csv.data[j][0], +csv.data[j][monthIndex]
    ]);
  }

  Highcharts.charts.forEach((chart) => {
    chart.series[0].update({
      data: data
    }, false, false, false);

    chart.redraw();
  });
});
