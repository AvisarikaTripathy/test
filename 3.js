Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#003f5c','#665191','#a05195','#d45087','#f95d6a','#ff7c43','#ffa600','#45B39D','#2f4b7c']
})





Highcharts.chart('container3', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Attack type distribution, 2000-2019'
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
        name: 'attack type',
        colorByPoint: true,
        data: [{
            name: 'Armed assault',
            y: 23.73,
            sliced: true,
            selected: true
        }, {
            name: 'Assassination',
            y: 6.56
        }, {
            name: 'Bombing/Explosion',
            y: 50.29
        }, {
            name: 'Facility/Infrastructure attack',
            y: 5.30
        }, {
            name: 'Hijacking',
            y: 0.30
        }, {
            name: 'Hostage Taking(Barricade Incident)',
            y: 0.38
        }, {
            name: 'Hostage Taking(Kidnapping)',
            y: 7.67
        }, {
            name: 'Unarmed Assault',
            y: 0.60
        }, {
            name: 'Unknown',
            y: 5.26
        }]
    }]
});