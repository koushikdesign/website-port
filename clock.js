const indiaClock = document.createElement('div');
indiaClock.className = 'india-clock';
indiaClock.setAttribute('aria-label', 'India time');
document.body.append(indiaClock);

const indiaTimeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
});

function updateIndiaClock() {
    indiaClock.textContent = `IST ${indiaTimeFormatter.format(new Date())}`;
    setTimeout(updateIndiaClock, 1000 - (Date.now() % 1000));
}

updateIndiaClock();
