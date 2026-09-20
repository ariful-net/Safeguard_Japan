window.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('reliefChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Food & Water', 'Medical Aid', 'Shelter'],
                datasets: [{
                    data: [12, 19, 7],
                    backgroundColor: ['#ef4444', '#10b981', '#3b82f6']
                }]
            }
        });
    }

    const list = document.getElementById('requestList');
    if (list) {
        const offlineData = JSON.parse(localStorage.getItem('relief_requests') || '[]');
        list.innerHTML = offlineData.length ? offlineData.map(r => `
            <div class="p-2.5 bg-slate-900 border border-slate-800 rounded-lg flex justify-between">
                <span><strong>${r.name}</strong> (${r.type})</span>
                <span class="text-slate-500">${r.location}</span>
            </div>
        `).join('') : '<p class="text-slate-500">No active offline requests found.</p>';
    }
});