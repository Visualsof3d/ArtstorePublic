import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaArtstation,
  FaDeviantart,
} from "react-icons/fa";
import Script from "next/script";

const contact = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch("/noob.js", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for contacting us, we will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }
  return (
    <>
    <div className="text-red-500 bg-black text-[20px] font-semibold text-center py-[15px] border border-red-600 px[40px]rounded-md transformY-[30px]">Under Working</div>
      <div class="contain w-full">
        <span class="big-circle"></span>
        <div class="form">
          <div class="contact-info">
            <h3 class="title uppercase">Let's Connect</h3>
            <p class="text ">
              I'm Here To Help You!
              <br />
              Don't hold back - If you have any ideas on how we can improve our
              services or if you've encountered any issues while using our
              website, please let me know.
            </p>

            <div class="info">
              <div class="information">
                <img src="/location1.png" class="icon opacity-70" alt="" />
                <p>Gwalior, MP, India</p>
              </div>
              <div class="information">
                <img src="email1.png" class="icon opacity-70" alt="" />
                <p>contactartstore123@gmail.com</p>
              </div>
            </div>

            {/* <div class="social-media mt-[30px]">
            <p>Find me </p>
            <div class="social-icons">
              <a href="#">
                <FaInstagram size={27}/> 
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div> */}
            <Wrapper className="flex justify-between flex-col  gap-[10px] mt-14">
              <hr className="opacity-40 mr-[20px] ml-[20px]" />
              {/* RIGHT START */}
              <div className="flex gap-4 justify-center mt-2">
                <div
                  onClick={() =>
                    window.open("https://instagram.com/visualsof3d", "_blank")
                  }
                  className="w-10 h-10 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white/[0.9] cursor-pointer hover:scale-110 trasform overflow-hidden duration-200"
                >
                  <FaInstagram size={20} />
                </div>
                <div
                  onClick={() =>
                    window.open("https://artstation.com/visualsof3d", "_blank")
                  }
                  className="w-10 h-10 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white/[0.9] cursor-pointer hover:scale-110 trasform overflow-hidden duration-200"
                >
                  <FaArtstation size={20} />
                </div>
                <div
                  onClick={() =>
                    window.open("https://deviantart.com/visualsof3d", "_blank")
                  }
                  className="w-10 h-10 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white/[0.9] cursor-pointer hover:scale-110 trasform overflow-hidden duration-200"
                >
                  <FaDeviantart size={20} />
                </div>
                <div
                  onClick={() =>
                    window.open("https://twitter.com/visualsof3d", "_blank")
                  }
                  className="w-10 h-10 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white/[0.9] cursor-pointer hover:scale-110 trasform overflow-hidden duration-200"
                >
                  <FaTwitter size={20} />
                </div>
              </div>
              {/* RIGHT END */}
            </Wrapper>
          </div>

          <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>

            <form action="contact.js" autocomplete="off">
              <h3 class="title">Contact me</h3>
              <div class="input-container">
                <input type="text" name="name" class="input" />
                <label for="name">Username</label>
                <span>Username</span>
              </div>
              <div class="input-container">
                <input type="email" name="email" class="input" id="email" />
                <label for="email">Email</label>
                <span></span>
              </div>

              <div class="input-container textarea">
                <textarea name="message" class="input"></textarea>
                <label for="message">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" class="btn font-semibold" />
            </form>
          </div>
        </div>
      </div>

      <script src="noob.js"></script>
    </>
  );
};

export default contact;
