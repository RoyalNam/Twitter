import Avatar from './Avatar';
import Button from './Button';
import DropDown from './DropDown';
import Icon from './Icon';

function Cart() {
    return (
        <DropDown>
            <div className={`cart-block max-w-[300px] hover:!bg-inherit p-4`}>
                <div className="flex justify-between">
                    <Avatar large />
                    <Button primary title={'Follow'} />
                </div>
                <div className="leading-5 text-lg mt-2">
                    <a href="/" className="flex items-center font-bold hover:underline">
                        <h4 className="hover:underline">Hello</h4>
                        <Icon check />
                    </a>
                    <p>desc</p>
                </div>
                <div className="mt-3">
                    <p className="leading-5">
                        internships & fellowships internships & fellowships internships & fellowships internships & fell
                        fellowships internships & fellowships
                    </p>
                </div>
                <div className="text-sm leading-none">
                    <div className="flex mt-3">
                        <a href="/" className="mr-5 hover:underline">
                            <span className="font-bold">143</span>
                            <span> Following</span>
                        </a>
                        <a href="/" className="hover:underline">
                            <span className="font-bold">133.6K</span>
                            <span> Followers</span>
                        </a>
                    </div>
                </div>
            </div>
        </DropDown>
    );
}

export default Cart;
