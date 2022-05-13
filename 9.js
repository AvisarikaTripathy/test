Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#003f5c','#2f4b7c','#665191','#a05195','#d45087','#f95d6a','#ff7c43','#ffa600','#45B39D']
})






Highcharts.chart('container9', {
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
            y: 21.02,
            sliced: true,
            selected: true
        }, {
            name: 'Assassination',
            y: 1.11
        }, {
            name: 'Bombing/Explosion',
            y: 49.40
        }, {
            name: 'Facility/Infrastructure attack',
            y: 23.26
        }, {
            name: 'Hijacking',
            y: 1.43
        }, {
            name: 'Hostage Taking(Barricade Incident)',
            y: 0.31
        }, {
            name: 'Hostage Taking(Kidnapping)',
            y: 0.55
        }, {
            name: 'Unarmed Assault',
            y: 2.55
        }, {
            name: 'Unknown',
            y: 0.31
        }]
    }]
});