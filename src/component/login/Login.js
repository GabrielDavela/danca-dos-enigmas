import Button from "../button/Button";
import logoSh from "../../assets/screens/logoSh.svg";
import "./Login.css";

const Login = () => {
    return (
        <div className="container__principal__login">
            <div className="logoSh">
                <img src={logoSh} alt="" />
            </div>
            <div className="inputs__login">
                <div className="user__login">
                    <label className="label__login">Usuário</label>
                    <input className="input__login" type="text" />
                </div>
                <div className="password__login">
                    <label className="label__login">Senha</label>
                    <input className="input__login" type="text" />
                </div>
            </div>
            <div className="button__login">
                <Button
                    text="Começar" />
            </div>
        </div>
    )
}

export default Login