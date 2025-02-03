
        // Initialize Charts
        const trendChart = new Chart(document.getElementById('trendChart'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Total Claims',
                    data: [500, 590, 610, 560, 580, 600],
                    borderColor: '#0d6efd'
                }, {
                    label: 'Cyber Scams',
                    data: [50, 55, 45, 60, 58, 54],
                    borderColor: '#dc3545'
                }]
            },
            options: {
                responsive: true
            }
        });

        const accuracyChart = new Chart(document.getElementById('accuracyChart'), {
            type: 'doughnut',
            data: {
                labels: ['Users prone to scams', 'Users not prone to scams'],
                datasets: [{
                    data: [70, 30],
                    backgroundColor: ['#198754', '#ffc107', '#dc3545']
                }]
            }
        });

        const categoryChart = new Chart(document.getElementById('categoryChart'), {
            type: 'bar',
            data: {
                labels: ['North', 'South', 'East', 'West'],
                datasets: [{
                    label: 'Stock market scam',
                    data: [20, 15, 25, 18],
                    backgroundColor: '#0d6efd'
                }, {
                    label: 'Investment Scam',
                    data: [15, 20, 15, 22],
                    backgroundColor: '#dc3545'
                }, {
                    label: 'Lottery Scam',
                    data: [10, 12, 8, 15],
                    backgroundColor: '#198754'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        stacked: true
                    },
                    y: {
                        stacked: true
                    }
                }
            }
        });

        // Initialize DataTable
        $(document).ready(function() {
            $('#fraudTable').DataTable({
                pageLength: 5,
                lengthMenu: [[5, 10, 25, 50], [5, 10, 25, 50]]
            });
        });

        // Dark Mode Toggle
        let darkMode = false;
        document.getElementById('toggleTheme').addEventListener('click', function() {
            darkMode = !darkMode;
            document.body.classList.toggle('bg-dark');
            document.body.classList.toggle('text-white');
            this.innerHTML = darkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
            // Update charts theme here
        });