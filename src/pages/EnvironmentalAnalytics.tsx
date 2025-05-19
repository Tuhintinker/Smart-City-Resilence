import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wind, Droplets, Thermometer } from 'lucide-react';
import MetricCard from '../components/metricCard';
import { Line } from 'react-chartjs-2';
import Papa from 'papaparse';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

// City options
const cities = [
  { name: 'Bengaluru', state: 'Karnataka' },
  { name: 'Mumbai', state: 'Maharashtra' },
  { name: 'Delhi', state: 'Delhi' },
  { name: 'Chennai', state: 'Tamil Nadu' },
];

const EnvironmentalAnalytics = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [airQuality, setAirQuality] = useState('Loading...');
  const [airChange, setAirChange] = useState('Fetching data...');
  const [temperature, setTemperature] = useState('Loading...');
  const [temperatureChange, setTemperatureChange] = useState('Fetching data...');
  const [windSpeed, setWindSpeed] = useState('Loading...');
  const [windChange, setWindChange] = useState('Fetching data...');
  const [historicalData, setHistoricalData] = useState<any[]>([]);
  const [csvData, setCsvData] = useState<any[]>([]);

  const API_KEY = '1367bf4d-65c9-4278-8bf5-b9a218e061e4'; // Replace with your actual key

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const { name, state } = selectedCity;
        const response = await fetch(
          `https://api.airvisual.com/v2/city?city=${name}&state=${state}&country=India&key=${API_KEY}`
        );
        const data = await response.json();

        const aqi = data?.data?.current?.pollution?.aqius;
        const temp = data?.data?.current?.weather?.tp;
        const wind = data?.data?.current?.weather?.ws;

        // AQI
        if (aqi !== undefined) {
          setAirQuality(`${aqi} AQI`);
          setAirChange(
            aqi <= 50
              ? 'Good Air Quality'
              : aqi <= 100
                ? 'Moderate Air Quality'
                : 'Poor Air Quality'
          );
        } else {
          setAirQuality('N/A');
          setAirChange('Data unavailable');
        }

        // Temperature
        if (temp !== undefined) {
          setTemperature(`${temp}°C`);
          setTemperatureChange(
            temp > 30
              ? 'Above normal'
              : temp < 15
                ? 'Below average'
                : 'Within normal range'
          );
        } else {
          setTemperature('N/A');
          setTemperatureChange('No data available');
        }

        // Wind
        if (wind !== undefined) {
          setWindSpeed(`${wind} m/s`);
          setWindChange(
            wind > 5
              ? 'High wind speeds'
              : wind < 2
                ? 'Calm wind conditions'
                : 'Moderate wind'
          );
        } else {
          setWindSpeed('N/A');
          setWindChange('No data available');
        }

        // Historical data storage
        const newDataPoint = {
          city: name,
          date: new Date().toLocaleString(),
          aqi: aqi ?? 'N/A',
          temp: temp ?? 'N/A',
          wind: wind ?? 'N/A',
        };

        const key = `historicalData_${name}`;
        const storedData = JSON.parse(localStorage.getItem(key) || '[]');
        storedData.unshift(newDataPoint);
        if (storedData.length > 10) storedData.pop();
        localStorage.setItem(key, JSON.stringify(storedData));
        setHistoricalData(storedData);
      } catch (error) {
        console.error('Error fetching city data:', error);
        setAirQuality('N/A');
        setAirChange('Error fetching AQI');
        setTemperature('N/A');
        setTemperatureChange('Error fetching temperature');
        setWindSpeed('N/A');
        setWindChange('Error fetching wind speed');
      }
    };

    fetchCityData();
  }, [selectedCity]);

  useEffect(() => {
    fetch('/data/environmental_data_combined.csv')
      .then((res) => res.text())
      .then((text) => {
        const parsed = Papa.parse(text, { header: true });
        setCsvData(parsed.data);
  
        // Log the parsed CSV data to inspect the city values
        console.log('Parsed CSV Data:', parsed.data);
  
        // Log unique city names to check how they appear
        const uniqueCities = [...new Set(parsed.data.map((entry) => entry.City?.trim().toLowerCase()))];
        console.log('Unique Cities in CSV:', uniqueCities);
      });
  }, []);
  


  // Filter CSV data by selected city
  const cityHistorical = csvData.filter(
    (entry) => entry.City?.trim().toLowerCase() === selectedCity.name.toLowerCase()
  );

  console.log('Filtered Historical:', cityHistorical);
  console.log('Selected City:', selectedCity.name);


  const chartData = {
    labels: cityHistorical.map((entry) => entry.Date || entry.date),
    datasets: [
      {
        label: 'Air Quality (AQI)',
        data: cityHistorical.map((entry) => parseFloat(entry.AQI || entry.aqi)),
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
      },
      {
        label: 'Temperature (°C)',
        data: cityHistorical.map((entry) => parseFloat(entry.Temperature || entry.temp)),
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
      },
      {
        label: 'Wind Speed (m/s)',
        data: cityHistorical.map((entry) => parseFloat(entry.Wind || entry.wind)),
        borderColor: 'rgb(153, 102, 255)',
        fill: false,
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Environmental Analytics</h1>
        <p className="mt-1 text-sm text-gray-500">Real-time environmental metrics</p>

        <div className="mt-4">
          <label htmlFor="city" className="text-sm font-medium text-gray-700 mr-2">
            Select City:
          </label>
          <select
            id="city"
            className="p-2 border border-gray-300 rounded-md"
            value={selectedCity.name}
            onChange={(e) => {
              const city = cities.find((c) => c.name === e.target.value);
              if (city) setSelectedCity(city);
            }}
          >
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title={`Air Quality in ${selectedCity.name}`}
          value={airQuality}
          change={airChange}
          icon={Wind}
        />
        <MetricCard
          title="Water Quality"
          value="95%"
          change="2.3% improvement"
          icon={Droplets}
        />
        <MetricCard
          title="Temperature"
          value={temperature}
          change={temperatureChange}
          icon={Thermometer}
        />
        <MetricCard
          title="Wind Speed"
          value={windSpeed}
          change={windChange}
          icon={Wind}
        />
      </div>

      <div className="chart-container mt-8">
        <h2 className="text-lg font-semibold text-gray-900">Historical Trends for {selectedCity.name}</h2>
        {cityHistorical.length > 0 ? (
          <Line data={chartData} options={{ responsive: true }} />
        ) : (
          <p className="text-gray-500 mt-4">No historical data available for this city.</p>
        )}
      </div>
    </motion.div>
  );
};

export default EnvironmentalAnalytics;
