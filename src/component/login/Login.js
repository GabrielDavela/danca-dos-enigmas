import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import logoSh from "../../assets/screens/logoSh.svg";
import "./Login.css";
import { useState } from "react";
import { getUser, setUser } from "../../context/GameContext";

const Login = () => {

    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()

    const player = {
        name: nome,
        password: password,
        color: "",
        punctuation: 2000
    }

    const handleSubmit = () => {
        let auxPlayer = getUser()
        if (auxPlayer === null) setUser({name: "", password: "", color: "", punctuation: 2000})
        else auxPlayer = JSON.parse(localStorage.getItem("user"))
        if (player.name !== "" && player.password !== "") {
            setUser(player)
            nav("/rooms")
        }
    }

    return (
        <div className="container__principal__login">
            <div className="logoSh">
                <img src={logoSh} alt="Sherlock Holmes"/>
            </div>
            <div className="inputs__login">
                <div className="user__login">
                    <label className="label__login">Usuário</label>
                    <input className="input__login" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="password__login">
                    <label className="label__login">Senha</label>
                    <input className="input__login" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="button__login">
                <Button
                    text="Começar"
                    functionB={handleSubmit}
                />
            </div>
        </div>
    )
}

export default Login