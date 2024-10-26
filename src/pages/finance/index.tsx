import { useEffect, useState } from "react";
import { Invoice } from "../../modules/finance/types";
import { FinanceHandler } from "../../modules/finance/handler";

const FinancePage = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const financeService = new FinanceHandler();

  useEffect(() => {
    async function loadInvoices() {
      try {
        const data = await financeService.fetchInvoices();
        setInvoices(data);
      } catch (error) {
        console.error('Erro ao carregar invoices:', error);
      }
    }

    loadInvoices();
  }, []);

  console.log(invoices)
  
  return (
    <>
      <h1>finance page</h1>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </>
  );
};

export default FinancePage;
