import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";

function Rota() {
    return(
        <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Home/>} exact>
                {/*<Route path="" element={</>}/> ROTA PARA OUTRA PÁGINA*/}
            </Route>
        </Routes>
  </BrowserRouter>
   )
}

export default Rota;