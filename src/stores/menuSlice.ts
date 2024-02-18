import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TApplicationMenu, tMenuState } from "@/@types/applicationMenu";


const menu: Array<TApplicationMenu | "divider"> = [
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

const initialState: tMenuState = {
  menu: menu,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});


export const selectMenu = () => (state: RootState) => {
  return menu;
};

export default menuSlice.reducer;
