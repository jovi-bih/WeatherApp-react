import React from "react-dom";

export default function Weather() {
  return (
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <form id="search-form" class="mb-3">
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="search"
                  class="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div class="overview">
            <h1 id="city"></h1>
            <ul>
              <li>
                Last updated:<span id="date"></span>
              </li>
              <li id="description"></li>
            </ul>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="weather-temperature">
                <img
                  src="http://openweathermap.org/img/wn/10n@2x.png"
                  alt="clear"
                  id="icon"
                />
                <strong id="temperature"></strong>
                <span class="units">
                  <a href="#" id="celsius-link" class="active">
                    &deg;C
                  </a>{" "}
                  |
                  <a href="#" id="fahrenheit-link">
                    &deg; F{" "}
                  </a>
                </span>
              </div>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity"></span>
                </li>
                <li>
                  Wind: <span id="wind"></span>km/h
                </li>
              </ul>
            </div>
          </div>
          <div class="weather-forecast" id="forecast">
            <div class="row">
              <div class="col-2">
                <div class="weather-forecast-date">Thu</div>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/48/rain.png"
                  alt="Rain"
                  width="42"
                />
                <div class="weather-forecast-temperatures">
                  <span class="weather-forecast-temperature-max">18&deg;</span>
                  <span class="weather-forecast-temperature-min">12&deg;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <small>
          <a href="https://github.com/jovi-bih/Weather-App" target="_blank">
            Open-Source Code,{" "}
          </a>
          by
          <a href="https://github.com/jovi-bih/Weather-App" target="_blank">
            Bih Jovi
          </a>
          and
          <a
            href="https://majestic-kangaroo-ba08eb.netlify.app/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </small>
      </div>
    </div>
  );
}
