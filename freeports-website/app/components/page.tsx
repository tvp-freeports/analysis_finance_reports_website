import Header from "./header";
import ReactNode from "react";

export default function Page({children}: {children: ReactNode}){
    return <>
    <Header />
    {children}
    </>
}