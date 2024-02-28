import React from 'react';
import homeLogo from '../../assets/home.jpeg'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-red-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Farmácia</h2>
              <p className='text-xl'>Procure por Categorias de Remédios aqui</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver Categorias</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-5/5' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;
