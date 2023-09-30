import Tippy from '@tippyjs/react';
import { PiSealCheckFill } from 'react-icons/pi';

interface IconProps {
    icon?: React.ReactNode;
    check?: boolean;
    title?: string;
    className?: string[];
}

const Icon: React.FC<IconProps> = ({ icon, check, title, className }) => {
    return check ? (
        <button className="p-0 rounded-full text-lg hover:bg-transparent ml-[2px] text-primary">
            {check && <PiSealCheckFill />}
        </button>
    ) : (
        <Tippy content={title} delay={[500, 0]} className="text-[10px]">
            <button className={`p-3 rounded-full text-lg hover:bg-[#1d9bf01a] ${className?.join(' ')}`}>{icon}</button>
        </Tippy>
    );
};

export default Icon;
