"use client";

import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function TutorialPage() {
  return (
    <>
      <Navbar isTransparent={false} />

      <main className="bg-white min-h-screen px-4 py-24 flex flex-col items-center justify-center">
        {/* Intro Section */}
        <div className="max-w-[1100px] text-center">
          <h1 className="text-[46px] leading-[1.2] font-[Poppins] font-normal text-[#111111] mb-8">
            What to Know how it works?
          </h1>

          <div className="text-left text-[#878787] font-[Poppins] font-medium text-[28px] leading-[47px] max-w-[1000px]">
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

        {/* Tutorial Steps Aligned with Paragraph */}
        <div className="w-full flex justify-center mt-20">
          <div className="max-w-[1000px] text-left space-y-20">
            {/* Step 1 */}
            <div>
              <h2 className="text-[48px] font-[Poppins] font-normal text-[#111111] mb-4">
                1. How to add Cake into a store?
              </h2>
              <p className="text-[32px] font-[Poppins] font-medium text-[#878787] leading-[51.78px] mb-6">
                Learn how to add a cake to your store by simply going to the
                dashboard, clicking “Add Cake,” entering details like name,
                price, and image, then saving it to make it live for customers.
              </p>
              <div className="relative w-full max-w-[1000px] h-auto rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/yt.png.jpg"
                  alt="Step 1"
                  width={1000}
                  height={520}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px]">
                  <Image
                    src="/pause.png"
                    alt="Play"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <h2 className="text-[48px] font-[Poppins] font-normal text-[#111111] mb-4">
                2. How to add new Cake details?
              </h2>
              <p className="text-[32px] font-[Poppins] font-medium text-[#878787] leading-[51.78px] mb-6">
                You’ll learn how to add new cake details by entering the name,
                description, price, and image in the store dashboard, then
                saving it to list the cake for customers.
              </p>
              <div className="relative w-full max-w-[1000px] h-auto rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/yt2.png"
                  alt="Step 2"
                  width={1000}
                  height={520}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px]">
                  <Image
                    src="/pause.png"
                    alt="Play"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <h2 className="text-[48px] font-[Poppins] font-normal text-[#111111] mb-4">
                3. How to Cancel an Order?
              </h2>
              <p className="text-[32px] font-[Poppins] font-medium text-[#878787] leading-[51.78px] mb-6">
                Learn how to quickly cancel cake orders in your store by
                entering the name, price, description, uploading an image, and
                saving it to remove the cake instantly.
              </p>
              <div className="relative w-full max-w-[1000px] h-auto rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/yt3.jpg"
                  alt="Step 3"
                  width={1000}
                  height={520}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px]">
                  <Image
                    src="/pause.png"
                    alt="Play"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
