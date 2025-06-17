"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1E2432] text-white text-sm font-[Poppins]">
      {/* Top Social Row */}
      <div className="flex justify-end items-center px-4 md:px-10 py-3 gap-4 bg-[#29A298] text-[14px]">
        <a href="#" className="hover:underline">
          LinkedIn
        </a>
        <a href="#" className="hover:underline">
          Instagram
        </a>
        <a href="#" className="hover:underline">
          Facebook
        </a>
        <a href="#" className="hover:underline">
          Twitter
        </a>
      </div>

      {/* Main Footer */}
      <div className="px-4 md:px-10 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company */}
          <div>
            <h4 className="text-[16px] font-semibold mb-2">Company Details</h4>
            <p className="text-[#A09696] font-[Cabin] leading-[20px] text-[13px]">
              Our mission is to build scalable, user-centric software products
              that solve today’s needs and prepare for tomorrow’s opportunities.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[16px] font-semibold mb-2">Products</h4>
            <ul className="text-[#AEAEAE] font-[Cabin] space-y-1 text-[13px]">
              <li>GATHENT</li>
              <li>COGNICAMPUS</li>
              <li>QUICKVOTE</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <h4 className="text-[16px] font-semibold mb-2">Contact Us</h4>
            <p className="text-[#AEAEAE] font-[Cabin] text-[13px] leading-[20px]">
              123456789
              <br />
              support@bigberry.com
              <br />
              7/130, PUTHUSSERY COMPLEX,
              <br />
              Angamally, Ernakulam - 683572
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-center border-t border-[#444] mt-4 pt-3 text-[12px] text-[#AEAEAE]">
          <span>&copy; 2025 BigBerry</span>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
