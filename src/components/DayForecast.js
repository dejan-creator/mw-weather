
export const DayForecast = (props) => {
    return (
        <div class="day-forecast">
        <div class="day-forecast__header">{props.day}</div>
        <div class="day-forecast__body">
          <div class={`day-forecast__image weather-${props.weather}`}></div>
          <div class="day-forecast__temps">
            <span class="temp-day">{props.dayTemp}°</span>
            <span class="temp-night">{props.nightTemp}°</span>
          </div>
        </div>
      </div>
    )
};