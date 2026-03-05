import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'

    // Set up Supabase client
    const supabase = createServerClient(
        url,
        anonKey,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        request.cookies.set(name, value)
                    )
                    response = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    // Only run check if we have actual keys? No, let's just use it.
    const { data: { user } } = await supabase.auth.getUser()

    // Protect /app routes
    if (!user && request.nextUrl.pathname.startsWith('/app')) {
        const loginUrl = request.nextUrl.clone()
        loginUrl.pathname = '/login'
        return NextResponse.redirect(loginUrl)
    }

    // Redirect to /app if logged in and trying to access /login
    if (user && request.nextUrl.pathname.startsWith('/login')) {
        const appUrl = request.nextUrl.clone()
        appUrl.pathname = '/app'
        return NextResponse.redirect(appUrl)
    }

    return response
}

export const config = {
    matcher: ['/app/:path*', '/login'],
}
