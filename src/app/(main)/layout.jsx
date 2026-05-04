import React from 'react';
import Navbar from "@/component/shared/Navbar";
import Footer from "@/component/shared/Footer";
import { UserProvider } from "@/context/UserContext";
const MainLayout = ({ children }) => {
    return (
        <>
         
          <UserProvider>
            <Navbar />
            {children}
            <Footer /> 
 </UserProvider>
           
        </>
    );
};

export default MainLayout;