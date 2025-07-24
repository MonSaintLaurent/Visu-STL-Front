import { Button } from "@heroui/button";
import { useAuth0 } from "@auth0/auth0-react";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  // const { loginWithRedirect } = useAuth0();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center" >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Welcome to VisuSTL
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A modern web application for visualizing and analyzing Simulations provided by the ETS Crew.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
