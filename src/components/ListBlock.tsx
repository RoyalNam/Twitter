import React from 'react';

interface ListBlockProps {
    children: React.ReactNode;
    title: string;
}

const ListBlock: React.FC<ListBlockProps> = ({ children, title = 'Title default' }) => {
    return (
        <div className="bg-[#f7f9f9] w-full rounded-xl overflow-hidden mb-4">
            <h4 className="cart-block font-extrabold hover:!bg-inherit text-xl">{title}</h4>
            {children}
            <button className="text-primary w-full text-left cart-block">Show more</button>
        </div>
    );
};

export default ListBlock;
