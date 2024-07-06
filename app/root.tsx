import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import { Image } from "@unpic/react";
import errorImg from "~/lib/assets/error.webp";
import "./tailwind.css";
import { CornerDownRight } from "lucide-react";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import { MetaFunction } from "@remix-run/node";

export const config = { runtime: "edge" };
export const meta: MetaFunction = () => {
  return [
    { title: "Error | Vinařství Plchut" }
  ];
}

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const ErrorBoundary = () => {
  const error = useRouteError();
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 h-screen -mt-10">
      <Image
        src={errorImg}
        alt="Error"
        className="pointer-events-none"
        height={320}
        width={240}
      />
      <div className="flex flex-col gap-4 items-center lg:items-start">
        <p className="text-5xl lg:text-7xl font-bold text-center lg:text-start">
          {isRouteErrorResponse(error) && error.status === 404 ? "Stránka nenalezena" : error instanceof Error && error.message}
        </p>
        <Link
          className={cn(
            buttonVariants({ variant: "outline" }),
            "text-lg font-semibold",
          )}
          to="/"
          reloadDocument
        >
          <CornerDownRight className="size-6 mr-2" />
          Vrátit se na domovskou stránku
        </Link>
      </div>
    </main>
  );
}

const App = () => {
  return <Outlet />;
}

export default App;
