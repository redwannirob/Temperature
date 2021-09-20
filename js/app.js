const loadCity = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    const key = `d3d2f2091710b0db60a012275a480ea3`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${key}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCity(data))
}

const displayCity = city => {
    console.log(city)
    const infoContainer = document.getElementById('info-container');
    infoContainer.innerHTML = `
    <div class="weather-status text-white text-center">
    <img src="https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png" alt="">
    <h1>${city.name}</h1>
    <h3><span>${city.main.temp}</span>&deg;C</h3>
    <h1 class="lead">${city.weather[0].main}</h1>
</div>
    `
}