import { TableCellComponent } from "../constants/types/table"

const TableCell = ({ className = "", isInput = false, type, value = "" }: TableCellComponent) => {
    const showTypeCell = () => {
        if(isInput){
            switch(type){
                case "number":
                    return <input type="number" placeholder="0" min={0} max={Number.POSITIVE_INFINITY} className='w-full text-center hover:bg-primary-900 focus:outline-none focus:outline-light-primary-800 caret-light-primary-100' />
                case "text":
                    return <input type="text" placeholder="-" className='w-full text-center hover:bg-primary-900 focus:outline-none focus:outline-light-primary-800 caret-light-primary-100' />
            }
        }
        return value
    }
    
    return (
        <td className={`w-1/12 border-x border-primary-700 ${!isInput && 'text-center'} ${className}`}>
            { showTypeCell() }
        </td>
    )
}

export default TableCell