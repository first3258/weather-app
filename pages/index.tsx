import Head from 'next/head'
import WeatherTodaySection from '../components/WeatherToday/WeatherTodaySection'
import axios from 'axios'
import WeatherHoursSection from '../components/WeatherHours/WeatherHoursSection'

export default function Home(props  : any) {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="check weather" />
        <link rel="icon" href="/cloudy-sun.png" />
      </Head>

      <WeatherTodaySection weatherData={props.weatherData} />

      <WeatherHoursSection hourly={props.weatherData.hourly}/>
      
    </>
  )
}

export async function getServerSideProps() {


  const url = 'https://api.open-meteo.com/v1/forecast?latitude=13.76&longitude=100.64&hourly=temperature_2m,relativehumidity_2m,weathercode,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high&current_weather=true&timezone=Asia%2FBangkok&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max,weathercode'
  const { data } =  await axios.get(url)
  return { props: {
        weatherData: {
          temperature: data.current_weather.temperature,
          daily: data.daily,
          hourly: data.hourly,
        }
    } };
}

