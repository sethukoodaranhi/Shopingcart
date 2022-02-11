import { createContext } from "react";
export const LoginContext=createContext({
    userName:"",
    setUserName:()=>{}
})
export const ProductContext=createContext({})
export const PriceContext=createContext({})