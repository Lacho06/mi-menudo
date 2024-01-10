import { TablePaginatorPluginComponent } from "../../constants/types/plugins/tablePaginator"
import { optionsElementsPerPage } from "../../constants/components/table"

const TablePaginatorPlugin = ({ tableCells, page, elementsPerPage, changePage, changeElementsPerPage }: TablePaginatorPluginComponent) => {
    return (
        <>
            {/* Paginacion */}
            <div className="flex items-center gap-1 px-3 rounded-md bg-accent-800">
                <div className="px-2 py-1 mr-2 font-bold text-white rounded-md bg-primary-400">
                    <span>{page}/{tableCells.length}</span>
                </div>
                <button className="px-2 py-1 font-bold text-white bg-light-secondary-500" onClick={() => { page > 1 && changePage(page-1) }}> - </button>
                <button className={`px-2 py-1 font-bold text-white ${page === 1 ? 'bg-primary-300' : 'bg-light-secondary-600'}`} onClick={() => changePage(1)}>{ 1 }</button>
                {
                    page > 3 && <button disabled className="px-2 py-1 font-bold text-white bg-light-secondary-600"> ... </button>
                }
                {
                    page === 3 && <button className="px-2 py-1 font-bold text-white bg-light-secondary-600" onClick={() => changePage(page-1)}>{ page-1 }</button>
                }
                {
                    (page-3 > 2 && page > tableCells.length-1) && <button className="px-2 py-1 font-bold text-white bg-light-secondary-600" onClick={() => changePage(page-3)}>{ page-3 }</button>
                }
                {
                    (page-2 > 2 && page >= tableCells.length-1) && <button className="px-2 py-1 font-bold text-white bg-light-secondary-600" onClick={() => changePage(page-2)}>{ page-2 }</button>
                }
                {
                    (page > 3 && page <= tableCells.length) && <button className="px-2 py-1 font-bold text-white bg-light-secondary-600" onClick={() => changePage(page-1)}>{ page-1 }</button>
                }
                {
                    page > 1 && <button className="px-2 py-1 font-bold text-white bg-primary-300" onClick={() => changePage(page)}>{ page }</button>
                }
                {
                    (page+1 < tableCells.length && page !== tableCells.length) && <button className="px-2 py-1 font-bold text-white bg-light-secondary-600" onClick={() => changePage(page+1)}>{ page+1 }</button>
                }
                {
                    (page < 3 && page+2 < tableCells.length) && <button className="px-2 py-1 font-bold text-white bg-light-secondary-600" onClick={() => changePage(page+2)}>{ page+2 }</button>
                }
                {
                    (page === 1 && page+3 < tableCells.length) && <button className="px-2 py-1 font-bold text-white bg-light-secondary-600" onClick={() => changePage(page+3)}>{ page+3 }</button>
                }
                {
                    (page+2 < tableCells.length && tableCells.length > 5) && <button disabled className="px-2 py-1 font-bold text-white bg-light-secondary-600"> ... </button>
                }
                {
                    (tableCells.length > 1 && page !== tableCells.length) && <button className="px-2 py-1 font-bold text-white bg-light-secondary-600" onClick={() => changePage(tableCells.length)}>{ tableCells.length }</button> 
                }
                <button className="px-2 py-1 font-bold text-white bg-light-secondary-500" onClick={() => { page < tableCells.length && changePage(page+1) }}> + </button>
            </div>
            <select defaultValue={elementsPerPage} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => changeElementsPerPage(Number.parseInt(e.target.value))} className="px-3 ml-3 mr-auto font-bold rounded-md bg-accent-800 caret-secondary-500">
                {
                    optionsElementsPerPage.map((option, index) => {
                        return <option key={index} className="font-bold bg-primary-800" disabled={option > tableCells[0].length*tableCells.length} value={option}>{ option }</option>
                    })
                }
            </select>
        </>
    )
}

export default TablePaginatorPlugin