Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#003f5c','#2f4b7c','#665191','#a05195','#d45087','#f95d6a','#ff7c43','#ffa600','#45B39D']
})



Highcharts.chart('container10', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Weapon type distribution, 2000-2019'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
	subtitle: {
        text: 'Source: <a href="https://start.umd.edu/gtd/">Global Terrorism database(GTD)</a>'
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
        name: 'weapon type',
        colorByPoint: true,
        data: [{
            name: 'Chemical',
            y: 0.31,
            sliced: true,
            selected: true
        }, {
            name: 'Explosives',
            y: 49.48
        }, {
            name: 'Firearms',
            y: 13.02
        }, {
            name: 'Incendiary',
            y: 31.49
        }, {
            name: 'Melee',
            y: 3.83
        }, {
            name: 'Other',
            y: 0.39
        }, {
            name: 'Sabotage Equipment',
            y: 0.15
        }, {
            name: 'Vehicle (not to include vehicle-borne explosives, i.e., car or truck bombs)',
            y: 0.55
        }, {
            name: 'Unknown',
            y: 0.71
        }]
    }]
});