import { TableComponent, TablePageComponent } from "../constants/types/table"

import TableCell from "./TableCell"
import TableHead from "./TableHead"
import TablePaginatorPlugin from './plugins/TablePaginatorPlugin';
import TableSearchPlugin from "./plugins/TableSearchPlugin";
import { optionsElementsPerPage } from "../constants/components/table";
import { usePaginator } from "../hooks/plugins/usePaginator";
import { useSearch } from "../hooks/plugins/useSearch";
import { useState } from "react"

const Table = ({ title, heads, cells, children, className = "", withPlugins = false, withTotals = false }: TableComponent) => {
    const formatPages = (elementsPerPage: number = optionsElementsPerPage[0], tableCells: TablePageComponent = cells) => {
        if(!withPlugins)return [tableCells]
        const totalPages = []
        const auxCells = [...tableCells]
        let countRows = 0
        let newPage = []
        let index = 0
        if(heads.length > 0){
            while(auxCells.length > index){
                if(elementsPerPage === countRows){
                    totalPages.push(newPage)
                    newPage = []
                    countRows = 0
                }
                newPage.push(auxCells[index].slice(0 ,heads.length))
                index++
                countRows++
            }
            // Para agregar los elementos sobrantes en la ultima pagina
            if(newPage.length > 0){
                totalPages.push(newPage)
            }
        }
        return totalPages
    }

    const calcTotalPerDepartment = (tableCells: TablePageComponent = cells) => {
        const totalLength = heads.length-2
        let total: number[] = Array(totalLength).fill(0)
        let index = 0
        tableCells.forEach(row => {
            row.forEach((cell, i) => {
                if(i > 1){
                    if(!cell.isInput && cell.value && Number.parseFloat(cell.value.toString())){
                        total[index] += Number.parseFloat(cell.value.toString())
                    }
                    if(index === total.length-1){
                        index = 0
                    }else{
                        index++
                    }
                }
            })
        })
        return total
    }

    const calcTotalPerArea = () => {
        return Array(10).fill(20)
    }

    const [tableCells, setTableCells] = useState<TablePageComponent[]>(formatPages())
    const refreshPage = (elementsPerPage: number) => {
        setTableCells(formatPages(elementsPerPage))
    }
    const [page, elementsPerPage, changePage, changeElementsPerPage] = usePaginator(refreshPage)

    const refreshData = (results: TablePageComponent) => {
        setTableCells(formatPages(elementsPerPage, results))
        changePage(1)
    }

    const [search, emptySearch, changeSearch, submitSearch] = useSearch(formatPages(), refreshData)

    return (
        <div className={`${className}`}>
            {
                withPlugins && (
                    <section className="flex justify-end py-3 mx-3">
                        <TablePaginatorPlugin tableCells={tableCells} page={page} elementsPerPage={elementsPerPage} changePage={changePage} changeElementsPerPage={changeElementsPerPage} />
                        <TableSearchPlugin search={search} changeSearch={changeSearch} submitSearch={submitSearch} />
                    </section>
                )
            }
            <div className='overflow-hidden rounded-md shadow-md border-x border-y border-secondary-700 shadow-secondary-700'>
                <table className='bg-white'>
                    <thead>
                        <tr className='text-black border-b bg-light-secondary-800 border-secondary-700'>
                            <TableHead name={title} colSpan={heads.length} />
                        </tr>
                        <tr className='text-black border-b bg-light-secondary-900 border-secondary-700'>
                            {
                                (heads.length > 0) && heads.map((head, index) => {
                                    return <TableHead key={index} name={ head } />
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            withPlugins ? (
                                !emptySearch ? (
                                    (tableCells[page-1]?.length > 0) && tableCells[page-1].map((row, index) => {
                                        return (<tr key={index} className='border-b border-secondary-700'>
                                            {
                                                row.map((cell, i) => {
                                                    return <TableCell key={i} type={cell.type} isInput={cell.isInput} className={cell.className} value={cell.value} />
                                                })
                                            }
                                        </tr>)
                                    })
                                ) : (
                                    <tr className='border-b border-secondary-700'>
                                        <TableCell className="font-bold" colSpan={heads.length} type="" value="No se encontraron resultados para esta búsqueda" />
                                    </tr>
                                )
                            ) : (
                                (tableCells[0]?.length > 0) && tableCells[0].map((row, index) => {
                                    return (<tr key={index} className='border-b border-secondary-700'>
                                        {
                                            row.map((cell, i) => {
                                                return <TableCell key={i} type={cell.type} isInput={cell.isInput} className={cell.className} value={cell.value} />
                                            })
                                        }
                                    </tr>)
                                })
                            )
                        }
                        {
                            (withTotals && !search) && (
                                <>
                                    <tr className='border-b border-secondary-700'>
                                        <TableCell type='' colSpan={2} value="Total por departamento" />
                                        {
                                            calcTotalPerDepartment().map((total, index) => {
                                                return <TableCell key={index} type='' value={total.toString()} />
                                            })
                                        }
                                    </tr>
                                    <tr className='border-b border-secondary-700'>
                                        <TableCell type='' colSpan={2} value="Total por &aacute;rea" />
                                        {
                                            calcTotalPerArea().map((total, index) => {
                                                return <TableCell key={index} type='' value={total} />
                                            })
                                        }
                                    </tr>
                                </>
                            )
                        }
                    </tbody>
                    <tfoot>
                        {children}
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default Table