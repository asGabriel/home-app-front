import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "../pages/HomePage/HomePage"
import { InvoicesPage } from "../pages/Financial/Invoices"
import { InvoicesDetailsPage } from "../pages/Financial/InvoicesDetail.rs"

export const HmRouteProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/invoices" element={<InvoicesPage />} />
                <Route path="/invoices/:id" element={<InvoicesDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}