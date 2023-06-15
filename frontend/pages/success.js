import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";


const Success = () => {

    return (
        <div className="min-h-[450px] flex items-center text-white">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-white mx-auto flex flex-col">
                    <div className="text-2xl font-bold">
                        Thanks for shopping with us!
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Your order has been placed successfully.
                    </div>
                    <div className="text-base mt-5">
                        For any product related query, drop an email to
                    </div>


                    {/* <Link href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=new" onclick="CopyToClipboard('sample');return false;" className="underline">
                        contactartstore123@gmail.com
                    </Link> */}
                    <div className="underline">
                        contactartstore123@gmail.com
                    </div>
                    
                    <Link href="/" className="font-bold mt-10 py-3 bg-green-600 text-black rounded text-center hover:text-white">
                        Continue Shopping
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;