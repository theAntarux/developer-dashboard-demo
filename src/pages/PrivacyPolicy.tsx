import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto max-w-4xl py-12 px-4">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-[--text-secondary] mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-[--text-secondary]">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <p className="text-[--text-secondary] mb-4">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                    architecto beatae vitae dicta sunt explicabo.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-[--text-secondary]">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
            </section>

            <p className="text-sm text-[--text-secondary] mt-12">
                Last updated: January 22, 2026
            </p>

            <Link to="/" className="hover:text-[--accent-blue] transition-colors">
                Go Back Home
            </Link>
        </div>
    );
}
