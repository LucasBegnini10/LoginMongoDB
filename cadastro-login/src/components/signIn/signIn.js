import React, {useEffect, useState} from "react";
import { Container, Title, Form, Input, Button } from "../../style/style";
import axios from "axios";
import {  } from "react-router-dom";


export default function SignIn(){
    
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[users, setUsers] = useState();

    useEffect( () => {
        axios.get("http://localhost:3001/users")
        .then((response) => setUsers(response.data))
        .catch((err) => console.error(err))   
    },[])
    

    function verifyEmpty(){
        if(email === "" || password === ""){
            alert("Preencha todos os campos!")
        }else{
           find()
        }
    }

    function find(){
        const infoUser = users.find( (element) => {
            return element.email === email 
        })
        verify(infoUser)
    }

    function verify(infoUser){
        if(infoUser === undefined || infoUser.password !== password){
           alert("Dados Inválidos")
        }
        else{
            
        }
    }
    
    return(
        <Container>
            <Title>
                <h1>Login</h1>
            </Title>
            <Form>
                <Input placeholder="Email" type="email"  onChange={(e) => setEmail(e.target.value)}/>
                <Input placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={verifyEmpty}>Login</Button>
            </Form>
        </Container>
    )
}