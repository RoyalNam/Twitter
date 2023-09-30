'use client';
import React, { useState } from 'react';

function Overlay({ children }: { children: React.ReactNode }) {
    const [show, setShow] = useState(true);
    return (
        show && (
            <div className="relative">
                <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50" onClick={() => setShow(false)} />
                <div className="bg-white w-[90%] md:w-auto md:min-w-[640px] fixed top-[64px] left-1/2 -translate-x-1/2 rounded-3xl">
                    {children}
                </div>
            </div>
        )
    );
}

export default Overlay;
