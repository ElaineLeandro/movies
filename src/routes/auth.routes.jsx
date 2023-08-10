import { Routes, Route } from "react-router-dom";

import {SingIn} from "../pages/SignIn"
import {SignUp} from "../pages/SignUp"

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SingIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    )
}