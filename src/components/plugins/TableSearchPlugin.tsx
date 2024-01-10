import { TableSearchPluginComponent } from "../../constants/types/plugins/tableSearch"

const TableSearchPlugin = ({ search, changeSearch, submitSearch }: TableSearchPluginComponent) => {
    return (
        <form className="flex items-center px-3 rounded-md bg-accent-800" onSubmit={submitSearch}>
            {/* Busqueda */}
            <input type="search" placeholder="Escribe aqui para buscar..." value={search} onChange={changeSearch} className="p-2 font-bold bg-transparent focus:outline-none text-md" />
            <button className="px-2 py-1 font-bold text-white rounded-md bg-light-secondary-500">
                Buscar
                {/* <img src="../../src/assets/icons/search.svg" className="w-4" alt="Icono buscar" /> */}
            </button>
        </form>
    )
}

export default TableSearchPlugin