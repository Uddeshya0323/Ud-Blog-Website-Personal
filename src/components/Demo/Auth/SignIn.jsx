import React, { useState } from "react";
import Input from "../../../utils/Input";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setSignReq }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.email === "" || form.password === "") {
      toast.error("All fields are required!!!");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/");
      toast.success("User has been logged in ");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="size mt-[6rem] text-center">
      <h2 className="text-3xl font-semibold mb-4">Sign In with Email</h2>
      <p className="w-full sm:w-[25rem] mx-auto py-4 text-gray-600">
        Enter your email and password to log in. If you don't have an account,
        please sign up.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md bg-white bg-opacity-50 backdrop-blur-lg"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-left text-gray-700 font-semibold"
          >
            Email
          </label>
          <Input
            id="email"
            form={form}
            setForm={setForm}
            type="email"
            // title="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md p-2 w-full bg-white bg-opacity-70"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-left text-gray-700 font-semibold"
          >
            Password
          </label>
          <Input
            id="password"
            form={form}
            setForm={setForm}
            type="password"
            // title="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-md p-2 w-full bg-white bg-opacity-70"
          />
        </div>
        <button
          type="submit"
          className={`px-4 py-2 text-sm rounded-full bg-green-700 hover:bg-green-800 text-white w-full ${
            loading ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
      <button
        onClick={() => setSignReq("")}
        className="mt-5 text-sm text-green-600 hover:text-green-700 flex items-center mx-auto"
      >
        <MdKeyboardArrowLeft className="mr-2" />
        Back to Sign In Options
      </button>
    </div>
  );
};

export default SignIn;
