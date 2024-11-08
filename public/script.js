fetch('https://analytics.deadlock-api.com/v1/info')
    .then(response => response.json())
    .then(data => {
        try {
            document.getElementById('api-stat-fetched-today').innerText = data.fetched_matches_per_day.toLocaleString();
            document.getElementById('api-stat-fetched-total').innerText = data.table_sizes.match_info.rows.toLocaleString();
        } catch (e) {
            console.error('Failed to update API stats', e);
        }
    });
