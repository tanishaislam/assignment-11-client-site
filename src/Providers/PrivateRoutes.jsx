import { useContext } from "react";
import { AuthContext } from "./AuthProviders";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({children}) => {
    const {isLoading, user} = useContext(AuthContext);


    if(isLoading){
        return <>       
            <h3 className="text-sm flex flex-col justify-center h-[70vh] items-center"><span className="loading loading-spinner loading-sm"></span><br /> loading..</h3>
        </>
    }

    if(!user?.email){
       return <Navigate to='/login'></Navigate>
    }

    return children;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;