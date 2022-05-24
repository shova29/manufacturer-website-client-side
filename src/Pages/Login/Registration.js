import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import registration from "../../assets/image/registration.png";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useSignInWithGithub,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";
import useToken from "../../hooks/useToken";
import { toast } from "react-toastify";

const Registration = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [errorMessage, setErrorMessage] = useState("");
  const [token] = useToken(user || googleUser || githubUser);
  const customId = "custom-id-yes";
  const navigate = useNavigate();
  let registrationError;

  if (loading || googleLoading || githubLoading || updating) {
    return <Loading></Loading>;
  }

  if (error || googleError || githubError || updateError) {
    registrationError = (
      <p className="text-red-500 mb-2">
        {" "}
        <span>
          {" "}
          {error?.message ||
            googleError?.message ||
            githubError?.message ||
            updateError?.message}
        </span>
      </p>
    );
  }

  if (token) {
    navigate("/");
    toast.success("Registered Successfully!", {
      toastId: customId,
    });
  }

  const onSubmit = async (data) => {
    const { password, confirmPassword } = data;
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data?.name });
      console.log("updated profile");
    } else {
      // console.log("Password didnt matched");
      setErrorMessage("Your Password did not matched!");
    }
  };

  return (
    <div>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img src={registration} className="w-full" alt={registration} />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <h2 className="text-cyan-700 text-center text-2xl font-bold mt-12 mb-6">
                Registration
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
                  <div className="mb-6">
                    <input
                      type="name"
                      className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                      placeholder="Your Name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Name is required",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.name?.type === "required" && (
                        <span className="label-text-alt text-sm text-red-500">
                          {errors.name.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Please provide a valid email...",
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
                    className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Password required Minimum 6 characters...",
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
                <div className="mb-6">
                  <input
                    type="password"
                    className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: {
                        value: true,
                        message: "Confirm Password is required",
                      },
                    })}
                  />{" "}
                  <label className="label">
                    {errors.confirmPassword?.type === "required" && (
                      <span className="label-text-alt text-sm text-red-500">
                        {errors.confirmPassword.message}
                      </span>
                    )}
                    <p className="text-red-500 ml-2 mb-2">{errorMessage}</p>
                  </label>
                </div>
                {registrationError}
                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-cyan-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Register
                  </button>
                </div>
              </form>
              <p className="text-base font-semibold mt-2 pt-1 mb-0">
                Already have an account?
                <Link
                  className="text-cyan-700 hover:text-cyan-800 focus:text-cyan-800 transition duration-200 ease-in-out"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
