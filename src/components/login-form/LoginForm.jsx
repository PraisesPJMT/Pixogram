import { useEffect, useState } from "react";
import { initialLoginData } from "../../utilities/constants";

import {
  validateEmail,
  validateLogin,
  validatePassword,
} from "../../utilities/helpers";

import InputField from "../input-field/InputField";

import "./LoginForm.scss";
import { useAuth } from "../../store/auth";
import { API_STATUS, NOTICE_TYPE } from "../../utilities/enums";
import { useNotice } from "../../store/notice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loginData, setLoginData] = useState(initialLoginData);
  const [loginDataErr, setLoginDataErr] = useState(initialLoginData);

  const [init, setInit] = useState(false);

  const login = useAuth((state) => state.login);
  const status = useAuth((state) => state.status);
  const message = useAuth((state) => state.message);

  const setNotice = useNotice((state) => state.setNotice);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setInit(false);
    setLoginDataErr(initialLoginData);

    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInit(false);

    if (validateLogin(loginData, setLoginDataErr)) {
      login(loginData);

      setInit(true);
    }
  };

  const resetForm = () => {
    setInit(false);
    setLoginData(initialLoginData);
    setLoginDataErr(initialLoginData);
  };

  useEffect(() => {
    if (init && status === API_STATUS.SUCCEEDED) {
      setNotice({ type: NOTICE_TYPE.SUCCESS, message });

      navigate("/");
      resetForm();
    }

    if (init && status === API_STATUS.FAILED) {
      setNotice({ type: NOTICE_TYPE.ERROR, message });
    }
  }, [init, status, message]);

  useEffect(() => {
    return () => resetForm();
  }, []);

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Account Login</h1>

      {init && status === API_STATUS.FAILED && (
        <p className="error-msg">{message}</p>
      )}

      <div>
        <InputField
          name="email"
          handleChange={handleChange}
          label="Email"
          error={loginDataErr.email}
          value={loginData.email}
          type="email"
          required
          validateField={validateEmail}
        />

        <InputField
          name="password"
          handleChange={handleChange}
          label="Password"
          error={loginDataErr.password}
          value={loginData.password}
          type="password"
          required
          validateField={validatePassword}
        />
      </div>

      <button type="submit" disabled={status === API_STATUS.LOADING}>
        {status === API_STATUS.LOADING ? "Login..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
