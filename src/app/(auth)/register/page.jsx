"use client";

import {
  FaEye,
  FaGoogle,
  FaEyeSlash,
} from "react-icons/fa";

import React, { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] =
    useState(false);

  const handleRegisterFunc = async (data) => {
    const { email, name, password } = data;

    try {
      const { data: res, error } =
        await authClient.signUp.email({
          name,
          email,
          password,
          callbackURL: "/login",
        });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("✅ Register Successful!");

      router.push("/login");

    } catch (err) {
      toast.error("❌ Register Failed!");
      console.log(err);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/home",
      });
    } catch (err) {
      toast.error("❌ Google Login Failed!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 mb-8 grid md:grid-cols-2 gap-12 items-center">

      <div className="grid gap-2">
        <h6 className="text-center text-black font-bold">
          Login with Google
        </h6>

        <button
          onClick={handleGoogleSignIn}
 className="bg-blue-600 flex justify-center gap-2 items-center text-white py-2 rounded-full cursor-pointer"
        >
          <FaGoogle />
          Login with Google
        </button>
      </div>

      <div className="container mx-auto min-h-[80vh] flex justify-center items-center">

        <div className="p-4 rounded-xl bg-white">

          <h6 className="text-center text-blue-600 font-bold">
            Register your account
          </h6>

          <form onSubmit={handleSubmit(handleRegisterFunc)}>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-full w-xs border p-4">

              <legend className="fieldset-legend font-bold text-black">
                Name
              </legend>

              <input
                type="text"
                className="input rounded-full"
                placeholder="Type Your Name"
                {...register("name", {
                  required: "Name field is required",
                })}
              />

              {errors.name && (
                <p className="text-red-500 text-center font-bold">
                  {errors.name.message}
                </p>
              )}

              <legend className="fieldset-legend font-bold text-black">
                Email Address
              </legend>

              <input
                type="email"
                className="input rounded-full"
                placeholder="Enter Your Email Address"
                {...register("email", {
                  required: "Email field is required",
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-center font-bold">
                  {errors.email.message}
                </p>
              )}

              <legend className="fieldset-legend font-bold text-black">
                Password
              </legend>

              <div className="relative">

                <input
                  type={
                    isShowPassword ? "text" : "password"
                  }
                  className="input rounded-full w-full"
                  placeholder="Type Your Password"
                  {...register("password", {
                    required:
                      "Password field is required",
                  })}
                />

                <button
                  type="button"
                  onClick={() =>
                    setIsShowPassword(!isShowPassword)
                  }
                  className="absolute right-4 top-3 cursor-pointer"
                >
                  {isShowPassword ? (
                    <FaEye />
                  ) : (
                    <FaEyeSlash />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-center font-bold">
                  {errors.password.message}
                </p>
              )}

              <button className="btn btn-neutral rounded-full bg-blue-600 mt-4">
                Register
              </button>

            </fieldset>
          </form>

          <div className="flex justify-center items-center gap-1 mt-3">
            <p>Already Have An Account?</p>

            <Link
              href="/login"
              className="cursor-pointer text-blue-600"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;