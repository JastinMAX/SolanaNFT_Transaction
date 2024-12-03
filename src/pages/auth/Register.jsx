import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [field_data, set_field_data] = useState({
    user_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const set_fields = (e) => {
    set_field_data((priv) => {
      return { ...priv, [e.target.name]: e.target.value };
    });
  };

  const connect_wallet = (e) => {
    e.preventDefault();
    if (field_data.password != field_data.confirm_password) {
      toast.warn("password and confirm password are not the same");
    } else if (
      (field_data.user_name.length > 0) &
      (field_data.email.length > 0) &
      (field_data.password.length > 0)
    ) {
        // edited fields
        const data = {...field_data};
        delete data.confirm_password;
        console.log(data);
        
      toast.success("User successfully registered!");
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
          className=" py-2 gap-5 flex flex-col"
        >
          <label className=" flex flex-col gap-1" htmlFor="">
            <span className=" font-medium">Username</span>
            <input
              placeholder="Username"
              name="user_name"
              value={field_data.user_name}
              onChange={set_fields}
              required
              type="text"
              className="  bg-gray-100 p-1 rounded-md outline-none ring-1 ring-gray-300 text-black"
            />
          </label>
          <label className=" flex flex-col gap-1" htmlFor="">
            <span className=" font-medium">Email</span>
            <input
              placeholder="Email"
              type={"email"}
              name="email"
              value={field_data.email}
              onChange={set_fields}
              required
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
              onChange={set_fields}
              required
              className="  bg-gray-100 p-1 rounded-md outline-none ring-1 ring-gray-300 text-black"
            />
          </label>
          <label className=" flex flex-col gap-1" htmlFor="">
            <span className=" font-medium">Confirm Password</span>
            <input
              placeholder="Confirm Password"
              type="password"
              name="confirm_password"
              value={field_data.confirm_password}
              onChange={set_fields}
              required
              className="  bg-gray-100 p-1 rounded-md outline-none ring-1 ring-gray-300 text-black"
            />
          </label>
          <button className=" bg-black text-white py-1 rounded-md">
            Sign Up
          </button>
        </form>
        <p className=" font-light text-sm">
          Already have an Account?
          <Link to={"/auth/login"}>
            {" "}
            <span className=" font-semibold">Login</span>
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Register;
