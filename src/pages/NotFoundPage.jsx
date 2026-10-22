import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="py-20 text-center">
    <h1 className="text-2xl font-bold">Page not found</h1>
    <Link to="/" className="mt-4 inline-block text-indigo-600 hover:underline">
      Go to the home page
    </Link>
  </div>
);

export default NotFoundPage;
