Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#273746','#2E86C1']
})




Highcharts.chart('container6', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Terrorists taken into Custody, 2000-2019'
    },
	subtitle: {
        text: 'Source: <a href="https://start.umd.edu/gtd/">Global Terrorism database(GTD)</a>'
    },
    xAxis: {
        categories: ['2000', '2001', '2002', '2003', '2004','2005', '2006', '2007', '2008', '2009','2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019',
		'2020']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total involved and captured terrorists'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [ {
        name: 'Terrorists taken into custody',
        data: [464,742,182,120,119,137,237,409,655,721,612,2321,1121,4545,4398,11212,10987,9888,3454,5456]
    },
	{
        name: 'Terrorists participated',
        data: [707,787,619,377,301,605,615,814,4158,4722,4826,5075,8521,12045,16959,15133,14046,11358,9840,8495]
    },]
});