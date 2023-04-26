import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import "./css/LoginPageCss.css";

export const LoginPage = ({ setLogin }) => {
  const navigate = useNavigate();
  // input handler
  const [code, setCode] = useState("");
  const onInputChange = ({ target }) => {
    setCode(target.value);
  };
  // login access
  const onLogin = (e) => {
    e.preventDefault();
    if (code !== "2526") {
      toast.error("wrong code, Please contact us");
      setCode("");
      return;
    }
    setLogin(true);
    navigate("/");
  };
  return (
    <div className="ContainerLogin">
      <div>
        <Toaster position="top-left" reverseOrder={false} />
      </div>
      <section>
        <div>
          <span>Casa Valencia Project</span>
          <p className="titleLogin">Build beautiful products, faster.</p>
        </div>

        <div className="formLoginContainer">
          <span>do you want to see the progress?</span>
          <form onSubmit={onLogin}>
            <input
              type="text"
              placeholder="ENTER YOUR CODE"
              className="codeLogin"
              name="code"
              value={code}
              onChange={onInputChange}
              autoComplete="off"
            />
          </form>
        </div>
      </section>
    </div>
  );
};
