
import React,{useState,useEffect} from 'react'
import{FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import{faCloudSunRain,faThermometerHalf,faWind,faThermometerFull,faFlag,faThermometerEmpty } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import imgClear from '../data/images/clear.jpg'
import imgClouds from '../data/images/clouds.png'
import imgRain from '../data/images/rain.jpg'
import imgDrizzle from '../data/images/drizzle.jpg'
import imgForDefault from '../data/images/fordefault.jpg'
import imgMist from '../data/images/mist.jpg'
const CardWeather = (props) =>{
  const {city,description,temperature,heaven,wind,tempMax,tempMin,humidity,pressure,country} = props
  
  const [imgWeather, setImgWeather] = useState()
  const imagenWeather = (heaven)=>{
    const clear = imgClear
    const clouds = imgClouds
    const rain = imgRain
    const drizzle = imgDrizzle
    const mist = imgMist
    const forDefault = imgForDefault

    switch (heaven) {
      case 'Clear':
        setImgWeather(clear)
        break;
      case 'Clouds':
        setImgWeather(clouds)
        break;
      case 'Rain':
        setImgWeather(rain)
        break;
      case 'Drizzle':
        setImgWeather(drizzle)
        break;
      case 'Mist':
        setImgWeather(mist)
        break;
      default:
        setImgWeather(forDefault)
        break;
    }
  }
  
  
  
  
  useEffect(() => {
    imagenWeather(heaven)
  }, [heaven])


  return(
    <div className="container mx-auto p-2 md:px-4 w-screen my-2" style={{backgroundImage:`url(${imgWeather})`}} >
      <div className="grid grid-cols-4">
      <div className="hidden font-bold md:block text-white md:col-span-1">{city}</div>
      <div className="col-span-4 text-center text-white text-3xl font-bold md:col-span-2 md:text-5xl">{description}</div>
      <div className="col-span-1 text-white text-lg font-bold md:col-span-1 md:text-right md:text-3xl"><FontAwesomeIcon icon={faCloudSunRain}/></div>
      <div className="col-span-3 text-white text-lg font-bold md:col-span-2 md:py-2 md:text-2xl">Temperatura : <FontAwesomeIcon icon={faThermometerHalf}/>{temperature}°</div>
      <div className="col-span-4 text-white text-lg flex justify-between font-bold md:col-span-2 md:py-2 md:text-2xl"><span><FontAwesomeIcon icon={faThermometerFull}/> Maxima : {tempMax}°</span> <span className="pr-auto"><FontAwesomeIcon icon={faThermometerEmpty}/> Minima : {tempMin}°</span></div>
      <div className="col-span-2 text-white text-lg font-bold md:col-span-1 md:py-2 md:text-2xl"><FontAwesomeIcon icon={faWind}/> Viento : {wind} Km/h</div>
      <div className="col-span-2 text-white text-lg text-right font-bold md:col-span-1 md:text-left md:py-2 md:text-2xl">cielo: {heaven}</div>
      <div className="col-span-2 text-white text-lg font-bold md:col-span-1 md:py-2 md:text-2xl">Humedad : {humidity}%</div>
      <div className="col-span-2 text-white text-lg text-right font-bold md:col-span-1 md:py-2 md:text-2xl">Presion : {pressure} mbar</div>
      <div className="col-span-4 text-white text-lg text-right font-bold md:text-2xl"><FontAwesomeIcon icon={faFlag}/>Pais : {country}</div>    
      </div>
    </div>
  )
  }
  CardWeather.propTypes = {
    city: PropTypes.string,
    description: PropTypes.string,
    temperature: PropTypes.number,
    heaven: PropTypes.string,
    wind: PropTypes.number,
    tempMax: PropTypes.number,
    tempMin: PropTypes.number,
    humidity: PropTypes.number,
    pressure: PropTypes.number,
    country: PropTypes.string,
  };
  
  CardWeather.defaultProps = {
    city: '',
    description: '',
    temperature: 0,
    heaven: '',
    wind: 0,
    tempMax: 0,
    tempMin: 0,
    humidity: 0,
    pressure: 0,
    country: '',
  };

  export default CardWeather;