document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('myPieChart').getContext('2d');
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Based Tokenholders', 'Liquidity', 'Locked by Sneed DAO', 'Treasury (Unallocated)'],
            datasets: [{
                label: 'Tokenomics',
                data: [756400000, 35600000, 78000000, 130000000],
                backgroundColor: [
                    'rgba(75, 255, 182, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(255, 99, 132, 0.2)',

                ],
                borderColor: [
                    'rgba(120, 120, 120, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(255, 99, 132, 1)',

                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        title: function(tooltipItems) {
                            // Tooltip title - Use the label from the dataset
                            return tooltipItems[0].dataset.label;
                        },
                        label: function(tooltipItem) {
                            // Tooltip body - Use the data label and value
                            let label = tooltipItem.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += new Intl.NumberFormat().format(tooltipItem.raw);
                            return label;
                        }
                    }
                }
            }
        }
    });
});
function openGuide () {
    document.querySelector('.how-to-buy').classList.toggle('is-paused');
}
