Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#003f5c','#665191','#a05195','#d45087','#f95d6a','#ff7c43','#ffa600','#45B39D','#2f4b7c']
})




Highcharts.chart('container13', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Attacks across region through the years, 2000 to 2019'
    },
    subtitle: {
        text: 'Source: <a href="https://start.umd.edu/gtd/">Global Terrorism database(GTD)</a>'
    },
    xAxis: {
        categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Number of attacks'
        },
        labels: {
            formatter: function () {
                return this.value / 1000;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ''
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Asia',
        data: [652,608,454,511,475,821,1217,1353,2334,2545,2464,2507,4410,5822,6132,5696,4742,4471,4172,3771]
    }, {
        name: 'Africa',
        data: [463,523,445,383,526,942,1300,1686,1915,1644,1794,2157,3569,5571,9316,8165,8639,6181,4947,4088]
    }, {
        name: 'Europe',
        data: [1234,1252,1112,1100,145,176,170,162,1209,1165,1261,1198,1173,1166,1963,1685,1136,1112,172,144]
    }, {
        name: 'America',
        data: [1215,1291,1198,1159,159,174,170,169,1175,1185,1173,1119,1176,1231,1325,1240,1247,1285,1425,1393]
    }, {
        name: 'Oceania',
        data: [6,4,2,4,2,1,6,1,1,1,9,12,10,13,21,5]
    }]
});