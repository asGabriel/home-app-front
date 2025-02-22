import { Table } from "antd"
import { ColumnsType } from "antd/es/table"

export interface HmTableProps<T> {
    columns: ColumnsType<T>
    dataSource: T[]
}

export const HmTable = <T,>({ columns, dataSource }: HmTableProps<T>) => {
    return (
        <Table<T> columns={columns} dataSource={dataSource} />
    )
}