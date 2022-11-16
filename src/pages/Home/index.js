import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button"
import useAuth from '../../hooks/useAuth'
import * as C from './style'

const Home = () => {

    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <C.Container>
            <C.Title>Home</C.Title>
            <h1>Parabéns você foi logado com sucesso</h1>
            <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>Sair</Button>
        </C.Container>
    )

}

export default Home;
