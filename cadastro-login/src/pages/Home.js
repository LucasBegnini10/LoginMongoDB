import React from "react";
import { Main} from "../style/style"
import SignUp from "../components/signUp/signUp";
import SignIn from "../components/signIn/signIn";


export default function Home(){
    return(
        <>
            <Main>
                <SignUp />
                <SignIn />
            </Main>
            
            
        </>
    )
}