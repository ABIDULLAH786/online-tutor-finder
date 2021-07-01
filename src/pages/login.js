import React from "react";
import Header from "../components/header";
import Form from "../components/form";
import Footer from "../components/footer";
export default function Login(){
        return (
            <>
             <Header />
             <h1 className="textCenter">login You Account</h1>

             <Form />
             <Footer />
            </>
        );
}