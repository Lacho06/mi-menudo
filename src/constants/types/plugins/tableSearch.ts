export interface TableSearchPluginComponent {
    search: string,
    changeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    submitSearch: (e: React.FormEvent<HTMLElement>) => void
}