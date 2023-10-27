import { withAuth } from "next-auth/middleware";
import { type NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";

export default async function middleware(
  req: NextRequest,
  event: NextFetchEvent
) {
  const token = req.cookies.get("next-auth.session-token")?.value;
  const isAuthenticated = !!token;

  if (req.nextUrl.pathname.startsWith("/login") && isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const authMiddleware = await withAuth({
    pages: {
      signIn: "/login",
      error: "/error",
    },
  });

  // @ts-expect-error
  return authMiddleware(req, event);
}
