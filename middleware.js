import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
  const { pathname } = req.nextUrl
  const url = req.nextUrl.clone()
  const shouldRedirect = process.env.NEXT_PUBLIC_MAINTENANCE_REDIRECT

  if (pathname === '/' && shouldRedirect === "true") {
    url.pathname = '/coming-soon'
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}
