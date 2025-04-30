import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface s {
  token : string 
}

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // default role
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <Heading label="Sign in" />
        <div className="sm:flex hidden items-center justify-center">
          <SubHeading label="Enter your credentials to access your account" />
        </div>

        <div className="mt-4">
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Akash09"
            label="Username"
            type="text"
          />
        </div>

        <div className="mt-4">
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="123456"
            label="Password"
            type="password"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="mt-6">
          <Button
            label="Sign in"
            onClick={async () => {
              try {
                const response = await axios.post<s>("http://localhost:3000/api/user/signin", {
                  username,
                  password,
                  role
                });
                localStorage.setItem("token", response.data.token);
                navigate(role === "user" ? "/dashboard" : "/admindashboard");
              } catch (error) {
                console.error(error);
                alert(error) /// fix to exact error 
              }
            }}
          />
        </div>

        <div className="mt-4">
          <BottomWarning
            label="Don't have an account?"
            buttonText="Sign up"
            to="/signup"
          />
        </div>
      </div>
    </div>
  );
};
