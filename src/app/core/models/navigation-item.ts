export interface NavigationItem {
    icon: string;
    title: string;
    path?: string;
    subItem?: NavigationSubItem[];
}

export interface NavigationSubItem {
    title: string;
    subTitle: { title: string; path: string,}[];
}
