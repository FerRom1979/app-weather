import React from 'react'
import{FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import{faCopyright} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="bg-blue-200  absolute inset-x-0 bottom-0">
     <div >
       <h1 className="text-center"><span><FontAwesomeIcon icon={faCopyright}/></span><span>2020 Todos los derechos reservados</span></h1>
     </div>
    </div>
  )



  
}

export default Footer
