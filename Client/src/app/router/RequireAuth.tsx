import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import { toast } from "react-toastify";
import { useEffect } from "react";

interface Props {
    roles?: string[];
}

export default function RequireAuth({roles}: Props) {
    
    const {user} = useAppSelector(state => state.account);
    const location = useLocation();

    
    useEffect(() => {
        if (!user) {
            toast.error('You need to be logged in to do that!');
            console.log("errror"); // repeating twice could be a state error
        } else if (roles && !roles.some((role) => user.roles?.includes(role))) {
            toast.error('Not authorized to access this area');
        }
    }, [roles, user]);

    if(!user) {
        return <Navigate to='/login' state={{from: location}} />
    }

   if(roles && !roles?.some(role => user.roles?.includes(role))) {
        return <Navigate to='/catalog' />
   }

   return <Outlet />
}