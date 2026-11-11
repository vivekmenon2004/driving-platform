/**
 * Centralized API client for Gothenburg Dynamics Swedish Driving Platform.
 * Supports Vercel Multi-Service Bindings (internal SERVER_URL for SSR / Server Components)
 * and public client-side endpoint routing (/api/v1).
 */

export function getApiBaseUrl(): string {
  // 1. When running on the server (Server Components, Route Handlers, SSR),
  // Vercel Service Bindings inject `SERVER_URL` with the target service's internal private URL.
  if (typeof window === "undefined" && process.env.SERVER_URL) {
    return process.env.SERVER_URL;
  }

  // 2. Explicit public API URL environment variable (e.g. during local development)
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  // 3. In the browser on Vercel, requests to /api/(.*) are routed to the server service
  if (typeof window !== "undefined") {
    return "/api/v1";
  }

  // 4. Default fallback for local server-side rendering
  return "http://localhost:5000/api/v1";
}

export async function fetchApi(path: string, init?: RequestInit): Promise<Response> {
  const baseUrl = getApiBaseUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // If baseUrl already includes the '/api/v1' prefix (or if using relative '/api/v1'),
  // prevent duplicate prefixes
  const resolvedPath =
    baseUrl.endsWith("/api/v1") && normalizedPath.startsWith("/api/v1")
      ? normalizedPath.replace("/api/v1", "")
      : normalizedPath;

  let targetUrl: string;
  if (baseUrl.startsWith("http://") || baseUrl.startsWith("https://")) {
    const base = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    const cleanPath = resolvedPath.startsWith("/") ? resolvedPath.slice(1) : resolvedPath;
    targetUrl = new URL(cleanPath, base).toString();
  } else {
    // Relative path for browser execution
    targetUrl = `${baseUrl.replace(/\/$/, "")}${resolvedPath}`;
  }

  return fetch(targetUrl, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
}

export default fetchApi;

