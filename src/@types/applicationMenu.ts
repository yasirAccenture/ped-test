
import { icons } from "@/components/Base/Lucide";

export interface TApplicationMenu {
    icon: keyof typeof icons;
    title: string;
    badge?: number;
    pathname?: string;
    subMenu?: TApplicationMenu[];
    ignore?: boolean;
}

export interface tMenuState {
    menu: Array<TApplicationMenu | string>;
}
