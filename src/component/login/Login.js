import Button from "../button/Button";
import { Link } from "react-router-dom";
import logoSh from "../../assets/screens/logoSh.svg";
import "./Login.css";
import { useState } from "react";

const Login = () => {

    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        const player = {
            name: nome,
            password: password
        }
        const auxPlayer = JSON.parse(localStorage.getItem("player_information"))
        if(!(auxPlayer.name === player.name && auxPlayer.password === player.password)) {
            localStorage.setItem("player_information", JSON.stringify(player))
        } else {
            console.log(auxPlayer)
        }

    }

    return (
        <div className="container__principal__login">
            <div className="logoSh">
                <img src={logoSh} />
            </div>
            <div className="inputs__login">
                <div className="user__login">
                    <label className="label__login">Usuário</label>
                    <input className="input__login" type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div className="password__login">
                    <label className="label__login">Senha</label>
                    <input className="input__login" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="button__login">
                <Link to="/rooms">
                    <Button
                        text="Começar" 
                        functionB={handleSubmit}
                        />
                </Link>
            </div>
        </div>
    )
}

export default Login