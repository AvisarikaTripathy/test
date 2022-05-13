Highcharts.setOptions({
  lang: {
    thousandsSep: ' '
  },
  colors: ['#003f5c','#2f4b7c','#665191','#a05195','#d45087','#f95d6a','#ff7c43','#ffa600','#45B39D']
})


const text = 'localelections. clan-based.revenge.unknown. Tamils.independenthomeland.Islamic_extremists.borderdispute.assassination.Grudge.ransom. massacreSikh_civilians.prisoners.sabotageAbortion.anti-Islamic fundamentalist views.provoked.police.French.Corsican community.Defense Force.village.Revolutionary United Front (RUF).groups involved retaliatory attack.campaign.destabilize.weakening.security forces defend apostate Algerian.civil war.end.Protestants Catholics.tribal-nontribal.government attempts deregulate labor market'
    lines = text.split(/[,\. ]+/g),
    data = lines.reduce((arr, word) => {
        let obj = Highcharts.find(arr, obj => obj.name === word);
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);

Highcharts.chart('container21', {
    accessibility: {
        screenReaderSection: {
            beforeChartFormat: '<h5>{chartTitle}</h5>' +
                '<div>{chartSubtitle}</div>' +
                '<div>{chartLongdesc}</div>' +
                '<div>{viewTableButton}</div>'
        }
    },
    series: [{
        type: 'wordcloud',
        data,
        name: 'Occurrences'
    }],
    title: {
        text: 'Attack Motive of Terrorists'
    },
	subtitle: {
        text: 'Source: <a href="https://start.umd.edu/gtd/">Global Terrorism database(GTD)</a>'
    }
});