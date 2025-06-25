"use client";

import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AboutPage() {
  return (
    <>
      <Navbar isTransparent={false} />

      <main className="bg-white min-h-screen px-0 py-0">
        {/* Top Image Section */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 mb-0 relative">
          {/* Left: Tablet & Phone */}
          <div className="w-full lg:w-1/2 relative flex justify-start pt-40">
            <Image
              src="/newtablet.png"
              alt="Tablet"
              width={370}
              height={370}
              className="object-contain z-10"
            />
            <Image
              src="/newphone.png"
              alt="Phone"
              width={130}
              height={280}
              className="absolute bottom-0 left-[250px] z-20 object-contain"
            />
          </div>

          {/* Right: Cake Image */}
          <div className="w-full lg:w-[55%] flex justify-end items-start mt-0 pr-0 pt-0">
            <Image
              src="/ck.png"
              alt="Cake"
              width={900}
              height={1000}
              className="object-cover opacity-80 rounded-[173px]"
            />
          </div>
        </div>

        {/* About Us Heading + Paragraph */}
        <div className="max-w-7xl mx-auto px-4 mt-[-30px] mb-12">
          <div className="w-full lg:w-[700px] ml-auto lg:ml-[calc(45%)]">
            <h3 className="text-[36px] font-[Poppins] font-medium leading-tight mb-2">
              <span className="text-[#29A298]">A</span>
              <span className="text-[#090909]">bout us</span>
            </h3>

            <p
              className="text-[20px] font-[Poppins] text-[#707071] leading-[36px]"
              style={{ maxWidth: "640px" }}
            >
              At <span className="font-bold text-[#707071]">CELEVERY</span>,
              we’re on a mission to make celebrations sweeter and selling
              simpler.
            </p>
          </div>
        </div>

        {/* Bringing Together Section */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="flex flex-row items-start">
            {/* Big B */}
            <h1
              className="text-[130px] font-semibold font-[Poppins] leading-[100px] text-transparent bg-clip-text mt-[40px]"
              style={{
                backgroundImage: "linear-gradient(0deg, #29A298, #29A298)",
              }}
            >
              B
            </h1>

            {/* Heading and Paragraph Block */}
            <div className="ml-0 mt-[32px] max-w-[700px]">
              <h1 className="text-[40px] leading-[46px] font-[Poppins] font-semibold flex flex-col max-w-[660px]">
                <span>
                  <span className="text-[#29A298]">ringing Together </span>
                  <span className="text-black">the</span>
                </span>
                <span>
                  <span className="text-black">est in Cake — </span>
                  <span className="text-[#706969] whitespace-nowrap">
                    From Oven to Occasion
                  </span>
                </span>
              </h1>

              <p className="text-[20px] font-[Poppins] font-normal text-[#707071] leading-[36px] ml-[-70] mt-4">
                We believe that every cake tells a story — whether it's baked
                with love by a home chef or chosen with joy by someone looking
                to make a moment special. That’s why we created a platform where
                bakers and buyers come together, seamlessly. From birthdays and
                weddings to late-night cravings, we connect cake lovers with
                passionate bakers who pour their creativity into every layer. We
                make it easy for bakers to grow their business and for customers
                to find the perfect cake, anytime, anywhere.
              </p>
            </div>
          </div>
        </div>

        {/* Feedback Heading */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-[64px] leading-[55px] font-[Poppins] font-semibold text-[#29A298]">
            Feedback
          </h2>
          <p className="text-[48px] leading-[55px] font-[Poppins] font-semibold text-[#6F7B7A]">
            from our Valuable customer
          </p>
        </div>

        {/* Testimonial Boxes */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-[#F6F9F9] rounded-xl px-6 py-8 shadow-md flex flex-col justify-between min-h-[340px]"
              >
                <p className="text-[#707071] text-[19px] font-[Poppins] leading-[34px] mb-4 whitespace-pre-line text-left w-full">
                  It is a long established fact that a{"\n"}
                  reader will be distracted by the{"\n"}
                  readable content of a page when{"\n"}
                  looking at its layout.
                </p>

                <div className="flex flex-col gap-2 mt-auto">
                  <div className="text-[#EF4444] text-[18px]">★★★★★</div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-[82px] h-[82px] rounded-full border-[3px] border-[#F2F2F2] overflow-hidden">
                      <Image
                        src="/dp.png"
                        alt="Customer"
                        width={82}
                        height={82}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[#000] font-semibold text-[16px] leading-tight">
                        Christina Thomas
                      </p>
                      <p className="text-[#707071] text-[14px]">Angamaly</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 mb-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Image
              src="/newbuy.png"
              alt="Buyers"
              width={64}
              height={64}
              className="mb-3"
            />
            <p className="text-[#090909] font-bold text-[22px]">+200</p>
            <p className="text-[#6F7B7A] text-[17px]">Buyers</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/newcor.png"
              alt="Sellers"
              width={64}
              height={64}
              className="mb-3"
            />
            <p className="text-[#090909] font-bold text-[22px]">+156</p>
            <p className="text-[#6F7B7A] text-[17px]">Sellers</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/newcons.png"
              alt="Stores"
              width={64}
              height={64}
              className="mb-3"
            />
            <p className="text-[#090909] font-bold text-[22px]">+450</p>
            <p className="text-[#6F7B7A] text-[17px]">Stores</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/review.png"
              alt="5 Stars"
              width={64}
              height={64}
              className="mb-3"
            />
            <p className="text-[#090909] font-bold text-[22px]">+50</p>
            <p className="text-[#6F7B7A] text-[17px]">5 Star Received</p>
          </div>
        </div>
        {/* Gateway Heading Section */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-[64px] leading-[55px] font-[Poppins] font-semibold">
            <span className="text-black">Your </span>
            <span className="text-[#29A298]">gateway </span>
            <span className="text-black">to</span>
          </h2>
          <p className="text-[48px] leading-[55px] font-[Poppins] font-semibold text-black">
            online
          </p>
        </div>
        {/* Image Section Placeholder */}
        <div
          className="mx-auto mb-20"
          style={{
            width: "1756px",
            height: "280px",
            borderRadius: "50px",
            backgroundColor: "#F1FAF9",
          }}
        >
          {/* Image content will be added here later */}
        </div>
      </main>

      <Footer />
    </>
  );
}
