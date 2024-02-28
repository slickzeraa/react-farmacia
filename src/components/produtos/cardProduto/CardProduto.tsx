import React from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardProdutoProps {
  produto: Produto
}

function CardProduto({produto}: CardProdutoProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <h3 className='text-lg font-bold text-center uppercase '>{produto?.nome}</h3>
        </div>
        <div className='p-4 '>
          <p>{produto.descricao}</p>
          <p><span className="font-bold">Preço:</span> <span className="font-bold text-green-600">R$ {produto.preco}</span></p>
          <p>
           <span className="font-bold">Categoria:</span> {produto.categoria?.descricao}
          </p>
          <p><span className="font-bold">Data:</span> {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(produto.data))}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarProduto/${produto.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${produto.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto