import { HmPage } from "../../../components/HmPage"
import { useController } from "./controller"

export const InvoicesPage = () => {
    const controller = useController();

    const handleButtonClick = async () => {
        await controller.test()
    }
    return (
        <HmPage>
            <h1>Invoices page! :D</h1>
            <button onClick={handleButtonClick}>Clique aqui</button>
        </HmPage>
    )
}