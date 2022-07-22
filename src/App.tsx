import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonDetailProvider from './lib/context/PokemonDetailContext';
import PokemonListProvider from './lib/context/PokemonListContext';
import PokemonDetailRoutes from './lib/route/PokemonDetailRoutes';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import PokemonDetail from './pages/PokemonDetail';
import './lib/css/general.css'
import Favorite from './pages/Favorite';

export default function App() {

    const client = new ApolloClient({
        uri: 'https://graphql-pokeapi.graphcdn.app/',
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <PokemonListProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/PokemonFavorite" element={<Favorite />}></Route>
                        <Route path="/PokemonDetail/:pokemonId/*" element={<PokemonDetailRoutes />}></Route>
                    </Routes>
                </BrowserRouter>
            </PokemonListProvider>
        </ApolloProvider>
    )

}