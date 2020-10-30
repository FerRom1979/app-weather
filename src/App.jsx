
import React,{useState,useEffect} from 'react';
import {GetApi} from './assets/callsApis/GetApi'
import CardWeather from './components/cardWeather';
import Header from './components/header';
import Search from './components/search';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Welcome from './components/welcome';
import ExtendForescast from './components/extendForescast';
import Footer from './components/footer';

const App =() => {
  const{ city,errorDegrees,apiError,cardInfo,extendData,splash,getWeather} = GetApi()  
/* ********************mostrar solo el buscador************* */
  const [hide, setHide] = useState('')
  const [mhide, setMhide] = useState('')
  const Hide = (geo,city)=>{
    if(geo === false || city === ''){
      setMhide('25%')
      setHide('none')
    }else{
      setHide('block')
      setMhide(0)
    }
  }
  useEffect(()=>{
    Hide(splash,city)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[city,splash])
    
  return (
    <Router>
     <div className="h-screen flex flex-col h-24 bg-gradient-to-r from-teal-100 to-blue-300 ">
        <Route exact path="/">
          <Welcome Splash ={splash}/>
        </Route>
        <Route exact path="/app">
          <div style={{ display: `${hide}` }}>
            <Header />
          </div >
          <div style={{marginTop:`${mhide}`}}>
            <Search
              getWeather = {getWeather}
              titleCity = {city}
              error = {errorDegrees}
              errorCity={apiError}
            />
          </div>
          <div style={{ display: `${hide}` }}>
            <CardWeather
              description={cardInfo.description}
              temperature={cardInfo.temperature}
              pressure={cardInfo.pressure}
              humidity={cardInfo.humidity}
              tempMax={cardInfo.tempMax}
              tempMin={cardInfo.tempMin}
              wind={cardInfo.wind}
              heaven={cardInfo.heaven}
              country={cardInfo.country}
              city={city} 
            />
          </div>
          <div style={{ display: `${hide}` }}>
            <ExtendForescast
              info = {extendData}
            />
          </div>
          <div> 
            <Footer/>
          </div>
        </Route>
     </div>
    </Router>
    
  );
}

export default App;
