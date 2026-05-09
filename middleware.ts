import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(
  request: NextRequest
) {

  const token =
    request.cookies.get(
      "sb-access-token"
    );

  const isAuthPage =
    request.nextUrl.pathname.startsWith(
      "/auth"
    );

  const isProtectedRoute =
    request.nextUrl.pathname.startsWith(
      "/explore"
    ) ||

    request.nextUrl.pathname.startsWith(
      "/dashboard"
    ) ||

    request.nextUrl.pathname.startsWith(
      "/admin"
    );

  /* NOT LOGGED IN */

  if (
    isProtectedRoute &&
    !token
  ) {

    return NextResponse.redirect(
      new URL(
        "/auth",
        request.url
      )
    );

  }

  /* LOGGED IN TRYING TO OPEN AUTH */

  if (
    isAuthPage &&
    token
  ) {

    return NextResponse.redirect(
      new URL(
        "/explore",
        request.url
      )
    );

  }

  return NextResponse.next();

}

export const config = {

  matcher: [

    "/auth/:path*",

    "/explore/:path*",

    "/dashboard/:path*",

    "/admin/:path*",

  ],

};