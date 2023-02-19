import { NextResponse } from 'next/server'

export function middleware (request) {
  const storeOnVacation = process.env.NEXT_PUBLIC_STORE_VACATION

  if (storeOnVacation === "true") {
    const url = request.nextUrl.clone()
    url.pathname = '/store-closed'
    return NextResponse.rewrite(url)
  }
}


export const config = {
  matcher: [ '/shop', '/shop/:path*' ]
}
