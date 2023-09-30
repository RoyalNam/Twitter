'use client';
import { AiFillPlusCircle, AiOutlineCheck } from 'react-icons/ai';
import { BsCheck, BsCheck2, BsCheckLg } from 'react-icons/bs';
import { useState } from 'react';
import Avatar from '../Avatar';

interface ListCellProps {
    isAdd?: boolean;
    src: string;
    name: string;
    numberMember: number;
    groupSrc: string[];
    numberFollow: number;
    author: string;
}

const ListCell: React.FC<ListCellProps> = ({
    isAdd = false,
    src = '',
    name,
    numberMember = 0,
    groupSrc = [],
    numberFollow = 0,
    author,
}) => {
    const [isAdded, setAdd] = useState(isAdd);
    return (
        <div className="flex items-center justify-between w-full cart-block">
            <div className="flex items-center text-sm">
                <div className="pr-3">
                    <Avatar src={src} rounded />
                </div>
                <div>
                    <div className="flex">
                        <h4 className="font-bold mr-1">{name}</h4>
                        <span className="relative pl-1 after:absolute after:w-[2px] after:h-[2px] after:rounded-full after:left-0 after:bg-black after:top-1/2 ">
                            {numberMember}
                        </span>
                        <span className="ml-1">member</span>
                    </div>
                    <div className="flex">
                        <div className="flex mr-1">
                            {groupSrc.map((item, ind) => (
                                <Avatar small src={item} key={ind} />
                            ))}
                        </div>
                        <div>
                            <span>{numberFollow} K</span>
                            <span> followers including </span>
                            <span>@{author}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={() => setAdd(!isAdded)}
                className={`text-4xl hover:opacity-90 ${
                    isAdded &&
                    'border rounded-full p-[6px] text-lg hover:text-[#f43945] hover:border-current hover:bg-[#f7e1e3]'
                }`}
            >
                {isAdded ? <BsCheck2 /> : <AiFillPlusCircle />}
            </button>
        </div>
    );
};

export default ListCell;
