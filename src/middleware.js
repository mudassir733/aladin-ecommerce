
import { NextResponse } from "next/server";


export function middleware(request) {
    const token = request.cookies.get("access_token")?.value

    const protectedRoute = ['/account']

    if (protectedRoute.some((route) => request.nextUrl.pathname.startsWith(route))) {
        if (!token) {
            const url = new URL('/signup', request.url);
            url.searchParams.set('redirectTo', request.nextUrl.pathname)
            return NextResponse.redirect(url);

        }

    }

    return NextResponse.next();
}


export const config = {
    matcher: ['/account'],
};