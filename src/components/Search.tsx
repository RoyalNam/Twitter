import { CiSearch } from 'react-icons/ci';
import { AiFillCloseCircle } from 'react-icons/ai';

function Search() {
    return (
        <form method="get" className="bg-white py-1 w-full">
            <div className="flex items-center max-h-[44px] bg-[#eff3f4] border border-transparent rounded-full focus-within:border-[#1d9bf0]">
                <span className="min-w-[32px] text-xl pl-3">
                    <CiSearch />
                </span>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search tweet"
                    className="flex-1 p-3 leading-none outline-none bg-transparent"
                />
                <button title="Search" className="min-w-[32px] text-2xl mr-1 text-primary">
                    <AiFillCloseCircle />
                </button>
            </div>
        </form>
    );
}

export default Search;
