import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']); // Only protect /dashboard

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/dashboard(.*)', // Only match dashboard routes
    // ...other protected routes if needed
  ],
};