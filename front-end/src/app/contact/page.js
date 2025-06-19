"use client";

import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ContactPage() {
  return (
    <>
      <Navbar isTransparent={false} />

      <main className="bg-white min-h-screen px-8 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Section - Contact Details + Form + Location */}
          <div className="w-full md:w-[60%]">
            {/* Mini Heading */}
            <p className="text-[20px] font-[Poppins] font-semibold text-[#090909] mb-8">
              Contact Us
            </p>

            {/* Phone Number */}
            <p className="text-[16px] font-[Inter] text-[#707071] mb-1 font-medium">
              +91 8075107480
            </p>

            {/* Email */}
            <p className="text-[16px] font-[Inter] text-[#707071] mb-6 font-medium">
              support@bigberry.com
            </p>

            {/* Address */}
            <p className="text-[16px] font-[Inter] text-[#707071] leading-[30px] font-medium max-w-md mb-6">
              7/130, PUTHUSSERY COMPLEX, OLD MARKET ROAD,
              <br />
              Angamally, Angamaly Police Station, Paravur,
              <br />
              Ernakulam - 683572,
              <br />
              Kerala, India
            </p>

            {/* Mini Heading - Request A CallBack Service */}
            <p className="text-[20px] font-[Poppins] font-normal text-[#090909] mb-4">
              Request A CallBack Service
            </p>

            {/* Email Input Box */}
            <input
              type="email"
              placeholder="Enter your Email ID"
              className="w-[322px] h-[50px] px-4 mb-6 text-[16px] border-[3px] border-[#00E1FF] rounded-[10px] outline-none placeholder:text-gray-500 bg-white"
            />

            {/* TextArea + Button Wrapper */}
            <div className="w-[1250px]">
              <textarea
                placeholder="Enter the Matter that you want to discuss with the team. We will get back to you."
                className="w-full h-[150px] px-4 py-3 text-[20px] font-[Poppins] border-[3px] border-[#00E1FF] rounded-[10px] placeholder:text-[#908E8E] placeholder:font-[Poppins] resize-none outline-none"
              />

              {/* Send Button */}
              <div className="flex justify-end mt-4">
                <button className="w-[130px] h-[50px] bg-[#29A298] text-white text-[24px] font-[Inter] font-bold rounded-[12px] hover:bg-[#218b83] transition duration-300">
                  Send
                </button>
              </div>
            </div>

            {/* Location Heading */}
            <p className="text-[32px] font-[Poppins] font-semibold text-[#090909] mt-12 mb-4">
              Location
            </p>

            {/* Google Map Image */}
            <Image
              src="/map.png"
              alt="Google Map Location"
              width={400}
              height={200}
              className="rounded-[20px] border border-[#29A298]"
            />
          </div>

          {/* Right Section - Images */}
          <div className="w-full md:w-[40%] flex flex-row justify-end items-end gap-4 pr-10 translate-y-10">
            <Image
              src="/bigburry.png"
              alt="BigBurry Logo 1"
              width={200}
              height={250}
              className="object-contain rounded-[25px] shadow"
            />
            <Image
              src="/bigburry.png"
              alt="BigBurry Logo 2"
              width={200}
              height={250}
              className="object-contain rounded-[25px] shadow"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
