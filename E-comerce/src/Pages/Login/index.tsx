import { FC } from "react";
import Input from "../../Componentes/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoPlanet } from "react-icons/io5";
import './login.css'

const Login: FC = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
   const userLocalStorage = window.localStorage.getItem('@auth');
   const user = JSON.parse(userLocalStorage as string)
   console.log(data.senha, user.senha)

    if(user.email == data.email && user.senha == data.senha){
        window.alert('Login Successfully accomplished! Please, go back home')
    }else{
        window.alert('wrong login or password, please try again')
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="logo">
        <IoPlanet />
        </div>
        <h2>Login</h2>
      </div>

      <div className="login-form">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div>
              <Input
                type="email"
                name="email"
                autofocus
                label="E-mail"
                validation={{
                  required: "E-mail obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "E-mail inválido",
                  },
                }}
              />
            </div>

            <div>
              <Input
                type="password"
                name="senha"
                label="Password"
                validation={{
                  required: "Senha obrigatória",
                }}
              />
            </div>

            <div>
              <button
                type="submit" className="login-button">Enter</button>
            </div>
          </form>
        </FormProvider>
        <Link to={'/'}>Back</Link>

      </div>
    </div>
  );
};

export default Login;