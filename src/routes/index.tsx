import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "../pages/HomePage/HomePage"
import { InvoicesPage } from "../pages/Financial/Invoices"

export const HmRouteProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/invoices" element={<InvoicesPage />} />
            </Routes>
        </BrowserRouter>
    )
}