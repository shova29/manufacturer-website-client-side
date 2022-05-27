import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/image/login.png";
import auth from "../../firebase.init";
import {
  signInWithEmailAndPassword,
  useSignInWithGoogle,
  useSignInWithGithub,
  useUpdateProfile,
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import useToken from "../../hooks/useToken";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const customId = "custom-id-yes";
  const navigate = useNavigate();
  const location = useLocation();

  const [token] = useToken(user || googleUser || githubUser);
  let from = location.state?.from?.pathname || "/";
  let logInError;

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
      toast.success("Login Successfully!", {
        toastId: customId,
      });
    }
  }, [token, from, navigate]);

  if (loading || googleLoading || githubLoading || sending) {
    return <Loading></Loading>;
  }

  if (error || googleError || githubError) {
    logInError = (
      <p className="text-red-500 mb-2">
        {" "}
        <span>
          {" "}
          {error?.message || googleError?.message || githubError?.message}
        </span>
      </p>
    );
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const resetPassword = async () => {
    const email = getValues("email");
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Reset Password Sent to Your Email!!", {
        toastId: customId,
        theme: "colored",
      });
    } else {
      toast.error("Please Enter Email Address!!", {
        toastId: customId,
        theme: "colored",
      });
    }
  };
  return (
    <div className="mb-24">
      <section className="">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img src={login} className="w-full" alt={login} />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <h2 className="text-cyan-700 text-center text-2xl font-bold mt-12 mb-6">
                Login to Winged Wheels!
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="text-lg mb-0 mr-4">Continue with</p>
                  <button
                    type="button"
                    onClick={() => signInWithGoogle()}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <FaGoogle className="w-4 h-full mx-auto" />
                  </button>

                  <button
                    type="button"
                    onClick={() => signInWithGithub()}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <FaGithub className="w-4 h-full mx-auto" />
                  </button>
                </div>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>

                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-sm text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-sm text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-sm text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-sm text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                {logInError}
                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-cyan-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="flex items-center mt-6 mb-2">
                <button
                  onClick={resetPassword}
                  className="text-gray-600 font-bold hover:text-red-500 focus:text-red-500 active:text-red-600 duration-200 transition ease-in-out"
                >
                  Forgot password?
                </button>
              </div>
              <p className="text-base font-semibold mb-0">
                Don't have an account?{" "}
                <Link
                  className="text-cyan-700 font-bold hover:text-cyan-800 focus:text-cyan-800 transition duration-200 ease-in-out"
                  to="/registration"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
