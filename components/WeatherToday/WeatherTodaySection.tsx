import React from 'react'
import Title from '../Title'
import styled from 'styled-components'
import WeatherToday from './WeatherToday'
import Image from 'next/image';

interface WeatherTodaySectionProps {
  weatherData: {
    temperature: number
    daily: {
      time: string;
      temperature_2m_max: number[];
      temperature_2m_min: number[];
      windspeed_10m_max: number[];
      weathercode: string[]
    }
  }
}

const WeatherTodaySection = ({weatherData} : WeatherTodaySectionProps) => {
  return (
    <div className='section'>
      <Title title={'Weather °'}/>
      <Country>Thailand <hr /><span>Bangkok</span></Country>
      <Container>
        <WeatherToday temperature={weatherData.temperature} daily={weatherData.daily} />
      </Container>
      <a href='#hourly'>
        <DownArrow src='/down-arrow.png' alt='down' width={30} height={25}></DownArrow>
      </a>
      
    </div>
  )
}

export default WeatherTodaySection

const Country =  styled.div `
  color: rgba(134, 229, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.8vw;
  > span {
    font-size: 1.5vw;
  }
  > hr {
    width: 100%;
  }

  @media only screen and (max-width: 1200px) {
      font-size: 2rem;
      > span {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 900px) {
      font-size: 1.5rem;
      > span {
      font-size: 1rem;
    }
  }
  
`

const Container = styled.div `
  width: 100%;
  display: flex;

`

const DownArrow = styled(Image) `
  display: block;
  position: absolute;
  bottom: 25px;
  animation-name: moveDown;
  animation-duration: 1s;
  animation-iteration-count: infinite;

  @keyframes moveDown {
    0%   {transform: translateY(0);}
    50%  {transform: translateY(10px);}
    100% {transform: translateY(-5px);}
  }

  @media only screen and (max-width: 1200px) {
    display: none;
  }

`


