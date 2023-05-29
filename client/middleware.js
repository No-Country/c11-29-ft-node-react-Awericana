import { NextResponse } from 'next/server'
import { checkSession } from '@/lib/checkSession'

export async function middleware (request) {
  const userData = await checkSession(request.headers)
  console.log(userData)
  const path = request.nextUrl.pathname
  const isOnAuthPage = ['/auth/signin', '/auth/signup'].includes(path)

  if (userData?.error && !isOnAuthPage) {
    const url = request.nextUrl.clone()
    url.pathname = '/auth/signin'
    return NextResponse.redirect(url)
  } else if (isOnAuthPage && userData?.user) {
    // Si esta logueado, no debe poder visualizar el formulario
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
export const config = {
  matcher: ['/profile/:all*', '/auth/:all*', '/sell/:all*']
}
