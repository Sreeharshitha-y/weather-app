const timeEl= document.getElementById('time');
const dateEl = document.getElementById('date');
const current_weather_itemE1=document.getElementById('current_weather_item');
const timezone = document.getElementById('timezone');
const countryEl =document.getElementById('country');
const weatherforcastEl=document.getElementById('weather_forcast');
const current_tempEl=document.getElementById('current_temp');

setInterval(() => {
    const time = new Date();
    const month = time.getMonth() + 1; // Adding 1 to get the month in the 1-12 range
    const dayOfMonth = time.getDate(); // Get the day of the month
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    timeEl.innerHTML = `${hoursIn12HrFormat}:${minutes} <span id="am-pm">${ampm}</span>`;
}, 1000);