import Link from "next/link";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Distribution", href: "/distribution" },
    { name: "Careers", href: "/careers" },
    { name: "Downloads", href: "/downloads" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    return (
        <nav className="bg-transparent absolute top-10 left-0 w-full z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="bg-[#00aaff] text-white p-2 rounded-lg font-bold text-xl">
                        PC
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-bold text-lg leading-none">
                            PharmaCo
                        </span>
                        <span className="text-gray-400 text-xs">Healthcare Solutions</span>
                    </div>
                </div>
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-[#00aaff] text-sm font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
