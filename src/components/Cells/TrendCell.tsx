'use client';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import DropDown from '../DropDown';

import { IoIosMore } from 'react-icons/io';
import { PiSmileySad } from 'react-icons/pi';
import Icon from '../Icon';

function TrendCell() {
    const [isShow, setShow] = useState(false);
    return (
        <div className="flex justify-between cart-block">
            <div className="text-xs leading-none">
                <p>Trend desc</p>
                <h4 className="text-base mb-1 font-bold">Hoàng Nam</h4>
                <p>8.027 Tweets</p>
            </div>
            <Tippy
                visible={isShow}
                placement="left"
                offset={[25, -30]}
                onClickOutside={() => setShow(false)}
                interactive
                render={() => (
                    <DropDown>
                        <button className="flex px-4 py-3 w-full items-center font-semibold leading-none cart-block">
                            <PiSmileySad className="text-xl" />
                            <h4 className="pl-3">Not interested in this</h4>
                        </button>
                        <button className="flex px-4 py-3 w-full font-semibold leading-none cart-block">
                            <PiSmileySad className="text-xl" />
                            <h4 className="pl-3">This trend is harmful or spammer</h4>
                        </button>
                    </DropDown>
                )}
            >
                <div onClick={() => setShow(!isShow)} className="-mt-[10px] -mr-2">
                    <Icon icon={<IoIosMore />} title={'More'} />
                </div>
            </Tippy>
        </div>
    );
}

export default TrendCell;
