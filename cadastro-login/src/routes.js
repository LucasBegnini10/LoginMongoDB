import React from "react"
import Home from "./pages/Home"
import ListUsers from "./pages/ListUsers";
import {GlobalStyle} from "./style/style"

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

export default function Rout(){
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<ListUsers />} />
            </Routes>
        </BrowserRouter>
    )
}