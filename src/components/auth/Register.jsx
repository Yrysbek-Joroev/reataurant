import React from "react";
import "../auth/Register.css";

const Register = () => {
  return (
    <div>
      <div className="big-register">
        <div className="register-left">
          <h3>ЗАРЕГИСТРИРОВАТЬСЯ</h3>
          <input placeholder="email" type="text" />
          <input placeholder="name" type="text" />
          <input placeholder="lastname" type="text" />
          <input placeholder="phone" type="text" />
          <input placeholder="password" type="text" />
          <input placeholder="password confirm" type="text" />
          <button>ЗАРЕГИСТРИРОВАТЬСЯ</button>
        </div>
        <div className="register-rigth">
          <h3>ВХОД</h3>
          <input placeholder="email" type="text" />
          <input placeholder="password" type="text" />
          <button>ВОЙТИ</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
