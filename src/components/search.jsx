import React from 'react'

const Search = (props) =>{
const title = props.titleCity
const titulo = title.toUpperCase()
const ApiError = props.errorCity

  return(
    <div className="text-center p-2 bg-transparent">
     <div>
       <h1 className="text-xl md:text-3xl font-bold">
          {
           titulo
          }
         </h1>
     </div>
        <form onSubmit={props.getWeather} className="p-2 md:grid grid-cols-3 gap-4 md:justify-evenly">
          <div className=" text-center">
            <input type="text" 
            name="city" 
            placeholder="ingrese la ciudad" 
            autoFocus
            className="shadow appearance-none border rounded w-9/12 md:w-full py-2 px-1 text-center"
            required
            />
          </div>
          <div className="my-2 md:my-0"> 
            <input type="text"
             name="degrees"
             placeholder="°C o °F o °K for default"
             className="shadow appearance-none border rounded w-4/12 py-2 px-1 text-center md:w-6/12"
             required
             />
          </div>
          <div>
          <button 
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md"
          >enviar</button>
          </div>
        </form> 
            <div>
              {ApiError === 404 &&(
                <div>
                  <p>LA CIUDAD INGRSADA NO SE ENCUENTRA</p>
                </div>
              )}
            </div>      
    </div>
  )

}
export default Search;