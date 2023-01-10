import React from 'react';
import './App.css';
import data from './menu.json'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import MenuList from "./Components/MenuList/MenuList";

console.log(data);


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MenuList />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}
// planets, where in the world - mike


export default App;
