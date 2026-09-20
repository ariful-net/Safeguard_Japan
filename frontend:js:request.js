function submitReliefRequest(event) {
    event.preventDefault();

    const requestData = {
        name: document.getElementById('reqName').value,
        type: document.getElementById('reqType').value,
        location: document.getElementById('reqLocation').value,
        timestamp: new Date().toISOString()
    };

    let offlineRequests = JSON.parse(localStorage.getItem('relief_requests') || '[]');
    offlineRequests.push(requestData);
    localStorage.setItem('relief_requests', JSON.stringify(offlineRequests));

    fetch('http://localhost:8080/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
    })
    .then(res => res.json())
    .then(data => {
        alert("Request Submitted Successfully! Track ID: " + (data.id || "REQ-LOCAL"));
        document.getElementById('reliefForm').reset();
    })
    .catch(() => {
        alert("Network unreachable. Saved in Offline LocalStorage!");
        document.getElementById('reliefForm').reset();
    });
}