import { useEffect, useState, useRef } from 'react';

import { TablePageComponent } from '../../constants/types/table';

export function useSearch(table: TablePageComponent[], refreshData: (results: TablePageComponent) => void): [string, boolean, (e: React.ChangeEvent<HTMLInputElement>) => void, (e: React.FormEvent<HTMLElement>) => void]{
    const [emptySearch, setEmptySearch] = useState(false)
    const [search, setSearch] = useState("")
    const [results, setResults] = useState<TablePageComponent>([])
    const isFirstData = useRef(true)

    useEffect(() => {
        if(!isFirstData.current){
            refreshData(results)
        }
    }, [results])

    const tableSearch = (searchedValue: string) => {
        const results: TablePageComponent = []
        const auxTableCells = [...table]
        auxTableCells.forEach(pageCells => {
            pageCells.map(rowCells => {
                if(rowCells.some(itemCells => itemCells.value?.trim()?.toLowerCase()?.includes(searchedValue.trim().toLowerCase()))){
                    results.push(rowCells)
                }
            })
        })
        return results
    }

    const checkResults = (resultsFinded: TablePageComponent) => {
        if(resultsFinded.length > 0){
            setEmptySearch(false)
            setResults(resultsFinded)
        }else{
            setEmptySearch(true)
        }
    }

    const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(isFirstData){
            isFirstData.current = false
        }
        const newSearch = e.target.value
        const resultsFinded = tableSearch(newSearch)
        checkResults(resultsFinded)
        setSearch(newSearch)
    }

    const submitSearch = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        if(isFirstData){
            isFirstData.current = false
        }
        const resultsFinded = tableSearch(search)
        checkResults(resultsFinded)
    }


    return [search, emptySearch, changeSearch, submitSearch]
}