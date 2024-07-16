import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../header/index.jsx'
import Footer from '../footer/index.jsx'
import Body from '../body/index.jsx'
import Firstjet from '../alls/1win/jet.jsx'
import Mines from '../alls/1win/mines.jsx'
import Minesactive from '../alls/1win/minesactive.jsx'
import Piratesactive from '../alls/1win/piratesactive.jsx'
import Bombucks from '../alls/1win/bombucks.jsx'
import Pirates from '../alls/1win/pirates.jsx'
import Royal from '../alls/1win/royal.jsx'
import Firstavia from '../alls/1win/aviator.jsx'

import Aviator from '../alls/all/aviator.jsx'
import Activate from '../register/activate.jsx'
import Register1win from '../register/register1win.jsx'
import Buy from '../buy/index.jsx'
import  Buyorregister from '../register/buyorregister.jsx'
import Active from "../alls/1win/active.jsx"

const all = () => {
  return (
   <>
   <Header/>
<Routes>
    <Route path="/" element={<Body />} />
    <Route path="/1win/jet" element={<Firstjet />} />
    <Route path="/1win/aviator" element={<Firstavia />} />
    <Route path="/1win/mines" element={<Mines />} />
    <Route path="/minesactive" element={<Minesactive />} />
    <Route path="/piratesactive" element={<Piratesactive />} />
    <Route path="/1win/bombucks" element={<Bombucks />} />
    <Route path="/1win/pirates" element={<Pirates />} />
    <Route path="/1win/royal" element={<Royal />} />

    <Route path="/aviator" element={<Aviator />} />
    <Route path="/activate" element={<Activate />} />
    <Route path="/register1win" element={<Register1win />} />
    <Route path="/buy" element={<Buy />} />
    <Route path="/buyorregister" element={<Buyorregister />} />
    <Route path="/active" element={<Active />} />


    

</Routes>


   </>
  )
}

export default all
