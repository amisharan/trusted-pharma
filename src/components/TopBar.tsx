import { MapPin, Phone } from "lucide-react";

export default function TopBar() {
    return (
        <div className="bg-[#0a0a0a] border-b border-gray-800 text-gray-400 text-xs py-2">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-[#00aaff]" />
                    <span>
                        BAYLE'S PHARMACEUTICAL Headquarters 123 Medical Plaza, Mumbai Maharashtra
                        400001,India
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-[#00aaff]" />
                    <span>Sales & Service Support / 999-456-6782</span>
                </div>
            </div>
        </div>
    );
}
