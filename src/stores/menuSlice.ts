import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { type Themes } from "@/stores/themeSlice";
import { icons } from "@/components/Base/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  badge?: number;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface MenuState {
  menu: Array<Menu | string>;
}

const initialState: MenuState = {
  menu: [],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

const menu: Array<Menu | "divider"> = [
  {
    icon: "Home",
    title: "PED",
    subMenu: [
      {
        icon: "PanelLeft",
        pathname: "/",
        title: "Deals",
      },
      {
        icon: "PanelLeft",
        pathname: "/Firms",
        title: "Firms",
      },
      {
        icon: "PanelLeft",
        pathname: "/Professionals",
        title: "Professionals",
      },
    ],
  },
];

export const selectMenu = () => (state: RootState) => {
  return menu;
};

export default menuSlice.reducer;
