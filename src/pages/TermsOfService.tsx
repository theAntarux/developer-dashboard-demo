import { Link } from "react-router-dom";

export default function TermsOfService() {
    return (
        <div className="container mx-auto max-w-4xl py-12 px-4">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-[--text-secondary] mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                    Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">2. Use of the Service</h2>
                <p className="text-[--text-secondary] mb-4">
                    Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
                    Praesent mauris. Fusce nec tellus sed augue semper porta.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">3. User Conduct</h2>
                <p className="text-[--text-secondary]">
                    Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu 
                    ad litora torquent per conubia nostra, per inceptos himenaeos.
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
