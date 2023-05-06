import React, { useState } from "react";

function FormFeild({ username, setUsername, password, setPassword, formName }) {
  return (
    <div>
      <form className="flex items-center justify-center gap-4 flex-col">
        <h2 className=" m-2 text-lg">{formName}</h2>
        {/* username */}
        <div className=" flex items-center justify-center gap-4">
          <label htmlFor="username">Username</label>
          <input
            className="bg-gray-50 border border-gray-300 rounded-md p-1"
            type="text"
            name={username}
            id="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        {/* password */}
        <div className=" flex items-center justify-center gap-4">
          <label htmlFor="password">Password</label>
          <input
            className="bg-gray-50 border border-gray-300 rounded-md p-1"
            type="text"
            name={password}
            id="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="p-2 bg-green-500 rounded-lg" type="submit">
          {formName}
        </button>
      </form>
    </div>
  );
}

export default FormFeild;
