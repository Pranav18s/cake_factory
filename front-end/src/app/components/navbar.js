"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ isTransparent = false }) {
  const backgroundClass = isTransparent ? "bg-transparent" : "bg-white";

  return (
    <nav
      className={`w-full flex items-center justify-between px-16 py-4 ${backgroundClass} relative z-10`}
    >
      {/* Logo + CELEVERY Text */}
      <div className="flex items-center gap-0">
        <Image
          src="/cakeimg2.png"
          alt="Logo"
          width={180}
          height={180}
          className="object-contain"
        />
        <span className="text-[40px] font-extrabold text-black leading-[1] font-[Poppins] -ml-2">
          CELEVERY
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-12">
        {[
          { name: "Home", href: "/" },
          { name: "Tutorial", href: "/tutorial" },
          { name: "About Us", href: "/about" },
          { name: "Contact", href: "/contact" },
          { name: "Privacy-Policy", href: "/privacy-policy" }, // ✅ Added this
        ].map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-[24px] font-bold text-black transition duration-300 font-[Poppins] hover:text-[#29A298]"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
