export interface NavMenuLink {
    title: string,
    url?: string,
    subMenu?: NavMenuLink[],
    icon?: any
}