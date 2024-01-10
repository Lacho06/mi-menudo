import { IStyle } from "../interfaces/interfaces"

export interface TableHeadComponent extends IStyle {
    name: string,
    colSpan?: number
}

export interface TableCellComponent extends IStyle {
    isInput?: boolean,
    colSpan?: number,
    type: string,
    value?: string | number
}

export type TableRowComponent = TableCellComponent[]
export type TablePageComponent = TableRowComponent[]

export interface TableComponent extends React.PropsWithChildren, IStyle {
    title: string,
    heads: string[],
    cells: TablePageComponent,
    withPlugins?: boolean,
    withTotals?: boolean
}