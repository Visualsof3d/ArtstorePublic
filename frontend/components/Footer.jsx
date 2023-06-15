import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaArtstation, FaDeviantart } from "react-icons/fa";
import Wrapper from "./Wrapper";
import InfiniteScroll from 'react-infinite-scroll-component';

const Footer = () => {
    return (
        <footer className="bg-black text-white md:pt-10 pb-3">
            <Wrapper className="flex justify-between flex-col">
                <hr className="opacity-40 mr-[10px] ml-[10px]"/>
                {/* RIGHT START */}
                <div className="flex gap-4 justify-center mt-12">
                    <div onClick = {() => window.open('https://instagram.com/visualsof3d', '_blank')} className="w-10 h-10 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white/[0.9] cursor-pointer hover:scale-110 trasform overflow-hidden duration-200">
                        <FaInstagram size={20} />
                    </div>
                    <div onClick = {() => window.open('https://artstation.com/visualsof3d', '_blank')} className="w-10 h-10 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white/[0.9] cursor-pointer hover:scale-110 trasform overflow-hidden duration-200">
                        <FaArtstation size={20} />
                    </div>
                    <div  onClick = {() => window.open('https://deviantart.com/visualsof3d', '_blank')}className="w-10 h-10 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white/[0.9] cursor-pointer hover:scale-110 trasform overflow-hidden duration-200">
                        <FaDeviantart size={20} />
                    </div>
                    <div onClick = {() => window.open('https://twitter.com/visualsof3d', '_blank')} className="w-10 h-10 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white/[0.9] cursor-pointer hover:scale-110 trasform overflow-hidden duration-200">
                        <FaTwitter size={20} />
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-8 flex-col  gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.7] hover:text-white text-center">
                📍 Located in MP, INDIA
                </div>
                {/* LEFT END */}
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.7] hover:text-white text-center">
                   © 2023 Visualsof3D, All Rights Reserved
                </div>
                {/* LEFT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;