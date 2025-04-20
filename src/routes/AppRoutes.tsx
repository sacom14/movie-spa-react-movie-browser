import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
    )
}
