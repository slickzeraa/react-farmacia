import React from 'react';
import homeLogo from '../../assets/home.jpeg'
import './Home.css';
import { Link } from 'react-router-dom';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos';


function Home() {
    return (
        <>
        <div className="bg-red-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Farmácia</h2>
              <p className='text-xl'>Procure por Categorias aqui</p>
  
              <div className="flex justify-around gap-4">
              
                <Link to='/categorias' className='rounded bg-white text-blue-800 py-2 px-4'>Ver Categorias</Link>
              </div>

              <p className='text-xl'>Procure por Produtos aqui</p>

              <div className="flex justify-around gap-4">
              <ModalProduto />
              <Link to='/produtos' className='rounded bg-white text-blue-800 py-2 px-4'>Ver Produtos</Link>
              </div>

            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-5/5' />
      
            </div>
          </div>
        </div>
        <ListaProdutos></ListaProdutos>
      </>
    );
}

export default Home;
