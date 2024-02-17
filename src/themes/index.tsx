import {
  selectTheme,
  getTheme,
} from "@/stores/themeSlice";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";

function Main() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const Component = getTheme(theme).component;

  return (
    <Component />
  );
}

export default Main;
