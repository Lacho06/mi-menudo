import { IPaginator } from "../../interfaces/plugins/paginator";
import { TablePageComponent } from "../table"

export interface TablePaginatorPluginComponent extends IPaginator {
    tableCells: TablePageComponent[],
}
