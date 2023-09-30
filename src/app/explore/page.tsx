'use client';
import ListBlock from '@/components/ListBlock';
import DefaultLayout from '../defauLayout';
import TrendCell from '@/components/Cells/TrendCell';
import UserList from '@/components/UserBlock';
import Search from '@/components/Search';
import { AiOutlineSetting } from 'react-icons/ai';
import Icon from '@/components/Icon';

function Explore() {
    return (
        <DefaultLayout
            contentChildren={
                <>
                    <div className="flex items-center px-4">
                        <Search />
                        <Icon className={['text-lg pl-4']} title="Setting" icon={<AiOutlineSetting />} />
                    </div>
                    <ListBlock title="Trends for you">
                        <TrendCell />
                        <TrendCell />
                        <TrendCell />
                        <TrendCell />
                        <TrendCell />
                        <TrendCell />
                    </ListBlock>
                </>
            }
            asideChildren={<UserList />}
        />
    );
}

export default Explore;
