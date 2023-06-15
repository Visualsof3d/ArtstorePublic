import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

const whatisArtstore = () => {
  return (
    <>
      <div>
        <div className="py-8 md:py-15 w-full relative">
          <Wrapper>
            <div className=" w-full text-white grid grid-cols-1 md:grid-cols-2 ">
              <div className="flex flex-col items-start justify-start gap-0 border-white rounded-lg px-5 py-5 md:px-10 md:py-10 bg-white/[0.09]">
                <p className="text-[22px] text-white md:text-[32px] font-semibold tracking-wider leading-tight mt-2">
                  What's
                </p>
                <p className="text-[32px] text-white md:text-[42px] font-bold tracking-wider leading-tight">
                  Artstore?{" "}
                </p>
                <div className="text-white mt-5">
                  <div className="text-[13px] md:text-[16px]">
                    Artstore is a "one-of-a-kind metal poster" designed to
                    capture your unique passions. Artstore creating 21st century
                    canvas that’s sturdy, magnet mounted, and durable enough to
                    withstand a lifetime of intense staring.
                    <br />
                    The metal poster offered by Artstore is known for its
                    durability and sturdiness. It is designed to withstand the
                    test of time, ensuring that your artwork remains in
                    excellent condition. The magnet mounting system provides a
                    safe and secure way to display the poster on your wall
                    without the need for nails or adhesives. This system
                    significantly reduces the risk of damaging the wall during
                    installation, allowing you to showcase your artwork with
                    ease and peace of mind.
                  </div>
                </div>
                <Link href={}>
                  <div className=" px-4 py-2 items-center justify-center gap-2 bg-zinc-700 rounded-full mt-8 border-black border hover:bg-black hover:border-white font-bold">
                    <p className="text-sm md:text-lg font-semibold text-white/[0.85 hover:text-white/[0.85]">
                      Code by Rajan Kumar (Visualsof3D)
                    </p>
                  </div>
                </Link>
              </div>
              <div className="w-full md:w-460 ml-0 flex flex-wrap items-center justify-center gap-4 gap-y-4 md:gap-y-14 md:gap-14 mt-[50px] md:mt-[0px] overflow-hidden">
                <div className="w-32 h-36 md:h-[250px] md:w-[200px] p-4 bg-white/[0.09] backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg overflow-hidden">
                  <img
                    className="w-40 h-40 md:w-[300px] md:h-[300px] object-contain rounded-3xl trasform overflow-hidden duration-200 hover:scale-125"
                    alt=""
                    src="/TJ8.jpg"
                  />
                  <p className="text-xs lg:text-sm uppercase font-md font-semibold text-white absolute left-0 right-0 text-center bottom-7 trasform overflow-hidden duration-200 md:hover:scale-110 hover:text-white">
                    3D printed
                  </p>
                </div>
                <div className="w-32 h-36 md:h-[250px] md:w-[200px] p-4 bg-white/[0.09] backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg overflow-hidden">
                  <img
                    className="w-40 h-40 md:w-[300px] md:h-[300px] object-contain rounded-3xl trasform overflow-hidden duration-200 hover:scale-125"
                    alt=""
                    src="/onwall.png"
                  />
                </div>
                <div className="w-32 h-36 md:h-[250px] md:w-[200px] p-4 bg-white/[0.09] backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg overflow-hidden">
                  <img
                    className="w-40 h-40 md:w-[300px] md:h-[300px] object-contain rounded-3xl trasform overflow-hidden duration-200 hover:scale-125"
                    alt=""
                    src="/frames.jpg"
                  />
                  <p className="text-xs lg:text-sm uppercase font-md font-semibold text-white absolute left-0 right-0 text-center bottom-7 trasform overflow-hidden duration-200 md:hover:scale-110 hover:text-white">
                    Frames
                  </p>
                </div>
                <div className="w-32 h-36 md:h-[250px] md:w-[200px] p-4 bg-white/[0.09] backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg overflow-hidden">
                  <img
                    className="w-40 h-40 md:w-[300px] md:h-[300px] object-contain rounded-3xl trasform overflow-hidden duration-200 hover:scale-125"
                    alt=""
                    src="/instruction.jpg"
                  />
                  <p className="text-[10px] lg:text-sm uppercase font-sm md:font-md font-semibold text-white absolute left-0 right-0 text-center bottom-6 md:bottom-7 trasform overflow-hidden duration-200 md:hover:scale-110 hover:text-white">
                    instruction
                  </p>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
        <img
          src="/about2.jpg"
          className="aspect-[16/10] md:aspect-auto object-cover"
        />
        <div className="opacity-90">
          <div className="text-white text-center uppercase font-semibold py-5 text-[30px] md:text-[40px] mt-[30px] md:mt-[50px]">
            Mission
          </div>
          <div className="text-white text-center px-5 md:px-[400px] md:mt-1">
            <h4>
              We aspire to help you create a beautiful and functional home that
              reflects your personality and lifestyle, capturing your unique
              style and preferences.
            </h4>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-14 md:px-[120px] text-white 
          items-center ml-auto mr-auto justify-between text-center opacity-95 mt-10 gap-10 mb-8"
          >
            <div>
              <img
                src="mission1.jpg"
                className="w-[90px] h-[90px] ml-[80px] md:ml-[150px]"
              />
              <div className="uppercase mt-1 font-semibold">
                Magnet Wall mount
              </div>
              Easily Wall Mount With Magnets
            </div>
            <div>
              <img
                src="mission2.jpg"
                className="w-[90px] h-[90px] ml-[80px] md:ml-[150px]"
              />
              <div className="uppercase mt-1 font-semibold">CUSTOM ORDERS</div>
              Make Posters of Your Choice
            </div>
            <div>
              <img
                src="mission3.jpg"
                className="w-[90px] h-[90px] ml-[80px] md:ml-[150px]"
              />
              <div className="uppercase mt-1 font-semibold">FREE SHIPPING</div>
              you get FREE SHIPPING above $20
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default whatisArtstore;
