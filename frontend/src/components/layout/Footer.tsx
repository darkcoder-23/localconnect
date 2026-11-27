
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-12 bg-[#102746] text-white">
            <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">

                {/* Brand */}
                <div>
                    <Link href="/" className="text-2xl font-extrabold">
                        Local<span className="text-teal-400">Connect</span>
                    </Link>

                    <p className="mt-4 max-w-xs text-sm leading-6 text-blue-100/70">
                        Connecting people with local home service professionals and
                        property brokers.
                    </p>

                    <p className="mt-4 flex items-center gap-2 text-xs text-blue-100/70">
                        <MapPin size={14} />
                        Your neighbourhood, connected.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold">Quick Links</h3>

                    <ul className="mt-4 space-y-3 text-sm text-blue-100/70">
                        <li>
                            <Link href="/" className="hover:text-white">Home</Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-white">
                                Home Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/find-brokers" className="hover:text-white">
                                Find Brokers
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-bold">Support</h3>

                    {/* These pages do not exist yet, so they are not links. */}
                    <ul className="mt-4 space-y-3 text-sm text-blue-100/70">
                        {["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"].map(
                            (label) => (
                                <li key={label}>
                                    {label} <span className="text-xs">(coming soon)</span>
                                </li>
                            ),
                        )}
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="font-bold">Follow LocalConnect</h3>

                    <p className="mt-4 text-sm text-blue-100/70">
                        Follow us on social media. Our official social links will be
                        available soon.
                    </p>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-blue-100/60">
                © 2026 LocalConnect. All rights reserved.
            </div>
        </footer>
    );
}
