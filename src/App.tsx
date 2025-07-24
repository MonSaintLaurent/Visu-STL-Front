import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import LoadingPage from "./pages/loading";
import ErrorPage from "./pages/error";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";

function App() {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
