const searchCity = () => {
    const inputValue = document.getElementById('input-area');
    const inputValueText = inputValue.value;
    inputValue.value = '';
    const apiKey = '8d4a9aa5b7532d375e5e38b1325f1f29';
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValueText}&appid=${apiKey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
};

const displayWeather = (data) => {
    /* console.log(data.weather[0].description); */
    /* console.log(data.name); */
    /* console.log(data.sys.country); */
    /* console.log(data.wind.speed); */
    console.log(data);

    const weatherDetails = document.getElementById('Weather-details');
    weatherDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('details');
    div.innerHTML = `
    <h3>City: ${data.name}, Country: ${data.sys.country}</h2>
    <h3>Weather: ${data.weather[0].description}</h3>
    <h3>Wind-Speed: ${data.wind.speed}, Wind-Degree:${data.wind.deg}</h3>
    <h3>Temperature: ${Math.round(data.main.temp-273)}<sup>o</sup>C , Feels-Like: ${Math.round(data.main.feels_like-273)}<sup>o</sup>C</h3>
    <h3>Humidity: ${data.main.humidity}%</h3>
    `;
    weatherDetails.appendChild(div);

}
    
const getTimeDate = () => {
    let today = new Date();
    let date = `${today.getDate()}-${(today.getMonth() + 1)}-${today.getFullYear()}`;

    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    const timeContainer = document.getElementById('time-containar');
    timeContainer.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `
            <h3>Time:${time}</h3>
            <h3>Date:${date}</h3>
    `;
    timeContainer.appendChild(div);
    
}

