"use client";
import { useState, ChangeEvent } from "react";

interface LoginFormProps {
  // You can define any additional props needed for the LoginForm
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleLogin = async () => {
    setError("");
    try {
      setError("");
      if (username && password) {
        setError("");
        const response = await fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          setUsername("");
          setPassword("");
          const data = await response.json();
          setMessage(data.message);
        } else {
          setError("");
          const errorData = await response.json();
          setMessage(`Error: ${errorData.error}`);
        }
      } else {
        setError("Please enter required field");
        setMessage("");
      }
    } catch (error: any) {
      console.error("Error logging in:", error.message);
    }
  };

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h3 className="mb-3">Login form</h3>
      <label>
        Username:
        <input
          type="text"
          className="border-2 mb-3"
          value={username}
          onChange={handleChangeUsername}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          className="border-2"
          value={password}
          onChange={handleChangePassword}
        />
      </label>
      <br />
      <button className="border-2 bg-primry mt-3" onClick={handleLogin}>
        Login
      </button>
      <p className="text-red">{error}</p>
      <p className="text-green">{message}</p>
    </div>
  );
};

export default LoginForm;
