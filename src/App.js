import './App.css';
import usePageTags from './usePageTags';
import WeatherPage from './WeatherPage';

const App = () => {
  // Add page title and description metadata
  usePageTags('Gabriel Demo');
  return (
    <div className="container">
      <header className="header">
        Weather App Demo - For Interview
      </header>
      <main className="content">
        <WeatherPage />
      </main>
      <footer className="footer">
        Author: Gabriel; Github: https://github.com/ruozhengu/weather-app-interview
      </footer>
    </div>
  );
} 

export default App;
