import { configureStore } from '@reduxjs/toolkit'
import categoriasSlice from 'store/reducers/categorias'
import itensSlice from 'store/reducers/itens'
import carrinhoSlice from 'store/reducers/carrinho'
import buscaSlice from './reducers/busca'

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice,
        carrinho: carrinhoSlice,
        busca: buscaSlice,
    }
})

export default store