import { TableHeadComponent } from "../constants/types/table"

const TableHead = ({ name, colSpan = undefined, className = "" }: TableHeadComponent) => {
    return (
        <th className={`w-1/12 border-x border-secondary-700 hover:bg-secondary-800 ${className}`} colSpan={colSpan && colSpan}>{ name }</th>
    )
}

export default TableHead
