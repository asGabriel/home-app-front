import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "../pages/HomePage/HomePage"

export const HmRouteProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/teste" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}