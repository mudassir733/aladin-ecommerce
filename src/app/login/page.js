"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// store
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "@/features/auth/authThunk";

// assets
import Logo from "@/assets/images/Logo.svg";
import login from "@/assets/images/login.png"
import emailIcon from "@/assets/images/emailIcon.png";
import password from "@/assets/images/password.png";
import ellipse from "@/assets/images/ellipseLogin.png";






export default function LoginPage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { isLoading, isError } = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const loginResult = await dispatch(loginUser(formData));

        if (loginResult.error) {
            return;
        }

        if (loginResult.payload) {
            router.push("/");
        }
    };

    return (

        <div className="min-h-screen bg-white flex  justify-around ">
            <div className="w-1/2 flex flex-col items-center justify-center" >
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <Link href="/" className="flex justify-center text-3xl font-bold text-teal-600">
                        <Image src={Logo} alt="Logo" className="invert" />
                    </Link>
                   
                    <p className="mt-2 text-center text-sm text-gray-600">
                    Login into your account
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className=" py-8 px-4  sm:rounded-lg sm:px-10">
                        <form className="space-y-6 p-4 " onSubmit={handleFormSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="relative mt-1  ">


                                    <input
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm bg-[#F1F3F6]"
                                    />
                                    <span className="absolute inset-y-0 -right-10 flex items-center ">
                                        <Image src={emailIcon} alt="Email Icon" width={40} height={100} />
                                    </span>
                                </div>
                            </div>

                            <div >
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="relative mt-1">
                                    <input
                                        id="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm bg-[#F1F3F6]"
                                    />
                                    <span className="absolute inset-y-0 -right-12 flex items-center ">
                                        <Image src={password} alt="Email Icon" width={55} height={100} />
                                    </span>
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 flex items-center px-3"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4 text-gray-500" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-gray-500" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-[112%] justify-center items-center gap-2 rounded-md border border-transparent bg-primaryMedium py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                                >
                                    Login now
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="block text-sm font-medium text-gray-700 ">
                                <h2 className="flex justify-center ">or</h2>
                            </div>
                            <div>
                                <Link href="/signup" className="flex  w-[112%] justify-center items-center gap-2 rounded-md border border-primaryLight   py-2 px-4 text-sm font-medium text-primaryLight shadow-sm hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                                    Signup now
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>


            </div>

            <div className="w-1/2 flex justify-center items-center relative ">
                <Image src={ellipse} alt="Elipse Icon" className="absolute w-full h-full object-cover" />
                <div className="absolute w-[70%] h-auto" >
                    <Image src={login} alt="Logo" />



                </div>
            </div>
        </div>
    );
}
