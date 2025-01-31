"use client"
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Verify Your Email</h1>
                    <p className="text-gray-600 mt-2">
                        We have sent you an email with a verification link. Please check your inbox and click the link to activate your account.
                    </p>
                    <p className="text-gray-500 mt-4">Didn’t receive the email? Check your spam folder or try registering again.</p>
                </div>
            </div>
        </div>
    )
}

export default page