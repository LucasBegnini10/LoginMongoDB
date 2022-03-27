import React, { useEffect, useState } from "react";
import { Container, Title, Form, Input, Button } from "../../style/style";
import axios from "axios";


export default function SignUp(){
    
    const[user, setUser] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    const [listEmailUsers, setListEmailUsers] = useState("");


    useEffect( () => {
        axios.get("http://localhost:3001/users")
        .then((response) => response.data)
        .then((data) => setListEmailUsers(data.map(item => {
            return item.email
        })))
    }, [])

    
    function verifyEmpty(){
        if(user === "" || email === "" || password === "" || confirmPassword === ""){
            alert("Preencha todos os campos!")
        }else{
           verifyPasswords()
        }
    }

    function verifyPasswords(){
        if(password !== confirmPassword){
            alert("As senhas não são compatíveis")
        }
        else{
            verifyEmailExist()
        }
    }

    function verifyEmailExist(){
        const result = listEmailUsers.find( element => {
            return element === email
        })
        if(result !== undefined){
            alert("Email já cadastrado. Faça LOGIN!")
        }
        else{
            alert("Cadastro realizado com sucesso")
            signUp()
        }
    }
   
    

    function signUp(){
        axios.post("http://localhost:3001/users", {
            user: user,
            email: email,
            password: password
        })
    }
    
    return(
        <Container>
            <Title>
                <h1>Cadastrar</h1>
            </Title>
            <Form action="/">
                <Input placeholder="Nome de Usuario" type="text" onChange={(e) => setUser(e.target.value)}/>
                <Input placeholder="Email" type="email"onChange={(e) => setEmail(e.target.value)}/>
                <Input placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <Input placeholder="Confirmar Senha" type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Button onClick={verifyEmpty}>Cadastrar</Button>
            </Form>
        </Container>
    )
}