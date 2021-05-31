function chart_load() {
    fetch("/paletas/paletaCores")
        .then(resposta => {
            if (resposta.ok) {
                resposta.json().then(function(resposta) {
                    console.log(resposta)
                    var paletas = [];
                    var opcoes = [];

                    for (var i = 0; i < resposta.length; i++) {
                        paletas.push(resposta[i].nome);
                        opcoes.push(resposta[i].opcoes);
                    }

                    var context = document.getElementById('chartPalette').getContext('2d');
                    var chartPalette = new Chart(context, {
                        type: 'bar',
                        data: {
                            labels: paletas,
                            datasets: [{
                                label: 'paletas',
                                data: opcoes,
                                backgroundColor: [
                                    'rgba(216, 116, 1, 0.527)',
                                    'rgba(75, 192, 192, 0.6)'
                                ],
                                borderColor: [
                                    '#D87501',
                                    'rgba(75, 192, 192, 1)'
                                ]
                            }]
                        },
                        options: {
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Paletas de cores por usuário',
                                    padding: 20,
                                    marginBottom: 20,
                                    font: {
                                        size: 24,
                                        color: '#D87501'
                                    }
                                },
                                legend: {
                                    display: false,
                                    position: 'bottom'
                                },
                            },
                            scales: {
                                y: {
                                    ticks: {
                                        stepSize: 1
                                    }
                                }
                            }
                        }
                    })
                    Chart.defaults.font.size = 15;
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function(error) {
            console.error(`Erro na obtenção dos dados: ${error.message}`);
        });
}