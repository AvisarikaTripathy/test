Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#d45087','#665191','#a05195','#003f5c','#f95d6a','#ff7c43','#ffa600','#45B39D']
})
Highcharts.chart('container24', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'UK Terrorist attacks distribution, 2000-2019'
    },
    xAxis: {
        categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total damage per year'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Total wounded',
        data: [28,	33,	13,	11,	2,	787,	0,	20,	8,	12,	22,	3,	2,	64,	4,	22,	20,	341,	19,	23]
    },
	{
        name: 'Total death',
        data: [7,	8,	2,	2,	0,	57,	0,	4,	0,	3,	0,	1,	2,	4,	1,	1,	9,	42,	2,	5,]
    },
	{
        name: 'Total successful attacks',
        data: [50,	64,	15,	16,	4,	24,	3,	17,	32,	19,	37,	24,	25,	68,	65,	65,	70,	94,	75,	57]
    }, 
	
	{
        name: 'Total attacks',
        data: [61,94,21,23,5,29,6,24,39,23,57,47,54,136,104,114,104,123,101,86]
    }
	]
});

/**/

