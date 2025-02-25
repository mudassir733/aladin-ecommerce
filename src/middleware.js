
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"


export function middleware(req) {
    const token = req.cookies.get('access_token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        return NextResponse.next();
    } catch (err) {

        return NextResponse.redirect(new URL('/login', req.url));
    }
}


export const config = {
    matcher: ['/account/:path*'],
};