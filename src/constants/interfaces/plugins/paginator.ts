export interface IPaginator {
    page: number,
    elementsPerPage: number,
    changePage: (newPage: number) => void,
    changeElementsPerPage: (newElementsPerPage: number) => void
}