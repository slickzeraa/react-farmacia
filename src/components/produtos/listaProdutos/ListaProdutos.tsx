import React, { useContext, useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProduto/CardProduto';
import Produto from '../../../models/Produto';

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {
    try {
      await buscar('/produtos', setProdutos);
    } catch (error: any) {
        console.error('Erro ao buscar produtos:', error);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);
  return (
    <>
      {produtos.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}

export default ListaProdutos;