Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#003f5c','#2f4b7c','#665191','#a05195','#d45087','#f95d6a','#ff7c43','#ffa600','#45B39D']
})



Highcharts.chart('container23', {
    chart: {
        zoomType: 'x',
        type: 'timeline'
    },
    xAxis: {
        type: 'datetime',
        visible: false
    },
    yAxis: {
        gridLineWidth: 1,
        title: null,
        labels: {
            enabled: false
        }
    },
    legend: {
        enabled: false
    },
    title: {
        text: 'Timeline of deadliest events in UK,2000-2019'
    },
    subtitle: {
        text: 'Source: <a href="https://start.umd.edu/gtd/">Global Terrorism database(GTD)</a>'
    },
    tooltip: {
        style: {
            width: 300
        }
    },
    series: [{
        dataLabels: {
            allowOverlap: false,
            format: '<span style="font-weight: bold;" > ' +
                '{point.x:%d %b %Y}</span><br/>{point.label}'
        },
        marker: {
            symbol: 'circle'
        },
        data: [{
            x: Date.UTC(2005, 07, 07),
            name: 'London',
            label: 'London: Suicide bomber attack in train',
            description: "A suicide bomber detonated inside the number 204 train as it traveled between Liverpool and Aldgate Stations in London underground subway.Abu Hafs al-Masri Brigades and the Secret Organization of al-Qaida in Europe both claimed responsibility"
        },  {
            x: Date.UTC(2009, 10, 16),
            name: 'Belfast',
            label: 'Belfast: Explosive in a Vehicle',
            description: "On Friday morning at about 0730, in Belfast, Northern Ireland, an improvised explosive device exploded underneath the passenger seat of a vehicle belonging to a police officer's girlfriend, wounding one civilian and damaging the vehicle. Oglaigh na hEireann (ONH) claimed responsibility."
        }, {
            x: Date.UTC(2010, 5, 4),
            name: 'Belfast',
            label: 'Belfast:Explosive device thrown at police station',
            description: "On Tuesday night at around 2330, in the Lurgan district of Northern Ireland, suspected dissident republicans threw an improvised explosive device was thrown at the perimeter wall of a police station."
        }, {
            x: Date.UTC(2012, 1, 19),
            name: 'Londonderry',
            label: 'Londonderry:explosion of a device',
            description: " An explosive device exploded on Strand Road near the Department of Health and Human Services in Londonderry city, Londonderry district, Northern Ireland, United Kingdom"
        },  {
            x: Date.UTC(2013, 11, 16),
            name: 'First multinational space station',
            label: 'Belfast:petrol bombs thrown at the Alliance party office',
            description: "Assailants threw two petrol bombs at the Alliance Party office in Belfast city, Belfast district, Northern Ireland, United Kingdom."
        },
		{
            x: Date.UTC(2017, 05, 22),
            name: 'Manchester',
            label: 'Manchester:suicide bomber in concert',
            description: "A suicide bomber, identified as Salman Abedi, detonated at the Manchester Arena following an Ariana Grande concert in Manchester, England, United Kingdom. In addition to the assailant, at least 22 people were killed and 119 people were injured in the blast. The Islamic State of Iraq and the Levant (ISIL) claimed responsibility and stated that the attack was carried out in response to transgressions against the lands of the Muslims."
        },
		{
            x: Date.UTC(2017, 09, 15),
            name: 'London',
            label: 'London:Explosive device in UG Train',
            description: "An explosive device detonated on a London Underground train at the Parsons Green station in London, England, United Kingdom. At least 69 people were injured in the blast. The Islamic State of Iraq and the Levant (ISIL) claimed responsibility for the incident. The assailant, identified as Ahmed Hassan, stated that he had previously been trained to kill by the group, but Hassan later revoked this claim."
        }
		/*{
            x: Date.UTC(2019, 01, 03),
            name: 'Belfast',
            label: 'Belfast',
            description: " Assailants opened fire on the office of Pat Sheehan, a Sinn Fein Member of the Legislative Assembly (MLA) in Monagh Crescent, Belfast, Northern Ireland, United Kingdom."
        }*/
		]
    }]
});