Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#003f5c','#2f4b7c']
})



Highcharts.chart('container20', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Top 5 UK cities with maximum damage. 2000-2019'
    },
    subtitle: {
        text: 'Source: '
    },
	subtitle: {
        text: 'Source: <a href="https://start.umd.edu/gtd/">Global Terrorism database(GTD)</a>'
    },
    xAxis: {
        categories: ['Belfast','Londonderry','London','Strabane','Newtownabbey'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total damage',
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
        y: 80,
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
        data: [377,181,52,26,24]
    }, 
	{
        name: 'Total deaths',
        data: [853,417,157,45,43]
    }]
});