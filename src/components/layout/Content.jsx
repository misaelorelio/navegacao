import React from 'react'
import './Content.css'
import { Switch, Route } from 'react-router-dom'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'


const Content = props => (
    <main className='content'>
        <Switch>
            <Route path='/about'>
                <About></About>
            </Route>
            <Route path='/home'>
                <Home></Home>
            </Route>
            <Route path='/param/:id'>
                <Param></Param>
            </Route>
            <Route path='*'>
                <NotFound></NotFound>
            </Route>
        </Switch>
    </main>
)

export default Content