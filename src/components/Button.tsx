import Link from 'next/link';
interface ButtonProps {
    href?: string;
    title: string;
    primary?: boolean;
    outline?: boolean;
    btnNav?: boolean;
    tweet?: boolean;
    icon?: React.ReactNode;
    onclick?: Function;
}

const Button: React.FC<ButtonProps> = ({ href, title, primary, outline, btnNav, tweet = false, icon, onclick }) => {
    let Comp: string = 'button';
    const props = [onclick];

    if (href) {
        Comp = 'Link';
        props.href = href;
    }
    return (
        <Comp
            {...props}
            className={`rounded-full text-white font-bold h-[32px] px-4 capitalize 
            ${
                tweet &&
                'inline-flex items-center justify-center text-lg w-11/12 min-h-[50px] bg-[#1d9bf0] hover:opacity-90'
            } 
            ${primary && 'bg-black text-sm'} 
            ${outline && 'border border-slate-300 text-black'} 
            ${
                btnNav &&
                '!text-gray-500 flex items-center justify-center rounded-none w-full px-4 font-medium min-w-[54px] h-[53px] hover:bg-[#e7e7e8]'
            }`}
        >
            {title && title}
            {icon && icon}
        </Comp>
    );
};

export default Button;
