'use client';
import Tippy from '@tippyjs/react/headless';
import Icon from '../Icon';
import Cart from '../Cart';
import Button from '../Button';
import Avatar from '../Avatar';
import { UserPrivateInfo } from '@/types';

const UserCell: React.FC<UserPrivateInfo> = ({ userName, fullName, avatarUrl }) => {
    return (
        <div className="flex items-center cart-block justify-between">
            <Tippy interactive delay={[300, 0]} render={() => <Cart />}>
                <div className="flex items-center mr-1">
                    <div className="mr-3">
                        <Avatar src={avatarUrl || undefined} />
                    </div>
                    <div className="leading-5">
                        <a href="/" className="flex items-center font-bold hover:underline">
                            <h4 className="leading-none">{fullName}</h4>
                            <Icon check={true} />
                        </a>
                        <p className="text-sm mt-[2px]">@{userName}</p>
                    </div>
                </div>
            </Tippy>
            <Button primary title={'Follow'} />
        </div>
    );
};

export default UserCell;
