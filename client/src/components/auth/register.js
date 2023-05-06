import React, { useState } from "react";

import FormFeild from "./form";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <FormFeild
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        formName={"Register"}
      />
    </div>
  );
}

export default Register;
