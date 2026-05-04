import { Toaster } from "react-hot-toast";
const AuthLayout = ({ children }) => {
    return (
        <>
         
            {children} 
            <Toaster position="top-center" /> 
        </>
    );
};

export default AuthLayout;