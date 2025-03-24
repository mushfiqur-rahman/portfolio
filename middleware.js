// middleware.js
import { NextResponse } from "next/server";
import geoip from "geoip-lite";

export function middleware(request) {
  // Get the user's IP address
  const ip =
    request.ip ||
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip");

  // Look up the user's country using their IP
  const geo = geoip.lookup(ip);

  // Check if the user is from India (country code: IN)
  if (geo && geo.country === "IN") {
    // Block access for users from India
    return new NextResponse("Access denied for users from India.", {
      status: 403,
    });
  }

  // Allow access for other users
  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
