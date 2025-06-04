// Sample data for the leaderboard
const leaderboardData = [
    {
        rank: 1,
        model: "Random Guessing",
        dd_acc: 0.4143,
        dd_f1: 0.4135,
        vra_acc: 0.4395,
        vra_f1: 0.4384,
        ll_acc: 0.1118,
        od_acc: 0.0880,
        kd_acc: 0.1120,
        rmse: 0.5372,
        mae: 0.4352,
        percent_4: 18.776,
        bleu: 6.4700,
        rouge: 20.1300,
        bert: 74.6900,
        bleu2: 50.2000,
        rouge2: 47.7500,
        bert2: 80.5000,
        u2score: 0.2125,
        category: "medical"
    },
    {
        rank: 2,
        model: "MindGPT-Med",
        dd_acc: 0.2468,
        dd_f1: 0.2828,
        vra_acc: 0.1800,
        vra_f1: 0.1048,
        ll_acc: 0.1728,
        od_acc: 0.1789,
        kd_acc: 0.0940,
        rmse: 0.2360,
        mae: 0.1786,
        percent_4: 33.2359,
        bleu: 2.7998,
        rouge: 13.5600,
        bert: 72.0050,
        bleu2: 33.4939,
        rouge2: 49.6236,
        bert2: 81.2078,
        u2score: 0.2375,
        category: "medical"
    },
    {
        rank: 3,
        model: "MedDr",
        dd_acc: 0.4508,
        dd_f1: 0.3118,
        vra_acc: 0.2071,
        vra_f1: 0.1214,
        ll_acc: 0.0720,
        od_acc: 0.0881,
        kd_acc: 0.0900,
        rmse: 0.2344,
        mae: 0.1786,
        percent_4: 38.2642,
        bleu: 2.7998,
        rouge: 13.5600,
        bert: 72.2050,
        bleu2: 33.4939,
        rouge2: 49.6236,
        bert2: 81.2078,
        u2score: 0.2573,
        category: "medical"
    },
    {
        rank: 4,
        model: "Qwen-2.5-VL-3B-Instruct",
        dd_acc: 0.4503,
        dd_f1: 0.3591,
        vra_acc: 0.2097,
        vra_f1: 0.1492,
        ll_acc: 0.0696,
        od_acc: 0.0649,
        kd_acc: 0.0894,
        rmse: 0.5008,
        mae: 0.4519,
        percent_4: 18.9055,
        bleu: 3.5018,
        rouge: 15.0327,
        bert: 72.8419,
        bleu2: 27.6748,
        rouge2: 44.7618,
        bert2: 79.8849,
        u2score: 0.3050,
        category: "open"
    },
    {
        rank: 5,
        model: "Qwen-2.5-VL-7B-Instruct",
        dd_acc: 0.4841,
        dd_f1: 0.3960,
        vra_acc: 0.2841,
        vra_f1: 0.2071,
        ll_acc: 0.1700,
        od_acc: 0.0755,
        kd_acc: 0.0880,
        rmse: 0.3414,
        mae: 0.3015,
        percent_4: 27.4038,
        bleu: 1.1900,
        rouge: 13.0100,
        bert: 68.1400,
        bleu2: 14.7700,
        rouge2: 38.6800,
        bert2: 77.3900,
        u2score: 0.2449,
        category: "open"
    },
    {
        rank: 6,
        model: "Qwen-2.5-VL-32B-Instruct",
        dd_acc: 0.4812,
        dd_f1: 0.3860,
        vra_acc: 0.2864,
        vra_f1: 0.2071,
        ll_acc: 0.1700,
        od_acc: 0.0755,
        kd_acc: 0.0880,
        rmse: 0.3414,
        mae: 0.3015,
        percent_4: 27.4038,
        bleu: 1.1900,
        rouge: 13.0100,
        bert: 68.1400,
        bleu2: 14.7700,
        rouge2: 38.6800,
        bert2: 77.3900,
        u2score: 0.2449,
        category: "open"
    },
    {
        rank: 7,
        model: "Qwen-2.5-VL-72B-Instruct",
        dd_acc: 0.4893,
        dd_f1: 0.4556,
        vra_acc: 0.2559,
        vra_f1: 0.1789,
        ll_acc: 0.1150,
        od_acc: 0.0660,
        kd_acc: 0.0860,
        rmse: 0.3296,
        mae: 0.2733,
        percent_4: 37.9170,
        bleu: 4.7800,
        rouge: 20.3400,
        bert: 72.6600,
        bleu2: 31.1200,
        rouge2: 44.2800,
        bert2: 80.9100,
        u2score: 0.2421,
        category: "open"
    },
    {
        rank: 8,
        model: "DeepSeek-VL2",
        dd_acc: 0.4126,
        dd_f1: 0.3190,
        vra_acc: 0.2268,
        vra_f1: 0.1111,
        ll_acc: 0.2950,
        od_acc: 0.1682,
        kd_acc: 0.1520,
        rmse: 0.2956,
        mae: 0.2508,
        percent_4: 12.3355,
        bleu: 7.4700,
        rouge: 20.5400,
        bert: 75.3800,
        bleu2: 11.4300,
        rouge2: 54.8500,
        bert2: 77.2400,
        u2score: 0.2650,
        category: "open"
    },
    {
        rank: 9,
        model: "InternVL3-9B-Instruct",
        dd_acc: 0.4447,
        dd_f1: 0.3716,
        vra_acc: 0.1926,
        vra_f1: 0.1083,
        ll_acc: 0.3000,
        od_acc: 0.1416,
        kd_acc: 0.0940,
        rmse: 0.2429,
        mae: 0.1733,
        percent_4: 50.8738,
        bleu: 2.1600,
        rouge: 14.7000,
        bert: 72.2100,
        bleu2: 21.5900,
        rouge2: 43.1300,
        bert2: 80.9800,
        u2score: 0.2566,
        category: "open"
    },
    {
        rank: 10,
        model: "LLaVA-1.5-13B",
        dd_acc: 0.4321,
        dd_f1: 0.3055,
        vra_acc: 0.1731,
        vra_f1: 0.0755,
        ll_acc: 0.1700,
        od_acc: 0.1259,
        kd_acc: 0.1100,
        rmse: 0.2307,
        mae: 0.1976,
        percent_4: 24.7964,
        bleu: 6.2800,
        rouge: 18.5800,
        bert: 73.7900,
        bleu2: 10.8300,
        rouge2: 29.4000,
        bert2: 75.5000,
        u2score: 0.2378,
        category: "open"
    },
    {
        rank: 11,
        model: "Phi-4-Multimodal-Instruct",
        dd_acc: 0.4566,
        dd_f1: 0.1148,
        vra_acc: 0.2452,
        vra_f1: 0.0557,
        ll_acc: 0.0350,
        od_acc: 0.0815,
        kd_acc: 0.1600,
        rmse: 0.2249,
        mae: 0.2006,
        percent_4: 16.1972,
        bleu: 3.2700,
        rouge: 16.5800,
        bert: 73.7700,
        bleu2: 5.8700,
        rouge2: 22.9800,
        bert2: 73.0800,
        u2score: 0.2168,
        category: "open"
    },
    {
        rank: 12,
        model: "Mistral-Small-3.1-24B-Inst.",
        dd_acc: 0.4359,
        dd_f1: 0.0936,
        vra_acc: 0.1964,
        vra_f1: 0.0664,
        ll_acc: 0.1300,
        od_acc: 0.0910,
        kd_acc: 0.1000,
        rmse: 0.1675,
        mae: 0.1331,
        percent_4: 45.9439,
        bleu: 1.8000,
        rouge: 14.9000,
        bert: 71.7200,
        bleu2: 20.7700,
        rouge2: 42.1200,
        bert2: 80.2400,
        u2score: 0.2356,
        category: "open"
    },
    {
        rank: 13,
        model: "Dobao-1.5-Vision-Pro-32k",
        dd_acc: 0.5580,
        dd_f1: 0.2597,
        vra_acc: 0.2922,
        vra_f1: 0.2147,
        ll_acc: 0.1700,
        od_acc: 0.0729,
        kd_acc: 0.1240,
        rmse: 0.3664,
        mae: 0.3377,
        percent_4: 33.1731,
        bleu: 0.7100,
        rouge: 6.6450,
        bert: 72.4000,
        bleu2: 8.6000,
        rouge2: 33.3000,
        bert2: 78.4200,
        u2score: 0.2587,
        category: "open"
    },
    {
        rank: 14,
        model: "GPT-4o-Mini",
        dd_acc: 0.4924,
        dd_f1: 0.3784,
        vra_acc: 0.1932,
        vra_f1: 0.1272,
        ll_acc: 0.1157,
        od_acc: 0.0846,
        kd_acc: 0.0960,
        rmse: 0.3267,
        mae: 0.1976,
        percent_4: 19.2508,
        bleu: 4.9800,
        rouge: 17.5230,
        bert: 74.1300,
        bleu2: 11.7300,
        rouge2: 36.2900,
        bert2: 77.5300,
        u2score: 0.2586,
        category: "closed"
    },
    {
        rank: 15,
        model: "GPT-4o",
        dd_acc: 0.4928,
        dd_f1: 0.4152,
        vra_acc: 0.1504,
        vra_f1: 0.0974,
        ll_acc: 0.1161,
        od_acc: 0.0850,
        kd_acc: 0.0840,
        rmse: 0.3712,
        mae: 0.3527,
        percent_4: 15.7895,
        bleu: 2.6800,
        rouge: 14.7700,
        bert: 73.2500,
        bleu2: 33.7700,
        rouge2: 49.9600,
        bert2: 81.5800,
        u2score: 0.2253,
        category: "closed"
    },
    {
        rank: 16,
        model: "Gemini-1.5-Pro",
        dd_acc: 0.3781,
        dd_f1: 0.2247,
        vra_acc: 0.0909,
        vra_f1: 0.0476,
        ll_acc: 0.2700,
        od_acc: 0.0661,
        kd_acc: 0.0980,
        rmse: 0.2772,
        mae: 0.2305,
        percent_4: 40.7051,
        bleu: 0.5800,
        rouge: 9.9800,
        bert: 70.5500,
        bleu2: 28.5800,
        rouge2: 45.9200,
        bert2: 80.0200,
        u2score: 0.1999,
        category: "closed"
    },
    {
        rank: 17,
        model: "Gemini-2.5-Pro-Exp",
        dd_acc: 0.4925,
        dd_f1: 0.4194,
        vra_acc: 0.1648,
        vra_f1: 0.1323,
        ll_acc: 0.1714,
        od_acc: 0.0945,
        kd_acc: 0.0820,
        rmse: 0.1945,
        mae: 0.1498,
        percent_4: 53.3333,
        bleu: 0.2600,
        rouge: 6.9200,
        bert: 40.2400,
        bleu2: 31.1800,
        rouge2: 48.6000,
        bert2: 81.6000,
        u2score: 0.2845,
        category: "closed"
    },
    {
        rank: 18,
        model: "Gemini-2.5-Pro-Preview",
        dd_acc: 0.4256,
        dd_f1: 0.3112,
        vra_acc: 0.2098,
        vra_f1: 0.1493,
        ll_acc: 0.2709,
        od_acc: 0.2714,
        kd_acc: 0.2518,
        rmse: 0.2937,
        mae: 0.2672,
        percent_4: 34.4970,
        bleu: 5.5010,
        rouge: 18.0180,
        bert: 74.4930,
        bleu2: 15.0110,
        rouge2: 38.0670,
        bert2: 78.9800,
        u2score: 0.2968,
        category: "closed"
    },
    {
        rank: 19,
        model: "Claude-3.7-Sonnet",
        dd_acc: 0.2121,
        dd_f1: 0.0449,
        vra_acc: 0.1633,
        vra_f1: 0.0879,
        ll_acc: 0.1156,
        od_acc: 0.0540,
        kd_acc: 0.0760,
        rmse: 0.1764,
        mae: 0.1350,
        percent_4: 36.0235,
        bleu: 0.6900,
        rouge: 11.5400,
        bert: 71.0600,
        bleu2: 12.5000,
        rouge2: 43.8600,
        bert2: 71.6600,
        u2score: 0.1996,
        category: "closed"
    },
    {
        rank: 20,
        model: "Qwen-Max",
        dd_acc: 0.4566,
        dd_f1: 0.2676,
        vra_acc: 0.1925,
        vra_f1: 0.0871,
        ll_acc: 0.1606,
        od_acc: 0.0761,
        kd_acc: 0.0940,
        rmse: 0.1248,
        mae: 0.0843,
        percent_4: 69.2308,
        bleu: 3.5900,
        rouge: 17.0230,
        bert: 73.9600,
        bleu2: 36.6700,
        rouge2: 49.0000,
        bert2: 82.5300,
        u2score: 0.2445,
        category: "closed"
    },
    {
        rank: 21,
        model: "Dolphin-V1",
        dd_acc: 0.5107,
        dd_f1: 0.4175,
        vra_acc: 0.3406,
        vra_f1: 0.2181,
        ll_acc: 0.1950,
        od_acc: 0.0791,
        kd_acc: 0.1500,
        rmse: 0.1898,
        mae: 0.1463,
        percent_4: 56.2500,
        bleu: 0.9500,
        rouge: 11.5400,
        bert: 71.0600,
        bleu2: 27.2800,
        rouge2: 43.8600,
        bert2: 80.0800,
        u2score: 0.2841,
        category: "open"
    }
];

let currentData = [...leaderboardData];
let sortColumn = 'rank';
let sortDirection = 'asc';

// DOM elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const refreshBtn = document.getElementById('refreshBtn');
const leaderboardBody = document.getElementById('leaderboardBody');
const totalModelsSpan = document.getElementById('totalModels');
const bestScoreSpan = document.getElementById('bestScore');
const lastUpdatedSpan = document.getElementById('lastUpdated');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderTable();
    updateStats();
    setupEventListeners();
    addStatsLoadAnimation();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Category filter
    categoryFilter.addEventListener('change', handleFilter);
    
    // Refresh button
    refreshBtn.addEventListener('click', handleRefresh);
    
    // Table sorting
    document.querySelectorAll('.sortable').forEach(header => {
        header.addEventListener('click', () => {
            const column = header.dataset.column;
            handleSort(column);
        });
    });
}

// Unified filter function
function applyAllFilters() {
    // Reset to original data first
    currentData = [...leaderboardData];

    // Apply search filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        currentData = currentData.filter(item =>
            item.model.toLowerCase().includes(searchTerm)
        );
    }

    // Apply category filter
    const category = categoryFilter.value;
    if (category) {
        currentData = currentData.filter(item => item.category === category);
    }

    renderTable();
    updateStats();
}

// Handle search
function handleSearch() {
    applyAllFilters();
}

// Handle category filter
function handleFilter() {
    applyAllFilters();
}

// Handle refresh
function handleRefresh() {
    // Add loading animation
    refreshBtn.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Refreshing...';
    
    setTimeout(() => {
        // Reset data and filters
        currentData = [...leaderboardData];
        searchInput.value = '';
        categoryFilter.value = '';
        sortColumn = 'rank';
        sortDirection = 'asc';
        
        renderTable();
        updateStats();
        
        refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
    }, 1000);
}

// Handle sorting
function handleSort(column) {
    if (sortColumn === column) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = column;
        sortDirection = 'asc';
    }
    
    currentData.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];
        
        // Handle different data types
        if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }
        
        if (column === 'date') {
            aVal = new Date(aVal);
            bVal = new Date(bVal);
        }
        
        if (sortDirection === 'asc') {
            return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
        } else {
            return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
        }
    });
    
    // Update sort indicators
    document.querySelectorAll('.sortable').forEach(header => {
        header.classList.remove('sorted');
        const icon = header.querySelector('i');
        icon.className = 'fas fa-sort';
    });
    
    const currentHeader = document.querySelector(`[data-column="${column}"]`);
    currentHeader.classList.add('sorted');
    const currentIcon = currentHeader.querySelector('i');
    currentIcon.className = sortDirection === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
    
    renderTable();
}

// Render the table
function renderTable() {
    leaderboardBody.innerHTML = '';

    // Calculate top 3 for each metric
    const metrics = ['dd_acc', 'dd_f1', 'vra_acc', 'vra_f1', 'll_acc', 'od_acc', 'kd_acc', 'rmse', 'mae', 'percent_4', 'bleu', 'rouge', 'bert', 'bleu2', 'rouge2', 'bert2', 'u2score'];
    const topValues = {};

    metrics.forEach(metric => {
        const values = currentData.map(item => item[metric]).sort((a, b) => {
            // For RMSE and MAE, lower is better (descending for top values)
            if (metric === 'rmse' || metric === 'mae') {
                return a - b;
            }
            // For all other metrics, higher is better
            return b - a;
        });

        topValues[metric] = {
            first: values[0],
            second: values[1],
            third: values[2]
        };
    });

    currentData.forEach((item) => {
        const row = document.createElement('tr');

        // Determine rank class for styling
        let rankClass = 'rank-cell';
        if (item.rank === 1) rankClass += ' rank-gold';
        else if (item.rank === 2) rankClass += ' rank-silver';
        else if (item.rank === 3) rankClass += ' rank-bronze';

        row.innerHTML = `
            <td class="model-cell">${item.model}</td>
            <td class="${rankClass}">#${item.rank}</td>
            <td class="score-cell" data-metric="dd_acc">${item.dd_acc}</td>
            <td class="score-cell" data-metric="dd_f1">${item.dd_f1}</td>
            <td class="score-cell" data-metric="vra_acc">${item.vra_acc}</td>
            <td class="score-cell" data-metric="vra_f1">${item.vra_f1}</td>
            <td class="score-cell" data-metric="ll_acc">${item.ll_acc}</td>
            <td class="score-cell" data-metric="od_acc">${item.od_acc}</td>
            <td class="score-cell" data-metric="kd_acc">${item.kd_acc}</td>
            <td class="score-cell" data-metric="rmse">${item.rmse}</td>
            <td class="score-cell" data-metric="mae">${item.mae}</td>
            <td class="score-cell" data-metric="percent_4">${item.percent_4}</td>
            <td class="score-cell" data-metric="bleu">${item.bleu}</td>
            <td class="score-cell" data-metric="rouge">${item.rouge}</td>
            <td class="score-cell" data-metric="bert">${item.bert}</td>
            <td class="score-cell" data-metric="bleu2">${item.bleu2}</td>
            <td class="score-cell" data-metric="rouge2">${item.rouge2}</td>
            <td class="score-cell" data-metric="bert2">${item.bert2}</td>
            <td class="score-cell" data-metric="u2score">${item.u2score}</td>
        `;
        leaderboardBody.appendChild(row);

        // Apply top 3 highlighting
        const cells = row.querySelectorAll('.score-cell[data-metric]');
        cells.forEach(cell => {
            const metric = cell.dataset.metric;
            const value = parseFloat(cell.textContent);

            if (value === topValues[metric].first) {
                cell.classList.add('top-1');
            } else if (value === topValues[metric].second) {
                cell.classList.add('top-2');
            } else if (value === topValues[metric].third) {
                cell.classList.add('top-3');
            }
        });
    });
}

// Update statistics with animation
function updateStats() {
    const totalModels = currentData.length;
    const bestScore = currentData.length > 0 ? Math.max(...currentData.map(item => item.u2score)) : 0;
    const lastUpdated = formatDate(new Date().toISOString().split('T')[0]);

    // Animate total models counter
    animateCounter(totalModelsSpan, parseInt(totalModelsSpan.textContent) || 0, totalModels, 1000);

    // Animate best score counter
    if (currentData.length > 0) {
        animateCounter(bestScoreSpan, parseFloat(bestScoreSpan.textContent) || 0, bestScore, 1000, 4);
    } else {
        bestScoreSpan.textContent = '-';
    }

    // Update last updated with fade effect
    fadeUpdateText(lastUpdatedSpan, lastUpdated);
}

// Animate counter with easing
function animateCounter(element, start, end, duration, decimals = 0) {
    // Add pulse effect during animation
    element.parentElement.classList.add('updating');

    const startTime = performance.now();
    const difference = end - start;

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (difference * easeOut);

        if (decimals > 0) {
            element.textContent = current.toFixed(decimals);
        } else {
            element.textContent = Math.round(current);
        }

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            // Ensure final value is exact
            if (decimals > 0) {
                element.textContent = end.toFixed(decimals);
            } else {
                element.textContent = end;
            }
            // Remove pulse effect
            element.parentElement.classList.remove('updating');
        }
    }

    requestAnimationFrame(updateCounter);
}

// Fade update text effect
function fadeUpdateText(element, newText) {
    element.style.transition = 'opacity 0.3s ease';
    element.style.opacity = '0.5';

    setTimeout(() => {
        element.textContent = newText;
        element.style.opacity = '1';
    }, 150);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Add some animation effects
function addRowAnimation() {
    const rows = document.querySelectorAll('#leaderboardBody tr');
    rows.forEach((row, index) => {
        row.style.opacity = '0';
        row.style.transform = 'translateY(20px)';

        setTimeout(() => {
            row.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// Add stats load animation
function addStatsLoadAnimation() {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.9)';

        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 200 + (index * 150));
    });
}
