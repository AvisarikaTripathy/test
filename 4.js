Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#273746','#2E86C1']
})


Highcharts.chart('container4', {
    chart: {
        type: 'column',
        zoomType: 'y',
        //backgroundColor:"#FBFAE4"
    },
    title: {
        text: 'Top 5 Countries with maximum damage, 2000-2019'
    },
    subtitle: {
        text: 'Source: <a href="https://www.statista.com/statistics/611318/population-of-europe-by-country-and-gender/">statista.com</a>'
    },
    xAxis: {
        categories: [
            'Iraq',
			'Afghanistan',
			'Pakistan',
			'Nigeria',
			'India',
			

        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Attacks and Deaths'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px"><b>{point.key}</b></span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Attacks',
        data: [26594,16189,13391,4989,10435]

    }, {
        name: 'Deaths',
        data: [80341,57024,21656,26554,10724]

    }]
});