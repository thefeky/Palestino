import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="w-[90%] xl:w-[80%] mx-auto py-20 text-center">
      <title>404 Not Found | Palestino</title>
      <meta
        name="description"
        content="The page you’re looking for doesn’t exist."
      />
      <link rel="canonical" href="https://palestino.com/404" aria-label="404" />

      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-700 mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 font-medium"
        aria-label="home"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
