// Next.js Middleware to handle maintenance and store vacation modes
import { NextResponse } from 'next/server'

// List of paths to allow through without redirect
const allowList = [ '/coming-soon',
  '/_next',
  '/api',
  '/favicon',
  '/vercel.svg',
  '/studio',
  '/public',
  '/images',
  '/static',
  '/Soda-can.gltf',
  '/Soda-can.bin' ]

export function middleware(request) {
  const { pathname } = request.nextUrl
  // If store is on vacation, rewrite all /shop routes to /store-closed
  const storeOnVacation = process.env.NEXT_PUBLIC_STORE_VACATION
  if (storeOnVacation === 'true' && pathname.startsWith('/shop')) {
    const url = request.nextUrl.clone()
    url.pathname = '/store-closed'
    return NextResponse.rewrite(url)
  }

  // Allow access to certain paths
  if (allowList.some(prefix => pathname.startsWith(prefix))) {
    return NextResponse.next()
  }

  // Redirect all other routes to /coming-soon
  const url = request.nextUrl.clone()
  url.pathname = '/coming-soon'
  return NextResponse.redirect(url)
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*'
}
