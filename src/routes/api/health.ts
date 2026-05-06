import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const healthCheck = createServerFn({ method: "GET" }).handler(async () => {
  return { status: "ok", timestamp: new Date().toISOString() };
});

export const Route = createFileRoute("/api/health")({
  loader: () => healthCheck(),
  component: () => {
    const data = Route.useLoaderData();
    return <pre>{JSON.stringify(data)}</pre>;
  },
});
