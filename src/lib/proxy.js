import { NextResponse } from 'next/server';
import { auth } from './lib/auth'; 

export async function proxy(request) {
    try {
        const session = await auth.api.getSession({
            headers: request.headers 
        });

        const { pathname } = request.nextUrl;

        
        if (!session && (pathname === '/myprofile' || pathname === '/allcourse' || pathname.startsWith('/allcourse/'))) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        return NextResponse.next();
    } catch (e) {
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        '/myprofile', 
        '/allcourse',
        '/allcourse/:path*' 
    ],
};