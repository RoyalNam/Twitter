'use client';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { IoEarthOutline } from 'react-icons/io5';

import Overlay from './Over';
import Icon from './Icon';
import Avatar from './Avatar';
import Tippy from '@tippyjs/react/headless';
import DropDown from './DropDown';
import { FaUserLock } from 'react-icons/fa';
import { GoFileMedia } from 'react-icons/go';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function CreateTweet() {
    const textareaRef = useRef(null);
    const [audience, setAudience] = useState('Every one');
    const [show, setShow] = useState(false);
    useEffect(() => {}, [audience]);
    const handleTextareaResize = () => {
        const textarea = textareaRef.current as HTMLTextAreaElement | null;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };
    return (
        <Overlay>
            <div className="ml-1 mt-1">
                <Icon icon={<AiOutlineClose />} title="Close" />
            </div>
            <div className="px-3 pt-3">
                <div className="flex">
                    <Avatar />
                    <div className="flex-1 ml-4">
                        <Tippy
                            onClickOutside={() => setShow(false)}
                            interactive
                            visible={show}
                            placement="bottom"
                            render={() => (
                                <DropDown>
                                    <div className="font-bold py-3 min-w-[260px] min-h-[30px]">
                                        <h4 className="text-lg px-4 my-1">Choose audience</h4>
                                        <div className="flex flex-col">
                                            <button
                                                className="px-4 py-3 flex items-center hover:bg-black/5"
                                                onClick={() => setAudience('Every one')}
                                            >
                                                <div className="flex-1 flex items-center">
                                                    <span className="text-xl text-white mr-3 bg-[#1d9bf0] p-2 rounded-full">
                                                        <IoEarthOutline />
                                                    </span>
                                                    <span className="text-sm">Every one</span>
                                                </div>
                                                {audience === 'Every one' && (
                                                    <span className="mr-1 text-[#1d9bf0]">
                                                        <AiOutlineCheck />
                                                    </span>
                                                )}
                                            </button>
                                            <button
                                                className="px-4 py-3 flex items-center hover:bg-black/5"
                                                onClick={() => setAudience('Only me')}
                                            >
                                                <div className="flex-1 flex items-center">
                                                    <span className="text-xl text-white mr-3 bg-green-400 p-2 rounded-full">
                                                        <FaUserLock />
                                                    </span>
                                                    <span className="text-sm">Only me</span>
                                                </div>
                                                {audience === 'Only me' && (
                                                    <span className="mr-1 text-[#1d9bf0]">
                                                        <AiOutlineCheck />
                                                    </span>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </DropDown>
                            )}
                        >
                            <button
                                onClick={() => setShow(!show)}
                                className="flex items-center border font-bold text-sm text-[#1d9bf0] px-3 rounded-full border-inherit"
                            >
                                <span>{audience}</span>
                                <span className="ml-1 text-base">
                                    <IoIosArrowDown />
                                </span>
                            </button>
                        </Tippy>
                        <div className="text-xl mt-4 font-light">
                            <textarea
                                ref={textareaRef}
                                placeholder="What is happening!"
                                className="rounded-none w-full outline-none max-h-[500px]"
                                onInput={handleTextareaResize}
                            />
                        </div>
                    </div>
                </div>
                <div className=" border-t">
                    <div className="flex justify-between py-2 mx-2 text-blue items-center">
                        <Icon icon={<GoFileMedia />} className={['text-[#1d9bf0]']} title="Media" />
                        <div className="text-lg text-[#1d9bf0]"></div>
                        <button className="bg-[#1d9bf0] px-4 py-[6px] text-white font-bold text-sm rounded-full">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </Overlay>
    );
}

export default CreateTweet;
