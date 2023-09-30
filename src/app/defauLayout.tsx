import CreateTweet from '@/components/Create';
import Overlay from '@/components/Over';
import React from 'react';

interface DefaultLayoutProps {
    contentChildren: React.ReactNode;
    asideChildren: React.ReactNode;
}

function DefaultLayout({ contentChildren, asideChildren }: DefaultLayoutProps) {
    return (
        <>
            <div className="flex justify-between">
                <div className="flex-1 max-w-[600px] border-r border-l">{contentChildren}</div>
                <div className="sticky top-0 overflow-y-auto scroll-custom max-h-[100vh] w-72 hidden lg:flex lg:w-[350px] mr-2">
                    {asideChildren}
                </div>
            </div>
            <div>
                <CreateTweet />
            </div>
        </>
    );
}

export default DefaultLayout;
