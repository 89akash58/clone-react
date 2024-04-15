import React from 'react'
import {BrowserRouter,Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Login from './pages/Login';
import styled from 'styled-components';
import Player from './pages/Player';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
export default function App() {
  return (
    <Container>
    <BrowserRouter>
    <Routes >
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
    <Route exact path="player" element={<Player/>}/>
    <Route exact path="/movies" element={<Movies/>}/>
    <Route exact path="/tv" element={<TVShows/>}/>
    <Route exact path="/" element={<Netflix/>}/>
    </Routes>
    </BrowserRouter>
    </Container>
  );
}
const Container=styled.div``;

