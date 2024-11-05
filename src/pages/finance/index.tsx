import { useEffect, useState } from "react";
import { Invoice } from "../../modules/finance/types";
import { FinanceHandler } from "../../modules/finance/handler";
import { AppTable } from "../../components/AppTable/AppTable";
import { EditOutlined } from "@ant-design/icons";


const columns = [
  {
    title: 'ID',
    dataIndex: 'invoiceId',
    key: 'invoiceId',
  },
  {
    title: 'Descrição',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Mês',
    dataIndex: 'month',
    key: 'month',
  },
  {
    title: 'Ano',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: 'Ação',
    key: 'action',
    render: () => {return <><a><EditOutlined /></a></>}
  },
];

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
      <AppTable dataSource={invoices} columns={columns}/>

    </>
  );
};

export default FinancePage;
