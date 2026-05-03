import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import accepts from 'accepts'

export function middleware(request: NextRequest) {
  const accept = accepts(request.headers)
  const types = accept.types()

  const newHeaders = new Headers(request.headers)

  if (types.includes('text/markdown')) {
    newHeaders.set('x-content-type', 'markdown')
  } else {
    newHeaders.set('x-content-type', 'html')
  }

  return NextResponse.next({
    request: {
      headers: newHeaders,
    },
  })
}

export const config = {
  matcher: '/api/:path*',
}
