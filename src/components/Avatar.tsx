import images from '@/assets/imgs';
import Image from 'next/image';

const Avatar = ({ large = false, small = false, rounded = false, src = '' }) => {
    return (
        <div
            className={`avatar w-10 h-10 hover:opacity-95  
        ${large && 'w-16 h-16'} 
        ${small && 'w-[18px] h-[18px]'}
        ${rounded && 'w-12 h-12'}`}
        >
            <img
                src={src || images.avatar.default.src}
                alt="Avatar"
                className={`h-full w-full object-cover rounded-full 
                ${rounded && 'rounded-xl'}`}
            />
        </div>
    );
};

export default Avatar;
