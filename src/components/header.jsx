import React from 'react'


const Header = ()=>{

  


    return(
        <div className="w-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 md:mx-auto p-4 from-transparent" >
                <div className="col-4 ">Logo</div>
                <div className="col-4 text-center text-2xl font-black md:text-4xl">ClimaHoy</div>
                <div className="col-4 text-right">menu</div>
            </div>
        </div>
    )
}

export default Header;