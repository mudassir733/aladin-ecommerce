"use client"
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Cookies from "js-cookie";


// store
import { verifyEmail } from "@/features/auth/authThunk";

export default function VerifyEmail() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token")
    const router = useRouter();
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.auth);


    useEffect(() => {
        if (!token) return;

        console.log("Received Token from URL:", token);
        Cookies.set("access_token", token);

        dispatch(verifyEmail(token))
            .unwrap()
            .then(() => {
                toast.success("Email verified successfully! Redirecting...");
                router.push("/login");
            })
            .catch((errorMessage) => {
                toast.error(errorMessage);
                router.push("/");
            });

    }, [token, dispatch, router]);


    return (
        <div>
            <div className="text-center mt-10">
                <h1 className="text-2xl font-semibold">
                    {isLoading ? "Verifying Email..." : error ? "Verification Failed" : "Email Verified!"}
                </h1>
            </div>
        </div>
    );
}
