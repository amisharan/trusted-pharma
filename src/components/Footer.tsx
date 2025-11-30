import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#111827] text-gray-300 pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
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
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Trusted pharmaceutical solutions for better health. Rigorously tested formulations — trusted worldwide.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#00aaff] hover:text-white transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#00aaff] hover:text-white transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#00aaff] hover:text-white transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#00aaff] hover:text-white transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Information Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Information</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-[#00aaff] transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-[#00aaff] transition-colors">Products</Link>
                            </li>
                            <li>
                                <Link href="/research" className="hover:text-[#00aaff] transition-colors">Research & Development</Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-[#00aaff] transition-colors">Careers</Link>
                            </li>
                            <li>
                                <Link href="/news" className="hover:text-[#00aaff] transition-colors">News & Updates</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/downloads" className="hover:text-[#00aaff] transition-colors">Downloads</Link>
                            </li>
                            <li>
                                <Link href="/distribution" className="hover:text-[#00aaff] transition-colors">Distribution Network</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#00aaff] transition-colors">Quality Assurance</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#00aaff] transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#00aaff] transition-colors">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6">About / Contacts</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3 items-start">
                                <MapPin className="w-5 h-5 text-[#00aaff] flex-shrink-0" />
                                <span>
                                    PharmaCo Headquarters<br />
                                    123 Medical Plaza, Mumbai<br />
                                    Maharashtra 400001, India
                                </span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="w-5 h-5 text-[#00aaff] flex-shrink-0" />
                                <span>+91 22 12345678</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="w-5 h-5 text-[#00aaff] flex-shrink-0" />
                                <span>contact@pharmaco.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>Copyright 2025 PharmaCo. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50 grayscale" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-50 grayscale" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-4 opacity-50 grayscale" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
