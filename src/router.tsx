import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
  return createTanStackRouter({
    routeTree,
    defaultErrorComponent: ({ error }) => (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
      </div>
    ),
  });
}

export const getRouter = createRouter;

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
