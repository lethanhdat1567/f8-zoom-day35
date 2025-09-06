import React from "react";
import styles from "./Weather.module.scss";

const weatherData = {
    hanoi: {
        city: "Hà Nội",
        temp: 28,
        humidity: 65,
    },
    hcm: {
        city: "TP.HCM",
        temp: 32,
        humidity: 78,
    },
    danang: {
        city: "Đà Nẵng",
        temp: 30,
        humidity: 82,
    },
};

function getWeather(temp, humidity) {
    if (temp < 25 || humidity > 85) {
        return { weather: "Mưa", icon: "🌧" };
    }
    if (temp > 30 && humidity < 70) {
        return { weather: "Nắng", icon: "☀" };
    }
    return { weather: "Có mây", icon: "⛅" };
}

function Weather() {
    const [weather, setWeather] = React.useState({
        ...weatherData.hanoi,
        ...getWeather(weatherData.hanoi.temp, weatherData.hanoi.humidity),
    });

    function handleSelect(e) {
        const value = e.target.value;
        const baseWeather = weatherData[value];
        if (baseWeather) {
            setWeather({
                ...baseWeather,
                ...getWeather(baseWeather.temp, baseWeather.humidity),
            });
        }
    }

    function handleRefresh() {
        const newTemp = weather.temp + (Math.floor(Math.random() * 11) - 5);
        const newHumidity =
            weather.humidity + (Math.floor(Math.random() * 11) - 5);

        setWeather({
            ...weather,
            temp: newTemp,
            humidity: newHumidity,
            ...getWeather(newTemp, newHumidity),
        });
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles["weather-container"]}>
                <div className={styles.icon}>{weather.icon}</div>
                <h2>{weather.city}</h2>
                <div className={styles.temp}>{weather.temp}°C</div>
                <div className={styles.condition}>{weather.weather}</div>
                <div className={styles.humidity}>
                    Độ ẩm: <strong>{weather.humidity}%</strong>
                </div>
                <div className={styles["city-select"]}>
                    <label htmlFor="city">Change City:</label>
                    <select id="city" onChange={handleSelect}>
                        <option value="hanoi">Hà Nội</option>
                        <option value="hcm">Hồ Chí Minh</option>
                        <option value="danang">Đà Nẵng</option>
                    </select>
                </div>
                <button className={styles["reset-btn"]} onClick={handleRefresh}>
                    Làm mới
                </button>
            </div>
        </div>
    );
}

export default Weather;
