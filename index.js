function updateclock() {
    
    const now = new Date();
    let hours = now.getHours()
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timestring = `${hours}:${minutes}:${seconds} ${amPm}`;
    document.getElementById('clock').textContent = timestring;

}
updateclock();
setInterval(updateclock, 1000);