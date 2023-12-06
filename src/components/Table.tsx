import TableCell from "./TableCell"
import { TableComponent } from "../constants/types/table"
import TableHead from "./TableHead"

const Table = ({ title, heads, cells, children, className = "" }: TableComponent) => {
    const totalCells = () => {
        const result = []
        const auxCells = [...cells]
        if(heads.length > 0){
            while(auxCells.length > 0){
                result.push(auxCells.splice(0 ,heads.length))
            }
        }
        return result
    }

    const result = totalCells()

    return (
        <div className={`overflow-hidden rounded-md shadow-md border-x border-y border-primary-700 shadow-primary-700 ${className}`}>
            <table className='bg-white'>
                <thead>
                    <tr className='text-black border-b bg-light-primary-800 border-primary-700'>
                        <th colSpan={heads.length}>{ title }</th>
                    </tr>
                    <tr className='text-black border-b bg-light-primary-900 border-primary-700'>
                        {
                            (heads.length > 0) && heads.map((head, index) => {
                                return <TableHead key={index} name={ head } />
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        (result.length > 0) && result.map((row, index) => {
                            return (<tr key={index} className='border-b border-primary-700'>
                                {
                                    row.map((cell, i) => {
                                        return <TableCell key={i} type={cell.type} isInput={cell.isInput} className={cell.className} value={cell.value} />
                                    })
                                }
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot>
                    {children}
                </tfoot>
            </table>
        </div>
    )
}

export default Table