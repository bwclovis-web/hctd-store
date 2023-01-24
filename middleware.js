import { NextResponse } from 'next/server'

export function middleware (request) {
  const storeOnVacation = process.env.NEXT_PUBLIC_STORE_VACATION

  console.log(`%c storeOnVacation`, 'background: #0047ab; color: #fff; padding: 2px:', storeOnVacation)

  if (storeOnVacation === "true") {
    const url = request.nextUrl.clone()
    url.pathname = '/store-closed'
    return NextResponse.rewrite(url)
  }
}


export const config = {
  matcher: [ '/shop', '/shop/:path*' ]
}
