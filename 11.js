Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#003f5c','#2f4b7c','#665191','#a05195','#d45087','#f95d6a','#ff7c43']
})



Highcharts.chart('container11', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Taget type distribution, 2000-2019'
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
        name: 'Target type',
        colorByPoint: true,
        data: [{
            name: 'Private citizens & property',
            y: 55.87,
            sliced: true,
            selected: true
        }, {
            name: 'Business',
            y: 7.66
        }, {
            name: 'Educational Institution',
            y: 1.03
        }, {
            name: 'Government',
            y: 6.15
        }, {
            name: 'Military',
            y: 2.79
        }, {
            name: 'Police',
            y: 15.49
        }, 
		{
            name: 'Other',
            y: 10.30
        }]
    }]
});