
import axios from 'axios';
import {useState,useEffect} from 'react';

// eslint-disable-next-line import/prefer-default-export
export const GetApi = () => {

  const Url_Api = 'https://api.openweathermap.org/data/2.5/weather?'
  const Ext_Url_api ='https://api.openweathermap.org/data/2.5/forecast?'
  const API_KEY = '1491b6c99a8330cec125bc4f0f42b9be';
  const [city, setCity] = useState('')
  const [degrees, setDegrees] = useState('metric')
  const [errorDegrees, setErrorDegrees] = useState()
  const [coord, setCoord] = useState(false)
  const [splash, setSplash] = useState(false)
  const [cardInfo, setCardInfo] = useState({
    city:'',
    description:'',
    icon:'',
    temperature:0,
    heaven:'',
    wind:0,
    tempMax:0,
    tempmin:0,
    humidity:0,
    pressure:0,
    country:'',
    lat:0,
    lon:0,
  })
  const [apiError, setApiError] = useState('')
  const [extendData, setExtendData] = useState([])


/* **********************tomando valores de la ciudad a buscar********************** */
const getWeather =(e) => {
  try {
    e.preventDefault()
    const {city,degrees} = e.target.elements;
    const cityValue = city.value;
    const degreesValue = degrees.value;
    setCity(cityValue);
    e.target.reset()
    if(degreesValue === 'c' || degreesValue === 'C'){
      return setDegrees('metric'); 
    }
    if(degreesValue === 'f' || degreesValue === 'F'){
      return setDegrees('imperial')
    }
    if(degreesValue === 'k' || degreesValue === 'K'){
      return setDegrees('standar')
    }
    if(degreesValue !== /cCfFkK/ )
    {throw new Error()}
    
    
  } catch (error) {

    setErrorDegrees(error)
  }
  return null;
} 

/* *****************geolocalizacion****************** */
const getCoordinates = async (pos)=>{
  const { coords } = pos;
  const res = await axios(`${Url_Api}lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}`);
  if(coord === false){
    setCity(res.data.name)
  }
  setSplash(true)
  setCoord(coords)
}
const error = ()=>{
  setSplash(true)
}
 /* ************************pidiendo datos del clima de la ciudad elejida******************* */
  
 const getInfo = async ()=>{
  if ( city && city !== ''){
    try {
      const res = await axios (`${Url_Api}q=${city}&units=${degrees}&lang=es&appid=${API_KEY}`);
  
      setCardInfo({
        city:res.data.main.name,
        description:res.data.weather[0].description,
        temperature:res.data.main.temp,
        pressure:res.data.main.pressure,
        humidity:res.data.main.humidity,
        tempMax:res.data.main.temp_max,
        tempMin:res.data.main.temp_min,
        wind:res.data.wind.speed,
        heaven:res.data.weather[0].main,
        country:res.data.sys.country,
        lat:res.data.coord.lat,
        lon:res.data.coord.lon,
      })
      setApiError('')
    } catch (error) {
      
    
      setApiError(error.response.status)
    }
  }
  return null;
} 
/* ******************pronostico extendido**************** */

const extendInfo = async () =>{
  if ( city && city !== ''){
    try {
      const res = await axios (`${Ext_Url_api}q=${city}&units=${degrees}&lang=es&appid=${API_KEY}`)
      const info = res.data.list
      setExtendData(info)
    } catch (error) {
      console.log(error);
    }
  }
  return null;
}
/* ************************useEffect******************************** */
useEffect(()=>{
  navigator.geolocation.getCurrentPosition(getCoordinates,error);
  extendInfo()
  getWeather()
  getInfo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[city,degrees,splash,coord])
  
  return {
    getWeather,
    city,
    errorDegrees,
    apiError,
    cardInfo,
    extendData,
    splash
  }
}

