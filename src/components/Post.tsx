import { AiOutlineHeart, AiOutlineUpload } from 'react-icons/ai';
import Avatar from './Avatar';
import { HiArrowPathRoundedSquare } from 'react-icons/hi2';
import { BiMessageRounded } from 'react-icons/bi';
import React, { useState } from 'react';
import Icon from './Icon';
import { MediaProps, PostProps, Tweet } from '@/types';

const Post: React.FC<PostProps> = ({ userInfo, tweet }) => {
    const getTimeDifferent = (createdAt: string) => {
        const now = new Date();
        const createAtDate = new Date(createdAt);
        const timeDifferent = (now.getTime() - createAtDate.getTime()) / 1000;

        if (timeDifferent < 60) return `${Math.floor(timeDifferent)}s`;
        else if (timeDifferent < 3600) return `${Math.floor(timeDifferent / 60)}m`;
        else if (timeDifferent < 86400) return `${Math.floor(timeDifferent / 3600)}h`;
        else {
            const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            return createAtDate.toLocaleDateString(undefined, options);
        }
    };
    const renderMedia = ({ mediaType, mediaURL }: MediaProps) => {
        if (mediaType == 'Image') {
            return <img src={mediaURL} alt="Tweet IMG" />;
        } else if (mediaType == 'Video') {
            return (
                <iframe
                    width={'100%'}
                    height={'300px'}
                    src={mediaURL}
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                />
            );
        } else {
            return null;
        }
    };
    return (
        <div>
            <div className="px-4 py-3 border-b hover:bg-[#f7f9f9]">
                <div>
                    <div className="flex ">
                        <div>
                            <Avatar src={userInfo.avatarUrl || undefined} />
                        </div>
                        <div className="text-sm ml-2">
                            <div className="flex">
                                <h4 className="font-bold text-base pr-2">{userInfo.fullName}</h4>
                                <p>
                                    @<span>{userInfo.userName}</span>
                                </p>
                                <span className="pl-2 ml-2 relative before:absolute before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[2px] before:h-[2px] before:bg-black">
                                    {getTimeDifferent(tweet.createdAt)}
                                </span>
                            </div>
                            <div>
                                <p>{tweet.content}</p>
                                <div className="rounded-2xl my-3 overflow-hidden">
                                    {renderMedia({ mediaType: tweet.mediaType, mediaURL: tweet.mediaURL })}
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center hover:text-[#f92185]">
                                    <Icon icon={<AiOutlineHeart />} title="Like" />
                                    <span className="text-xs">{tweet.likesCount}</span>
                                </div>
                                <div className="flex items-center hover:text-[#35a5f1]">
                                    <Icon icon={<BiMessageRounded />} title="Reply" />
                                    <span className="text-xs">{tweet.replyCount}</span>
                                </div>
                                <div className="flex items-center hover:text-[#28c490]">
                                    <Icon icon={<HiArrowPathRoundedSquare />} title="Repost" />
                                    <span className="text-xs">{tweet.retweetsCount}</span>
                                </div>
                                <Icon icon={<AiOutlineUpload />} title="Share" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
