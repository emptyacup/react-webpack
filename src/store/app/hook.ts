import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";
import { Rootstate,AppDispatch } from "./rootStore";

export const useAppDispatch = ()=>useDispatch<AppDispatch>()
export const useAppSelect:TypedUseSelectorHook<Rootstate> = useSelector

