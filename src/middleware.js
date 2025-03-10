
import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";


export function middleware(request) {
    const token = request.cookies.get("access_token")?.value

    const protectedRoute = ['/account/personal-info', '/', 'products']


    if (protectedRoute.some((route) => request.nextUrl.pathname.startsWith(route))) {
        if (!token) {
            const url = new URL('/signup', request.url);
            url.searchParams.set('redirectTo', request.nextUrl.pathname)
            return NextResponse.redirect(url);

        }

        try {
            const decodedToken = jwtDecode(token);
            const role = decodedToken.role;

            if (role === 'ADMIN') {
                const url = new URL('/signup', request.url);
                url.searchParams.set('redirectTo', request.nextUrl.pathname);
                request.cookies.delete('access_token');
                return NextResponse.redirect(url);

            }

        } catch (error) {
            console.error("Error decoding token:", error);
            const url = new URL('/signup', request.url);
            url.searchParams.set('redirectTo', request.nextUrl.pathname)
            return NextResponse.redirect(url);
        }

    }

    return NextResponse.next();
}


export const config = {
    matcher: ['/account/personal-info', '/products'],
};