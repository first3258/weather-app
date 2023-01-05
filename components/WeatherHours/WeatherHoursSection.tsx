import React from 'react'
import { Table } from 'antd';
import { converIcon } from '../../้helper/convertIcon';
import Image from 'next/image';
import moment from 'moment'

interface WeatherHoursSectionProps {
    hourly: {
        time: string
        weathercode: number
        temperature_2m: number
    }
}


const WeatherHoursSection = ({hourly} : any) => {
    hourly.time.forEach((_ : any, index: string) => {
        dataSource.push( {
            key: index+1,
            time: hourly.time[index],
            icon: `${converIcon(hourly.weathercode[index])}.png`,
            temperature: Math.round(hourly.temperature_2m[index]),
        })
    });
    dataSource = dataSource.slice(0, 24)
  return (
    <Table columns={columns} dataSource={dataSource} id='hourly' style={{minHeight: '100vh'}} />
  )
}

interface DataSource {
    key: string,
    time: string,
    icon: string,
    temperature: number
}

let dataSource:DataSource[]= [
    
];

const columns = [
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      width: '33%',
      render: (time : string) => <span>{moment(time).format('LT')}</span>,
    },
    
    {
      title: 'Icon',
      dataIndex: 'icon',
      key: 'icon',
      width: '33%',
      render: (icon : string) => <Image src={`/${icon}`} alt={`${icon}`} width={30} height={30} />,
    },
    {
      title: 'Temperature',
      dataIndex: 'temperature',
      key: 'temperature',
    },
  ];

export default WeatherHoursSection