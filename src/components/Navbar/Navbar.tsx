'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import images from '@/assets/imgs';
import DropNavbar from './DropNavbar';
import { CgMoreO } from 'react-icons/cg';
import { BiHomeCircle, BiSearch, BiSolidHomeCircle } from 'react-icons/bi';
import { HiMiniBell, HiOutlineBell } from 'react-icons/hi2';
import { AiFillMessage, AiOutlineMessage } from 'react-icons/ai';
import { RiFileListLine, RiFileListFill, RiBookmarkLine, RiBookmarkFill } from 'react-icons/ri';
import { HiOutlineUser, HiUser, HiOutlineUsers, HiUsers } from 'react-icons/hi2';
import { PiSealCheck, PiSealCheckFill } from 'react-icons/pi';

const NAV_LINK = [
    {
        to: '/',
        name: 'Home',
        icon: <BiHomeCircle />,
        iconAct: <BiSolidHomeCircle />,
    },
    {
        to: '/explore',
        name: 'Explore',
        icon: <BiSearch />,
        iconAct: <BiSearch />,
    },
    {
        to: '/notifications',
        name: 'Notifications',
        icon: <HiOutlineBell />,
        iconAct: <HiMiniBell />,
    },
    {
        to: '/messages',
        name: 'Messages',
        icon: <AiOutlineMessage />,
        iconAct: <AiFillMessage />,
    },
    {
        to: '/slug/lists',
        name: 'List',
        icon: <RiFileListLine />,
        iconAct: <RiFileListFill />,
    },
    {
        to: '/bookmarks',
        name: 'Bookmarks',
        icon: <RiBookmarkLine />,
        iconAct: <RiBookmarkFill />,
    },
    {
        to: '/slug/communities',
        name: 'Communities',
        icon: <HiOutlineUsers />,
        iconAct: <HiUsers />,
    },
    {
        to: '/verified',
        name: 'Verified',
        icon: <PiSealCheck />,
        iconAct: <PiSealCheckFill />,
    },
    {
        to: '/slug',
        name: 'Profile',
        icon: <HiOutlineUser />,
        iconAct: <HiUser />,
    },
];

function Navbar() {
    const pathName = usePathname();
    const [isShow, setShow] = useState(false);
    const handleShow = () => {
        return setShow(!isShow);
    };
    return (
        <nav className="sticky top-0 h-[100vh] overflow-visible flex flex-col xl:w-[275px] min-w-[68px] px-2">
            <Link href="/" className="max-w-[52px] max-h-[52px] mt-1 rounded-full hover:bg-[#e7e7e8]">
                <Image className="w-full p-3" src={images.logo} alt="demo" />
            </Link>
            {NAV_LINK.map((item, ind) => {
                const isActive = item.to == pathName;
                const [isShow, setShow] = useState(false);
                const handleShow = () => {
                    return setShow(!isShow);
                };
                return (
                    <Link href={item.to} key={ind}>
                        <div
                            className={`${
                                isActive && 'font-bold'
                            } inline-flex items-center p-3 rounded-full hover:bg-[#e7e7e8]`}
                        >
                            <span className="text-3xl">{isActive ? item.iconAct : item.icon}</span>
                            <span className="hidden xl:block mr-5 ml-4 text-xl">{item.name}</span>
                        </div>
                    </Link>
                );
            })}
            <Tippy
                visible={isShow}
                offset={[20, -45]}
                onClickOutside={() => setShow(false)}
                interactive={true}
                render={(attrs) => (
                    <div tabIndex={-1} {...attrs}>
                        <DropNavbar />
                    </div>
                )}
            >
                <button className="group text-left" onClick={handleShow}>
                    <div className={`inline-flex items-center p-3 rounded-full group-hover:bg-[#e7e7e8]`}>
                        <span className="text-3xl">{<CgMoreO />}</span>
                        <span className="hidden xl:block mr-5 ml-4">More</span>
                    </div>
                </button>
            </Tippy>
        </nav>
    );
}
export default Navbar;
