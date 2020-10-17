import React from 'react'
import{FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import{faArrowUp,faArrowDown } from '@fortawesome/free-solid-svg-icons'

  

const ExtendForescast = ({info}) =>{
  
  const ExpReg = /00:00:00/ 
  const datos = info.filter((item) => ExpReg.test(item.dt_txt));

  return(
   <div className="grid grid-cols-5 span-2 ">
     {
       datos.map((item)=>(
        <div className="m-2 rounded bg-gray-300 grid grid-cols-2 span-6 text-center" >
          <div className="col-span-2">
            <h1 className="text-center py-2 text-2xl">{item.dt_txt.slice(0,-9)}</h1>
          </div>
          <div className="col-span-2">
            <h1 className=" text-center"><span className="text-2xl "><FontAwesomeIcon icon={faArrowUp}/></span> <span className="text-5xl">{item.main.temp_max}°</span></h1>
            <h1><span className="text-2xl"><FontAwesomeIcon icon={faArrowDown}/></span> <span className="text-5xl">{item.main.temp_min}°</span></h1>
          </div>
          <div className="col-span-2">
            <h1 className="text-center py-2 text-2xl">{item.weather[0].description}</h1>
          </div>
      </div>
       ))
     }
   </div>
  )
}
export default ExtendForescast