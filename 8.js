Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
 /* colors: ['#F39C12','#45B39D','#34495E','#E74C3C']*/
 colors: ['#003f5c','#7a5195','#ef5675','#ffa600']
})




Highcharts.chart('container8', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'UK Terrorist attacks distribution, 2000-2019'
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
        name: 'count',
        colorByPoint: true,
        data: [{
            name: 'Total attacks',
            y: 1251,
            sliced: true,
            selected: true
        }, {
            name: 'Total successful attacks',
            y: 824
        }, {
            name: 'Total death',
            y: 150
        }, {
            name: 'Total wounded',
            y: 1434
        }
        ]
    }]
});