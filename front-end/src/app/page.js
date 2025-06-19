"use client";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex justify-center bg-white overflow-x-hidden">
      <div
        className="relative border border-white overflow-hidden"
        style={{
          width: "1749px",
          minHeight: "2400px",
        }}
      >
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full"
          style={{
            height: "1550px",
            backgroundImage: "url('/bg_image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.7,
            zIndex: 0,
          }}
        />

        {/* Gradient */}
        <div
          style={{
            position: "absolute",
            width: "2002px",
            height: "1000px",
            top: "670px",
            left: "-186px",
            borderRadius: "42px",
            background:
              "linear-gradient(177.41deg, #698AFF 5.87%, #FFFFFF 72.44%)",
            zIndex: 5,
            pointerEvents: "none",
          }}
        />

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar isTransparent={true} />

          {/* Cake Image */}
          <div className="relative w-full" style={{ height: "360px" }}>
            <Image
              src="/cake.png"
              alt="Cake"
              width={260}
              height={260}
              style={{
                position: "absolute",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%) rotate(-9.88deg)",
              }}
            />
          </div>

          {/* Heading */}
          <div className="w-full flex justify-center mt-0 relative z-20">
            <h1 className="text-center text-black font-[Poppins] font-bold text-[48px] leading-[1.2] max-w-4xl">
              Whether you bake or crave, <br />
              we deliver happiness
            </h1>
          </div>

          {/* Paragraph */}
          <div className="w-full flex justify-center mt-4 relative z-20">
            <p
              className="text-center"
              style={{
                width: "867px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "32px",
                color: "#000000BD",
              }}
            >
              Whether you are a passionate home baker, a professional,
              <br />
              cake shop, or someone simply craving a delicious slice — our
              platform connects you with the best in the world of cakes.
            </p>
          </div>

          {/* Google Play Logo */}
          <div className="w-full flex justify-center mt-6 relative z-20">
            <Image
              src="/google_logo.png"
              alt="Google Play"
              width={180}
              height={57}
              style={{ objectFit: "cover", borderRadius: "15px" }}
            />
          </div>

          {/* Devices */}
          <div className="w-full flex justify-center relative z-20 py-0 mt-0">
            <div style={{ position: "relative" }}>
              <Image
                src="/tablet.png"
                alt="Tablet"
                width={400}
                height={600}
                style={{ objectFit: "cover", borderRadius: "20px" }}
              />
              <Image
                src="/iphone.png"
                alt="iPhone"
                width={150}
                height={200}
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "-80px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>

          {/* Who Benefits Heading */}
          <div className="relative z-20 mt-12 ml-[104px]">
            <h2
              className="font-[Poppins] font-semibold text-[48px] leading-[54px]"
              style={{ color: "#29A298" }}
            >
              Who Benefits from{" "}
              <span style={{ color: "#838383" }}>Our Platform</span>
            </h2>
            <p
              className="mt-6 font-[Poppins] font-normal text-[26px] leading-[38px] max-w-[90%] md:max-w-[1439px]"
              style={{ color: "#000000BD" }}
            >
              Whether you're a passionate home baker, a professional cake shop,
              or someone simply craving a
              <br />
              delicious slice — our platform connects you with the best in the
              world of cakes.
              <br />
              We make it easy for bakers to showcase and sell their creations,
              and for buyers to explore, order,
              <br />
              and enjoy freshly made cakes.
            </p>
          </div>

          {/* Buyer and Seller Sections */}
          <div className="relative z-20 mt-24 flex flex-col gap-24 px-[104px]">
            {/* For Buyers */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex flex-col gap-4 max-w-[740px] text-left">
                <Image
                  src="/seller.png"
                  alt="Seller Logo"
                  width={80}
                  height={80}
                  style={{ borderRadius: "10px" }}
                />
                <h3 className="font-[Poppins] font-semibold text-[28px] text-black">
                  For Buyers
                </h3>
                <ul className="list-disc ml-6 text-[20px] leading-[32px] font-[Poppins] text-[#000000BD]">
                  <li>
                    Order with ease – birthdays, anniversaries, or cravings
                  </li>
                  <li>Discover cakes from trusted local bakers</li>
                  <li>Track your order in real time</li>
                </ul>
              </div>
              <div className="w-[320px] h-[320px] bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-gray-500">[Image]</span>
              </div>
            </div>

            {/* For Sellers */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
              <div className="flex flex-col gap-4 max-w-[740px] text-right">
                <Image
                  src="/courier.png"
                  alt="Courier Logo"
                  width={80}
                  height={80}
                  style={{ borderRadius: "10px", marginLeft: "auto" }}
                />
                <h3 className="font-[Poppins] font-semibold text-[28px] text-black">
                  For Sellers
                </h3>
                <ul className="list-disc mr-6 text-[20px] leading-[32px] font-[Poppins] text-[#000000BD] list-inside">
                  <li className="text-left">
                    Set up your digital cake store in minutes
                  </li>
                  <li className="text-left">
                    List and manage your cake offerings
                  </li>
                  <li className="text-left">
                    Expand your reach beyond the local neighborhood
                  </li>
                </ul>
              </div>
              <div className="w-[320px] h-[320px] bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-gray-500">[Image]</span>
              </div>
            </div>

            {/* Additional For Buyers */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex flex-col gap-4 max-w-[740px] text-left">
                <Image
                  src="/seller.png"
                  alt="Seller Logo"
                  width={80}
                  height={80}
                  style={{ borderRadius: "10px" }}
                />
                <h3 className="font-[Poppins] font-semibold text-[28px] text-black">
                  For Buyers
                </h3>
                <ul className="list-disc ml-6 text-[20px] leading-[32px] font-[Poppins] text-[#000000BD]">
                  <li>
                    Order with ease – birthdays, anniversaries, or cravings
                  </li>
                  <li>Discover cakes from trusted local bakers</li>
                  <li>Track your order in real time</li>
                </ul>
              </div>
              <div className="w-[320px] h-[320px] bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-gray-500">[Image]</span>
              </div>
            </div>
          </div>

          {/* This is how heading */}
          <div className="relative z-20 mt-12 ml-[104px]">
            <h2
              className="font-[Poppins] font-semibold text-[48px] leading-[54px]"
              style={{ color: "#29A298" }}
            >
              This is How You get the Cake <br />
              <span style={{ color: "#838383" }}>From Us?</span>
            </h2>
            <p
              className="mt-6 font-[Poppins] font-normal text-[26px] leading-[38px] max-w-[90%] md:max-w-[1439px]"
              style={{ color: "#000000BD" }}
            >
              Whether you're a passionate home baker, a professional cake shop,
              or someone simply craving a
              <br />
              delicious slice — our platform connects you with the best in the
              world of cakes.
              <br />
              We make it easy for bakers to showcase and sell their creations,
              and for buyers to explore, order,
              <br />
              and enjoy freshly made cakes.
            </p>
          </div>

          {/*Image Section */}
          <div className="w-full h-[1100px] bg-yellow-200 flex items-center justify-center mt-32">
            <p className="text-xl font-semibold text-gray-700">image space</p>
          </div>

          {/* Trending heading */}
          <div className="relative z-20 mt-12 ml-[104px]">
            <h2
              className="font-[Poppins] font-semibold text-[48px] leading-[54px]"
              style={{ color: "#29A298" }}
            >
              Trending or Timeless, <br />
              <span style={{ color: "#838383" }}>We've Got Your Cake</span>
            </h2>
            <p
              className="mt-6 font-[Poppins] font-normal text-[26px] leading-[38px] max-w-[90%] md:max-w-[1439px]"
              style={{ color: "#000000BD" }}
            >
              We’re here to help you choose—from trending favorites to birthday
              must-haves. Explore a wide
              <br />
              range of categories and discover cakes crafted to delight every
              taste and occasion. Whether it’s a
              <br />
              celebration or a sweet craving, we’ve got your perfect match.
              <br />
            </p>
          </div>

          {/*Image Section */}
          <div className="w-full h-[700px] bg-yellow-200 flex items-center justify-center mt-32">
            <p className="text-xl font-semibold text-gray-700">image space</p>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
