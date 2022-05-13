Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#003f5c','#665191','#a05195','#d45087','#f95d6a','#ff7c43','#ffa600','#45B39D','#2f4b7c']
})



Highcharts.chart('container2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Number of attacks across regions through the years, 2015 to 2019'
    },
    subtitle: {
        text: 'Source: <a href="https://start.umd.edu/gtd/">Global Terrorism database(GTD)</a>'
    },
    xAxis: {
        categories: ['Africa','Asia', 'Europe', 'America','Oceania'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of terrorist attacks',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 200,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 2015',
        data: [8165,5696,1020,240,12]
    }, {
        name: 'Year 2016',
        data: [8639,4742,408,247,10]
    }, {
        name: 'Year 2017',
        data: [6181,4471,408,285,13]
    }, {
        name: 'Year 2018',
        data: [4947,4172,275,425,21]
    },{
        name: 'Year 2019',
        data: [4088,3771,238,393,5]
    }]
});