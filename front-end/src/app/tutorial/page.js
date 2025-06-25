"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function TutorialPage() {
  return (
    <>
      <Navbar isTransparent={false} />

      <main className="bg-white min-h-screen px-4 py-24 flex flex-col items-center justify-center mt-[-100]">
        <div className="max-w-[1100px] text-center">
          {/* Heading */}
          <h1 className="text-[46px] leading-[1.2] font-[Poppins] font-normal text-[#111111] mb-8">
            What to Know how it works?
          </h1>

          {/* Left-aligned paragraph in centered box */}
          <div className="text-left max-auto text-[#878787] font-[Poppins] font-medium text-[28px] leading-[47px] max-w-[1000px] ">
            <p>
              Order your favorite cake in just a few taps! Browse a variety of
              delicious cakes.
            </p>
            <p>
              Customize them with messages or toppings, and choose your delivery
              time. Pay
            </p>
            <p style={{ whiteSpace: "nowrap", letterSpacing: "0.5px" }}>
              securely online and track your order in real time as it’s freshly
              prepared and hand delivered
            </p>

            <p>
              to your doorstep. It's fast, easy, and made to sweeten your
              moments!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
