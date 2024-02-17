import { type Menu } from "@/stores/menuSlice";

const menu: Array<Menu | "divider"> = [
  {
    icon: "Home",
    title: "Dashboard",
    pathname: "/",
  },
  // "divider",
  {
    icon: "Inbox",
    pathname: "/inbox",
    title: "Inbox",
  },
];

export default menu;
