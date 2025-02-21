import { Table } from "antd"
import { ColumnsType } from "antd/es/table"

export interface HmTableProps<T> {
    columns: ColumnsType<T>
}

export const HmTable = <T,>({ columns }: HmTableProps<T>) => {
    return (
        <Table<T> columns={columns}/>
    )
}