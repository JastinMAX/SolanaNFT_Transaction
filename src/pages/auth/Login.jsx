import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [field_data, set_field_data] = useState({
    email: "",
    password: "",
  });

  const set_fields = (e) => {
    set_field_data((priv) => {
      return { ...priv, [e.target.name]: e.target.value };
    });
  };

  const connect_wallet = (e) => {
    e.preventDefault();
    if (
      (field_data.email.length > 0) &
      (field_data.password.length > 0)
    ) {
      toast.success("Wallet connected successfully!");
    } else {
      toast.error("Something went wrong, try again later!");
    }
  };

  return (
    <React.Fragment>
      <div className=" px-3 py-3">
        <form
          onSubmit={connect_wallet}
          action=""
          className=" py-2 gap-10 flex flex-col"
        >
          <label className=" flex flex-col gap-1" htmlFor="">
            <span className=" font-medium">Email</span>
            <input
              placeholder="Email"
              type={"email"}
              name="email"
              value={field_data.email}
              required
              onChange={set_fields}
              className="  bg-gray-100 p-1 rounded-md outline-none ring-1 ring-gray-300 text-black"
            />
          </label>
          <label className=" flex flex-col gap-1" htmlFor="">
            <span className=" font-medium">Password</span>
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={field_data.password}
              required
              onChange={set_fields}
              className="  bg-gray-100 p-1 rounded-md outline-none ring-1 ring-gray-300 text-black"
            />
          </label>
          <button className=" bg-black text-white py-1 rounded-md">
            Login
          </button>
        </form>
        <p className=" font-light text-sm">
          Don&apos;t have an Account?
          <Link to={"/auth/register"}>
            {" "}
            <span className=" font-semibold">Register</span>
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Login;
