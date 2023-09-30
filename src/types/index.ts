export interface UserPrivateInfo {
    userId: number;
    userName: string;
    fullName: string;
    avatarUrl: string | null;
}

export interface UserProfile {
    email: string;
    password: string;
    birthday: Date;
    bio?: string | null;
    location?: string | null;
    createdAt: Date;
    updatedAt: Date;
    followersCount: number;
    followingCount: number;
    backgroundUrl?: string | null;
    privateInfo: UserPrivateInfo;
}
export interface Tweet {
    tweetId: number;
    userId: number;
    content: string;
    mediaType: string;
    mediaURL: string;
    createdAt: string;
    replyCount: number;
    retweetsCount: number;
    likesCount: number;
}
export interface MediaProps {
    mediaType?: string;
    mediaURL?: string;
}
export interface PostProps {
    tweet: Tweet;
    userInfo: UserPrivateInfo;
}
