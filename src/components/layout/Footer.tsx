import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="py-8 bg-[--bg-light] border-t border-custom text-center text-[--text-secondary] text-sm shadow-custom">
            <div className="container mx-auto">
                <p>Made with blood, sweat & Luau tears</p>
                <p className="mt-2">
                    Don't @ me if your dot is in Narnia •{" "}
                <Link to="/terms-of-service" className="hover:text-[--accent-blue] transition-colors">
                    Terms of Service
                </Link>{" "}
                •{" "}
                <Link to="/privacy-policy" className="hover:text-[--accent-blue] transition-colors">
                    Privacy Policy
                </Link>
                </p>
            </div>
        </footer>
    );
}
