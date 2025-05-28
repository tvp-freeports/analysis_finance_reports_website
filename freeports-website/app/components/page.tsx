import Header from "./header";
import Footer from "./footer";
import ReactNode from "react";

export default function Page({children}: {children: ReactNode}){
    return <>
    <Header />
    <main className="flow-grow grid grid-cols-5 gap-10 items-center w-full">
        {children}
    </main>
    <Footer />
    </>
}