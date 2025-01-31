document.addEventListener('DOMContentLoaded', (event) => {
    function updateTimeAndDay() {
        const todayDate = new Date();

        const utcHours = todayDate.getUTCHours()
        const utcMinutes = todayDate.getUTCMinutes()
        const day = todayDate.toLocaleDateString('en-US', { weekday: 'long' });

        document.getElementById('currentHour').innerHTML = utcHours
        document.getElementById('currentMinutes').innerHTML = utcMinutes
        document.getElementById('current-day').innerHTML = day;
        console.log('hour:', document.getElementById('currentHour').innerHTML)

    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000); // Update every second
});