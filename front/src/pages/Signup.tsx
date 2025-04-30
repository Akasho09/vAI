import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-8">
        <Heading label="Sign up" />
        <div className="sm:flex items-center justify-center hidden">
        <SubHeading label="Enter your information to create an account" />
        
        </div>
        <div className="md:flex gap-4 mt-4">
          <InputBox
            onChange={(e:any) => setFirstName(e.target.value)}
            placeholder="Akash"
            label="First Name"
            type="text"
          />
          <InputBox
            onChange={(e:any) => setLastName(e.target.value)}
            placeholder="Ahmad"
            label="Last Name"
            type="text"
          />
        </div>

        <div className="mt-4">
          <InputBox
            onChange={(e:any) => setUsername(e.target.value)}
            placeholder="Akash09"
            label="Username"
            type="text"
          />
        </div>

        <div className="mt-4">
          <InputBox
            onChange={(e:any) => setPassword(e.target.value)}
            placeholder="123456"
            label="Password"
            type="password"
          />
        </div>

        <div className="mt-6">
          <Button
            onClick={async () => {
              try {
                const response = await axios.post("http://localhost:3000/api/user/signup", {
                  username,
                  firstname: firstName,
                  lastname: lastName,
                  password
                });
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              } catch (error) {
                console.error(error);
                alert(error)
              }
            }}
            label="Sign up"
          />
        </div>

        <div className="mt-4">
          <BottomWarning label="Already have an account?" buttonText="Sign in" to="/signin" />
        </div>
      </div>
    </div>
  );
};
