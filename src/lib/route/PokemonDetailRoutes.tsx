import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PokemonDetail from '../../pages/PokemonDetail'
import PokemonDetailProvider from '../context/PokemonDetailContext'

const PokemonDetailRoutes = () => {
    return (
        <PokemonDetailProvider>
            <Routes>
                <Route path="/" element={<PokemonDetail />}></Route>
            </Routes>
        </PokemonDetailProvider>
    )
}

export default PokemonDetailRoutes