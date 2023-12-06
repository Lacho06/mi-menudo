import { IStyle } from "../interfaces/interfaces"

export type TableHeadComponent = {
    name: string
}

export interface TableCellComponent extends IStyle {
    isInput?: boolean,
    type: string | "number" | "text" | "",
    value?: string
}

export interface TableComponent extends React.PropsWithChildren, IStyle {
    title: string,
    heads: string[],
    cells: TableCellComponent[]
}
