Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#273746','#2E86C1']
})





function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

Highcharts.chart('container1', {

    title: {
        text: 'Number of attacks and deaths worldwide through the years, 2000 to 2019'
    },

    subtitle: {
        text: 'Source: <a href="https://start.umd.edu/gtd/">Global Terrorism database(GTD)</a>'
    },

    yAxis: {
        title: {
            text: 'Number of Attacks/Deaths'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2000 to 2019'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2000
        }
    },

    series: [{
        name: 'No of Attacks',
        data: [1823,  1912, 1330, 1278, 1164, 2017, 2757, 3247, 4801, 4722, 4826, 5076, 8521, 12045,  16959,  15133,  14046,  11358,  9840, 8495,]
    }, { name: 'No of Deaths',
       data:[4394,  7727, 4797, 3317, 5716, 6343, 9316, 12825,  9157, 9277, 7829, 8246, 15494,  22280,  44524,  38993,  35236,  26892,  23290,  20329,]

  }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
