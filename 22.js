Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#2f4b7c','#665191','#ff7c43']
})






Highcharts.chart('container22', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Top 5 cities with maximum damage, 2000 to 2019'
    },
    subtitle: {
        text: 'Source: <a href="https://start.umd.edu/gtd/">Global Terrorism database(GTD)</a>'
    },
    xAxis: {
        categories: ['Belfast','London','Londonderry','Strabane','Newtownabbey'],
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
        name: 'Total attacks',
        data: [377,52,181,26,24]
    }, {
        name: 'Total death',
        data: [853,157,417,45,43]
    },{
        name: 'Total wounded',
        data: [151,999,34,1,2]
    }]
});