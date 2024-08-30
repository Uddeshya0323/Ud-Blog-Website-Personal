import React, { useState } from "react";
import Input from "../../../utils/Input";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";

const SignUp = ({ setSignReq, setModal }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(form).some((field) => field === "")) {
      toast.error("All fields are required");
    } else if (form.password !== form.rePassword) {
      toast.error("Your passwords do not match!");
      return;
    } else {
      setLoading(true);
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );

        const ref = doc(db, "users", user.uid);
        const userDoc = await getDoc(ref);

        if (!userDoc.exists()) {
          await setDoc(ref, {
            userId: user.uid,
            username: form.username,
            email: form.email,
            userImg: "",
            bio: "",
            created: Date.now(),
          });
          navigate("/");
          toast.success("New account has been created");
          setModal(false);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="size mt-[6rem] text-center">
      <h2 className="text-3xl font-semibold mb-4">Sign Up with Email</h2>
      <p className="w-full sm:w-[25rem] mx-auto py-4 text-gray-600">
        Create a new account by entering your email and password. If you already
        have an account, please sign in.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md bg-white bg-opacity-50 backdrop-blur-lg"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="username"
            className="text-left text-gray-700 font-semibold"
          >
            Username
          </label>
          <Input
            id="username"
            form={form}
            setForm={setForm}
            type="text"
            // title="username"
            placeholder="Enter your username"
            className="border border-gray-300 rounded-md p-2 w-full bg-white bg-opacity-70"
          />
        </div>
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
        <div className="flex flex-col gap-2">
          <label
            htmlFor="rePassword"
            className="text-left text-gray-700 font-semibold"
          >
            Confirm Password
          </label>
          <Input
            id="rePassword"
            form={form}
            setForm={setForm}
            type="password"
            // title="rePassword"
            placeholder="Confirm your password"
            className="border border-gray-300 rounded-md p-2 w-full bg-white bg-opacity-70"
          />
        </div>
        <button
          type="submit"
          className={`px-4 py-2 text-sm rounded-full bg-green-700 hover:bg-green-800 text-white w-full ${
            loading ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          {loading ? "Signing Up..." : "Sign Up"}
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

export default SignUp;
