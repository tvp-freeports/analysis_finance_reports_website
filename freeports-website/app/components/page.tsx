import Header from "./header";
import Footer from "./footer";
import ReactNode from "react";

export default function Page({children}: {children: ReactNode}){
    return <>
    <Header className="bg-purple text-white" />
    <main className="flex-grow">
        {children}
    </main>
    <Footer />
    </>
}