import Header from "./header";
import Footer from "./footer";
import ReactNode from "react";

export default function Page({children}: {children: ReactNode}){
    return <>
    <Header />
    <main className="flex-grow flex flex-col  gap-7">
        {children}
    </main>
    <Footer />
    </>
}