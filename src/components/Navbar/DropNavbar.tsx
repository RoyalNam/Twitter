import Link from 'next/link';
import { useState } from 'react';
import DropDown from '../DropDown';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BiAt, BiMoney, BiBarChart } from 'react-icons/bi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { AiOutlineSetting, AiOutlineQuestionCircle } from 'react-icons/ai';
import { PiNotePencilFill } from 'react-icons/pi';
import { GiFeather } from 'react-icons/gi';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { FaRegKeyboard } from 'react-icons/fa';
const NAV_LIST = [
    { to: '/', name: 'Connect', icon: <BiAt /> },
    { to: '/', name: 'Drafts', icon: <GiFeather /> },
    { to: '/', name: 'Monetization', icon: <BiMoney /> },
];
const NAV_DESC = [
    {
        title: 'Creator Studio',
        children: [{ to: '/', name: 'Analytics', icon: <BiBarChart /> }],
    },
    {
        title: 'Professional',
        children: [
            { to: '/', name: 'Twitter for Professional', icon: <HiOutlineRocketLaunch /> },
            { to: '/', name: 'Twitter Ads', icon: <BsArrowUpRightSquare /> },
        ],
    },
    {
        title: 'Settings and Support',
        children: [
            { to: '/', name: 'Settings and privacy', icon: <AiOutlineSetting /> },
            { to: '/', name: 'Help Center', icon: <AiOutlineQuestionCircle /> },
            { to: '/', name: 'Display', icon: <PiNotePencilFill /> },
            { to: '/', name: 'Keyboard shortcuts', icon: <FaRegKeyboard /> },
        ],
    },
];

const DropNavbar = () => {
    const [open, setOpen] = useState([]);
    const handleToggleDropdown = (index: number) => {
        const newVisibility: any = [...open];
        newVisibility[index] = !newVisibility[index];
        setOpen(newVisibility);
    };
    return (
        <DropDown>
            <div className="flex flex-col min-w-[320px]">
                {NAV_LIST.map((nav, index) => (
                    <Link href={nav.to} key={index} className="hover:bg-[#f7f9f9]">
                        <div className={`inline-flex items-center font-bold p-3 rounded-full`}>
                            <span className="text-2xl">{nav.icon}</span>
                            <span className="mr-5 ml-4 text-lg">{nav.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
            <div>
                {NAV_DESC.map((nav, index) => (
                    <div key={index}>
                        <div
                            className="flex cursor-pointer justify-between items-center font-semibold p-3 hover:bg-[#f7f7f7]"
                            onClick={() => handleToggleDropdown(index)}
                        >
                            <h3>{nav.title}</h3>
                            <span className={`text-lg ${open[index] && 'text-primary'}`}>
                                {open[index] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </span>
                        </div>

                        {open[index] && (
                            <div className="">
                                {nav.children.map((navChildren, i) => (
                                    <Link
                                        href={navChildren.to}
                                        key={i}
                                        className="flex items-center p-3 hover:bg-[#f7f7f7]"
                                    >
                                        <span className="mr-3">{navChildren.icon}</span>
                                        <span>{navChildren.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </DropDown>
    );
};

export default DropNavbar;
