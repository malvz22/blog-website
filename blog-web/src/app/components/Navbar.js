/* eslint-disable react/no-unescaped-entities */
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    return (
        <>
            <div className='max-w-full h-14 bg-white m-auto items-center justify-between flex flex-row px-[140px]'>
                <h1 className='font-bold text-xl cursor-pointer'>Malv's Blog</h1>
                <div></div>
                <div className='flex flex-row text-black gap-7 items-center'>
                    <p className="cursor-pointer">Home</p>
                    <p className="cursor-pointer">Articles</p>
                    <FaInstagram className="text-[20px] cursor-pointer" />
                    <FaLinkedin className="text-[20px] cursor-pointer" />
                </div>
            </div>
        </>
    );
}