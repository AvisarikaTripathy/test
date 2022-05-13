Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#273746','#2E86C1']
})



Highcharts.chart('container5', {
    chart: {
        type: 'packedbubble',
        height: '100%'
		
    },
    title: {
        text: 'Responsible groups for Terror Events, 2000-2019'
    },
	subtitle: {
        text: 'Source: <a href="https://start.umd.edu/gtd/">Global Terrorism database(GTD)</a>'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}'
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '80%',
            zMin: 0,
            zMax: 400,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'Inactive',
        data: [{
            value: 8, name: 'Shia Muslim extremists'
        },
        {
            value:10, name: 'Iraqi extremists'
        },
        {
            value:23, name: 'Sunni Muslim extremists'
        },
        {
           value: 145, name:'Islamic State of Iraq (ISI)'
        },
        {
            value:145,name:'Ansar al-Islam'
        },
		{
			value:548,name:"Donetsk People's Republic"
		},{
			value:2,name:'Mujahedin-e Khalq (MEK)'
		},
        {
            value:5,name:'Supreme Council for Islamic Revolution in Iraq (SCIRI)'
        }]
    },  {
        name: 'Active',
        data: [{
            value: 4519, name: 'Taliban'
        }, {
            value: 2931, name: 'Islamic State of Iraq and the Levant (ISIL)'
        },
        {
            value: 1773, name: 'Al-Shabaab'
        },
        {
           value: 833, name: 'Tehrik-i-Taliban Pakistan (TTP)'
        },
        {
            value:532, name:'Communist Party of India - Maoist (CPI-Maoist)'
        },
        {
            value:521 ,name:'New Peoples Army (NPA)'
        },
        {
            value:414, name:'Al-Qaida in Iraq'
        },
        
        {
            name: "Al-Qaida in the Arabian Peninsula (AQAP)",
            value: 1099
        },
        {
            name: "Jihadi-inspired extremists",
            value: 147
        },
        {
            name: "Anti-Muslim extremists",
            value: 129
        }]
    }]
});
