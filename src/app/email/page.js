
"use client";

import { Suspense } from "react";
import VerifyEmail from "@/features/verifyEmail/VerifyEmail";

export default function EmailPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <VerifyEmail />
        </Suspense>
    );
}
