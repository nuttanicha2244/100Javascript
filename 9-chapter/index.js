//การเรียกใช้ข้อมูลสภาพอากาศจากหลายแหล่ง และใช้ผลลัพธ์จากแหล่งที่ตอบกลับเร็วที่สุด

async function fetchWeatherData() {
    try {
        const weatherData = await Promise.any([
            fetch('https://api.weatherapi.com/v1/current.joson?key=YOUR_API_KEY&q=Bangkok').then(res =>res.json()),
            fetch('https://api.open-meteo.com/v1/forecast?latitude=13.75&longitude=100.5&current_weather=true').then(res =>res.json()),
            fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=13.75&lon=100.5').then(res =>res.json()),
        ])
        console.log('Weather Data from fastest source: ',weatherData);
        
    } catch (error) {
        console.error('All weather APIs failed: ', error.errors);
    }
}
await fetchWeatherData();
