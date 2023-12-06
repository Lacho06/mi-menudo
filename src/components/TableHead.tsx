import { TableHeadComponent } from "../constants/types/table"

const TableHead = ({ name }: TableHeadComponent) => {
    return (
        <th className='w-1/12 border-x border-primary-700 hover:bg-primary-800'>{ name }</th>
    )
}

export default TableHead
