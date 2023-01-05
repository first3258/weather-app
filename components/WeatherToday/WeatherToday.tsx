import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import moment from 'moment'
import { converIcon } from '../../้helper/convertIcon';


interface WeatherTodayProps {
    temperature: number;
    daily: {
      time: string;
      temperature_2m_max: number[];
      temperature_2m_min: number[];
      windspeed_10m_max: number[];
      weathercode: string[]
    }
}

const WeatherToday = ({temperature, daily} : WeatherTodayProps) => {
  daily = {
    ...daily,
    weathercode: daily.weathercode.map((item) => converIcon(Number(item)))
  }
  return (
    <Container>
      { daily.temperature_2m_max.map((_, index) => (
        <Item key={index}>
          {index < 1 ? <span>Today</span> : <span>{moment(daily.time[index]).format("ll")}</span> }
          
          <span style={{fontSize: '16px', opacity: '0.8'}}>{moment(daily.time[index]).format('dddd')}</span>
          <Temperature>
              <Image src={`/${daily.weathercode[index]}.png`} alt='sun' width={80} height={80}></Image>
              {index < 1 ? <>{Math.round(temperature)} &deg;C</> : <>{Math.round((daily.temperature_2m_max[index] + daily.temperature_2m_min[index]) / 2)} &deg;C</>}
          </Temperature>

          <InfoGroup>
              <InfoItem>
                  <Image src='/up-arrow.png' alt='high' width={15} height={15}/>
                  <div>{Math.round(daily.temperature_2m_max[index])} &deg;C</div>
              </InfoItem>

              <InfoItem>
                <Image src='/down-arrow.png' alt='high' width={15} height={15}/>
                  <div>{Math.round(daily.temperature_2m_min[index])} &deg;C</div>
              </InfoItem>

              <InfoItem >
                <Image src='/wind.png' alt='high' width={15} height={15}/>
                <div>{Math.round(daily.windspeed_10m_max[index])} KM/H</div>
              </InfoItem>
          </InfoGroup>
        </Item>

      ))}
      
    </Container>
  )
}

export default WeatherToday

const Container = styled.div `
  margin-top: 1.5 rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  
`

const Item = styled.div`
    width: 300px;
    margin-top: 16px;
    color: #fff;
    padding:2.5rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition-duration: 0.5s;
    border-radius: 10px;
  span{
    font-size: 1.5rem;
  }

  :hover {
    transform: translateY(-15px);
    box-shadow: rgba(0, 0, 0, 1) 0px 5px 15px;

  }

`

const Temperature = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 15px;
    font-size: 3rem;
`

const InfoGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`

const InfoItem = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    div {
        font-size: 1rem;
        margin-left: 10px;
    }   
`