import { useState, useEffect } from 'react';
import './WeatherPage.css';
import Loading from './Loading';
import throttle from 'lodash/throttle'

const API_KEY = '952569a3f546692d32ea76b868008171';
const REQUEST_URL = 'https://api.openweathermap.org/data/2.5/weather?'

const WeatherPage = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const throttledFetch = throttle(async () => {
        if (input.length) {
            setIsLoading(true)
            const response = await fetch(REQUEST_URL + `q=${input}&appid=${API_KEY}`);
            const json = await response.json();
            setWeatherData(json.weather);
        }
    }, 2000);

    useEffect(() => {
        throttledFetch();
        return () => {
            // Cancel any pending throttled function calls before unmounting the component
            throttledFetch.cancel();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);


    useEffect(() => {
        if (weatherData) {
            setIsLoading(false);
        }
    }, [weatherData])
        
    const handleInputChange = (e) => {
        setInput(e.target.value);
      };
    
    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} />
            <Loading isLoading={isLoading} />
            {weatherData && weatherData.length ? (
                <ul>
                    {weatherData.map((data, index) => (
                        <>
                            <li key={`${index}-main`}>{data.main}</li>
                            <li key={`${index}-description`}>{data.description}</li>
                        </>
                    ))}
                    
                </ul>
            ) : (
                <p>Type in a city name to see weather results...</p>
            )}
        </div>
)}


export default WeatherPage;