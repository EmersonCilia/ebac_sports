import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type favoritos = {
  itens: Produto[]
}

const initialState: favoritos = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const index = state.itens.findIndex((item) => item.id === produto.id)

      if (index >= 0) {
        state.itens.splice(index, 1)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
