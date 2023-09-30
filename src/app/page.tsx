'use client';
import ListCell from '@/components/Cells/ListCell';
import TrendCell from '@/components/Cells/TrendCell';
import UserList from '@/components/UserBlock';
import DefaultLayout from './defauLayout';
import UserCell from '@/components/Cells/UserCell';
import Post from '@/components/Post';
import Search from '@/components/Search';
import ListBlock from '@/components/ListBlock';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Tweet, UserPrivateInfo } from '@/types';

export default function Home() {
    const [user, setUser] = useState<UserPrivateInfo>({} as UserPrivateInfo);
    const [data, setData] = useState<Tweet[]>([]);

    useEffect(() => {
        axios
            .get('https://localhost:7211/api/User/1')
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        axios
            .get('https://localhost:7211/api/Tweet')
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    }, []);
    console.log(data);
    console.log('us', user);

    return (
        <DefaultLayout
            contentChildren={
                // <div className="h-[1500px]">
                //     <ListCell
                //         src={DATA.src}
                //         groupSrc={DATA.groupSrc}
                //         name={DATA.name}
                //         author={DATA.author}
                //         numberFollow={DATA.numberFollow}
                //         numberMember={DATA.numberMember}
                //     />
                //     <TrendCell />
                //     <UserCell />
                // </div>
                data.map((item) => (
                    <Post key={item.tweetId} tweet={item} userInfo={user} />
                ))
            }
            asideChildren={
                <div className="w-full">
                    <div className="mb-2 h-12 sticky w-full top-0">
                        <Search />
                    </div>
                    <ListBlock title="Trends for you">
                        <TrendCell />
                        <TrendCell />
                        <TrendCell />
                        <TrendCell />
                        <TrendCell />
                        <TrendCell />
                    </ListBlock>
                    <UserList />
                </div>
            }
        ></DefaultLayout>
    );
}
