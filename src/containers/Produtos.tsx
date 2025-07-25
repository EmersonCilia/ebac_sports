import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import ProdutoComponents from '../components/Produto'

import * as S from './styles'
import { RootReducer } from '../store'
import { useGetProdutosQuery } from '../services/api'

const ProdutosComponent = () => {
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)

  const { data: getProdutos, isLoading } = useGetProdutosQuery()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((favorito) => favorito.id === produto.id)
  }
  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {getProdutos?.map((produto) => (
          <ProdutoComponents
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
