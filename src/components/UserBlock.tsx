'use client';

import { useEffect, useState } from 'react';
import UserCell from './Cells/UserCell';
import ListBlock from './ListBlock';
import axios from 'axios';
import { UserPrivateInfo } from '@/types';

function UserList() {
    const [data, setData] = useState<UserPrivateInfo[]>([]);

    useEffect(() => {
        axios
            .get('https://localhost:7211/api/User')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <ListBlock title="Who to follow">
            {data.map((item) => (
                <UserCell
                    key={item.userId}
                    avatarUrl={item.avatarUrl}
                    fullName={item.fullName}
                    userName={item.userName}
                    userId={0}
                />
            ))}
        </ListBlock>
    );
}

export default UserList;
