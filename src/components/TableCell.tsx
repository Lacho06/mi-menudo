import { TableCellComponent } from "../constants/types/table"

const TableCell = ({ className = "", colSpan = undefined, isInput = false, type, value = "" }: TableCellComponent) => {
    const showTypeCell = () => {
        if(isInput){
            switch(type){
                case "actions":
                    return <div className="flex justify-around p-1">
                        <button className="bg-primary-500 text-white p-1">Boton</button>
                        <button className="bg-secondary-500 text-white p-1">Boton</button>
                        <button className="bg-accent-500 text-white p-1">Boton</button>
                    </div>
                case "number":
                    return <input type="number" placeholder="0" min={0} max={Number.POSITIVE_INFINITY} className='w-full text-center hover:bg-secondary-900 focus:outline-none focus:outline-light-secondary-800 caret-light-secondary-100' />
                case "text":
                    return <input type="text" placeholder="-" className='w-full text-center hover:bg-secondary-900 focus:outline-none focus:outline-light-secondary-800 caret-light-secondary-100' />
            }
        }
        return value
    }
    
    return (
        <td colSpan={colSpan && colSpan} className={`w-1/12 border-x border-secondary-700 ${!isInput && 'text-center hover:bg-secondary-900'} ${className}`}>
            { showTypeCell() }
        </td>
    )
}

export default TableCell