let ctx2 = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não'],
        datasets: [{
            data: [47, 33],
            backgroundColor: [
                'rgba(216, 116, 1, 0.527)',
                'rgba(75, 192, 192, 0.6)'
            ],
            borderColor: [
                '#D87501',
                'rgba(75, 192, 192, 1)'
            ],

            borderWidth: 2
        }]
    },
    options: {
        title: {

            display: true,

            fontSize: 20,

            text: "SUBTOM",

            position: 'top',

            fontColor: "#D87501"
        },

        legend: {

            position: 'bottom',
            labels: {
                fontColor: "#D87501",
                fontWeight: "300"
            }
        },
        scales: {
            y: {
                beginAtZero: true,

            }
        }
    }
});


let ctx4 = document.getElementById('myChart4').getContext('2d');
let myChart4 = new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: ['Azuladas', 'Esverdeadas', 'Ambas'],
        datasets: [{
            data: [47, 33, 66],
            backgroundColor: [
                'rgba(216, 116, 1, 0.527)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 193, 60, 0.61)'
            ],
            borderColor: [
                '#D87501',
                'rgba(75, 192, 192, 1)',
                '#FFC13C'
            ],

            borderWidth: 2
        }]
    },
    options: {
        title: {

            display: true,

            fontSize: 20,

            text: "SUBTOM",

            position: 'top',

            fontColor: "#D87501"
        },

        legend: {

            position: 'bottom',
            labels: {
                fontColor: "#D87501",
                fontWeight: "300"
            }
        },
        scales: {
            y: {
                beginAtZero: true,

            }
        }
    }
});

let ctx3 = document.getElementById('myChart3').getContext('2d');
let myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Sim', 'Não'],
        datasets: [{
            data: [47, 33],
            backgroundColor: [
                'rgba(216, 116, 1, 0.527)',
                'rgba(75, 192, 192, 0.6)'
            ],
            borderColor: [
                '#D87501',
                'rgba(75, 192, 192, 1)'
            ],

            borderWidth: 2
        }]
    },
    options: {
        title: {

            display: true,

            fontSize: 20,

            text: "SUBTOM",

            position: 'top',

            fontColor: "#D87501"
        },

        legend: {

            position: 'bottom',
            labels: {
                fontColor: "#D87501",
                fontWeight: "300"
            }
        },
        scales: {
            y: {
                beginAtZero: true,

            }
        }
    }
});