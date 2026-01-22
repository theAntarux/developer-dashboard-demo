import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-8xl md:text-9xl font-bold text-[--accent-blue] mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Page Not Found</h2>
            <p className="text-[--text-secondary] text-lg md:text-xl mb-8 max-w-xl">
                The page you're looking for seems to have wandered off into Narnia... 
            </p>
            <Link to="/" className="hover:text-[--accent-blue] transition-colors">
                Go Back Home
            </Link>
    </div>
  );
}
