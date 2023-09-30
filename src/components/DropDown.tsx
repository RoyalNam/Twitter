function DropDown({ children }: { children: React.ReactNode }) {
    return <div className="bg-white z-10 overflow-y-auto min-w-[175px] rounded-xl drop-style">{children}</div>;
}

export default DropDown;
