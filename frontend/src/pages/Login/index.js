import React, { useState } from "react";
import SignInput from "../../components/SignInput";
import SignButtom from "../../components/SignButton";
import InvalidityMsg from "../../components/InvalidityMsg";
import "./styles.css";
import { validateEmail, validatePassword } from "../../util/validation";

const Login = () => {
  // criando os estados
  const [email, setEmail] = useState({ value: "", invalidity: "" });
  const [password, setPassword] = useState({ value: "", invalidity: "" });

  // funcoes para mudar os estados
  const changeEmail = (e) => {
    const value = e.target.value;
    
    setEmail({ ...email, value });
    // como email eh um objeto { value: '', indalidity: '' },
    // vamos clonar as propriedades do objeto usando o operador spread { ...email },
    // e atribuir o novo valor de value { ...email, value }
  };

  const changePassword = (e) => {
    const value = e.target.value;

    setPassword({ ...password, value });
  };

  const validateForm = () => {
    const invalidityEmail = validateEmail(email.value);
    const invalidityPassword = validatePassword(password.value);

    setEmail({ ...email, invalidity: invalidityEmail });
    setPassword({ ...password, invalidity: invalidityPassword });

    return !invalidityEmail && !invalidityPassword ? true : false;
  };

  const submit = () => {
    if (validateForm()) {
      // jajá
    }
  };

  return (
    <div id="login">
      <div id="loginBox">
        <span>Login</span>
        <SignInput
          value={email.value}
          onChange={changeEmail}
          label="Email"
          type="email"
        />
        <InvalidityMsg msg={email.invalidity} />
        <SignInput
          value={password.value}
          onChange={changePassword}
          label="Senha"
          type="password"
        />
        <InvalidityMsg msg={password.invalidity} />
        <a href="/">Esqueceu sua senha?</a>
        <SignButtom onClick={submit} text="ENTRAR" />
        <a href="/signup">Cadastre-se</a>
      </div>
    </div>
  );
};

export default Login;