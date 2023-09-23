import { Link } from "react-router-dom";
import { FieldErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";

import { LoginFormValidation } from "../../utils/validation";
import type { LoginForm } from "../../utils/validation";

import styles from './login.module.css'
import { Button } from "../../components/Button";
import { useAuth } from "../../utils/useAuth";

type User = {
  accessToken: string;
}

export function Login() {
  const { login } = useAuth();

  const { register, handleSubmit } = useForm<LoginForm>({
    resolver: yupResolver(LoginFormValidation),
  });

  const onSubmit = async (data: LoginForm) => {
    // const response = await axios.post<User>('http://localhost:3000/login', {
    //   ...data
    // });


    login("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlzYXF1ZWZzbnVuZXNAZ21haWwuY29tIiwic3ViIjoiZmNmYjU0YTMtZjRkOC00ZDIwLTk0YmItYjhiZWFiYTE2MGUzIiwibmFtZSI6IklzYXF1ZSBOdW5lcyIsImlhdCI6MTY5NTQ5Mjc4MywiZXhwIjoxNjk1NjY1NTgzfQ.Kp4uaawgQfcF6LkepZPRureM2cGv3OblSi_DD6f4JBY");

    localStorage.setItem("accessToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlzYXF1ZWZzbnVuZXNAZ21haWwuY29tIiwic3ViIjoiZmNmYjU0YTMtZjRkOC00ZDIwLTk0YmItYjhiZWFiYTE2MGUzIiwibmFtZSI6IklzYXF1ZSBOdW5lcyIsImlhdCI6MTY5NTQ5Mjc4MywiZXhwIjoxNjk1NjY1NTgzfQ.Kp4uaawgQfcF6LkepZPRureM2cGv3OblSi_DD6f4JBY")
  };

  const onErrorSubmit = (errors: FieldErrors<LoginForm>) => {
    console.log(errors);
  };

  return (
    <main id={styles["main-login"]}>
      <form
        onSubmit={handleSubmit(onSubmit, onErrorSubmit)}
        className={styles["login-form"]}
      >
        <div className={styles["input-container"]}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            required
            {...register("email")}
          />
        </div>

        <div className={styles["input-container"]}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            {...register("password")}
          />
        </div>

        <p>
          Não tem uma conta? <br /> <Link to={'/register'}>Faça seu cadastro</Link>
        </p>

        <Button type="submit" variation="solid">Login</Button>
      </form>
    </main>
  );
}
