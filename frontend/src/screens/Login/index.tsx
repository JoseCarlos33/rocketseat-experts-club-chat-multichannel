import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChannelContext } from "../../hooks/useChannelContext";
import {
  Container
} from './styles';

export const Login = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const { login } = useChannelContext();

  return (
    <Container>
      <h1>Login</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          login(userName);
          navigate("/channels");
        }}
      > 
        <div>
          <p>Username</p>
          <input
            type="text"
            placeholder="Seu usuário"
            value={userName}
            onChange={(ev) => setUserName(ev.target.value)}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="text"
            placeholder="Sua Senha"
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
};
