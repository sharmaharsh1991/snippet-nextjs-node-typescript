import { NextResponse } from "next/server";
export function middleware(request: any) {
  const authToken = request.cookies.get("token")?.value;
  const publicRoutes = ["/login"]; //public routes
  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);
  //   if (isPublicRoute && authToken) {
  //     return NextResponse.redirect(new URL("/your-route", request.url));
  //   } else if (!isPublicRoute && !authToken) {
  //     // Add the backTo query parameter to the redirect URL
  //     const redirectUrl = new URL("/login", request.url);
  //     redirectUrl.searchParams.set("backTo", request?.nextUrl.pathname);
  //     return NextResponse.redirect(redirectUrl);
  //   }
}
export const config = {
  matcher: ["/"], //protected routes
};
