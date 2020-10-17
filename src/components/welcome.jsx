import React from 'react'
import {useHistory} from 'react-router-dom'


const Welcome = ({Splash})=>{

  const history = useHistory();

  if(Splash)
    {setTimeout(() => {
      history.push('/app');
    }, 2000);}

  return(
    <div className="flex flex-col h-screen justify-center items-center">
    <div className="text-2xl sm:text-5xl p-10">CLIMA</div>
    <div className="h-auto flex flex-col justify-center items-center ">
      <h1 className="mb-4">Cargando...</h1>
      <div>
        <div className="inline-block animate-spin ease duration-300 w-5 h-5 bg-black mx-2" />
        <div className="inline-block animate-ping ease duration-300 w-5 h-5 bg-black mx-2" />
        <div className="inline-block animate-pulse ease duration-300 w-5 h-5 bg-black mx-2" />
        <div className="inline-block animate-bounce ease duration-300 w-5 h-5 bg-black mx-2" />
      </div>
    </div>
  </div>
  )
}
export default Welcome;
