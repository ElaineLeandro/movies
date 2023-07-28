import{Routes, Route} from 'react'

import {Home} from '../pages/Home'
import {NewMovies} from '../pages/NewMovies'

import {MoviePreview} from '../pages/MoviePreview'
import {Profile} from '../pages/Profile'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/newmovies" element={<NewMovies/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/moviepreview/:id" element={<MoviePreview/>}/>
           
            
        </Routes>
    )
}