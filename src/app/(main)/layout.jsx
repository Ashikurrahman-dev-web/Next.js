import React from 'react';
import Navbar from "@/component/shared/Navbar";
import Footer from "@/component/shared/Footer";

const MainLayout = ({ children }) => {
    return (
        <>
         
          
            <Navbar />
            {children}
            <Footer /> 

           
        </>
    );
};

export default MainLayout;