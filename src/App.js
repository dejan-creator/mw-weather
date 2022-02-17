import logo from './logo.svg';
import './App.css';
import { DayForecast } from './components/DayForecast.js';


function App() {
  return (
    <div className="container">
    <h1>Weekly Weather Forecast</h1>
    
    <div className="week-forecast">
      <DayForecast day="Mon" dayTemp="20" nightTemp="11" weather="sunny" />
      <div className="day-forecast">
        <div className="day-forecast__header">Mon</div>
        <div className="day-forecast__body">
          <div className="day-forecast__image weather-cloudy"></div>
          <div className="day-forecast__temps">
            <span className="temp-day">18°</span>
            <span className="temp-night">11°</span>
          </div>
        </div>
      </div>

      <div className="day-forecast">
        <div className="day-forecast__header">Tue</div>
        <div className="day-forecast__body">
          <div className="day-forecast__image weather-partly-cloudy"></div>
          <div className="day-forecast__temps">
              <span className="temp-day">21°</span>
              <span className="temp-night">15°</span>
          </div>
        </div>
      </div>

      <div className="day-forecast">
        <div className="day-forecast__header">Wed</div>
        <div className="day-forecast__body">
          <div className="day-forecast__image weather-rainy"></div>
          <div className="day-forecast__temps">
            <span className="temp-day">8°</span>
            <span className="temp-night">1°</span>
          </div>
        </div>
      </div>

      <div className="day-forecast">
        <div className="day-forecast__header">Thu</div>
        <div className="day-forecast__body">
          <div className="day-forecast__image weather-snowy"></div>
          <div className="day-forecast__temps">
            <span className="temp-day">-2°</span>
            <span className="temp-night">-7°</span>
          </div>
        </div>
      </div>

      <div className="day-forecast">
        <div className="day-forecast__header">Fri</div>
        <div className="day-forecast__body">
          <div className="day-forecast__image weather-stormy-rain"></div>
          <div className="day-forecast__temps">
              <span className="temp-day">28°</span>
              <span className="temp-night">21°</span>
          </div>
        </div>
      </div>

      <div className="day-forecast">
        <div className="day-forecast__header">Sat</div>
        <div className="day-forecast__body">
          <div className="day-forecast__image weather-stormy"></div>
          <div className="day-forecast__temps">
            <span className="temp-day">35°</span>
            <span className="temp-night">27°</span>
          </div>
        </div>
      </div>

      <div className="day-forecast">
        <div className="day-forecast__header">Sun</div>
        <div className="day-forecast__body">
          <div className="day-forecast__image weather-sunny"></div>
          <div className="day-forecast__temps">
            <span className="temp-day">28°</span>
            <span className="temp-night">22°</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default App;
