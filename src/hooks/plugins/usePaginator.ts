import { useEffect, useState } from "react"

import { optionsElementsPerPage } from "../../constants/components/table"

export function usePaginator(refreshData: (elementsPerPage: number) => void, INITIAL_PAGE: number = 1): [number, number, (newPage: number) => void, (newElementsPerPage: number) => void]{
    const [elementsPerPage, setElementsPerPage] = useState(optionsElementsPerPage[0])
    const [page, setPage] = useState(INITIAL_PAGE)

    useEffect(() => {
        setPage(INITIAL_PAGE)
        refreshData(elementsPerPage)
    }, [elementsPerPage])
    
    useEffect(() => {
        refreshData(elementsPerPage)
    }, [page])

    const changePage = (newPage: number) => {
        setPage(newPage)
    }

    const changeElementsPerPage = (newElementsPerPage: number) => {
        setElementsPerPage(newElementsPerPage)
    }

    return [page, elementsPerPage, changePage, changeElementsPerPage]
}