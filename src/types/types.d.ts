export interface Media {
    id: string
    title: string
    desc: string
    uploadDate: string;
    channelId: string;
    channelTitle: string;
    thumbnails?: Thumbnails;
    tags?: (string)[] | null;
    platform: string
}

export interface Thumbnails {
    default: Metadata;
    medium?: Metadata | null;
    high?: Metadata | null;
    standard?: Metadata | null;
    maxres?: Metadata | null;
}
export interface Metadata {
    url: string;
    width: number;
    height: number;
}

export interface Review {
    reviewComment: string;
    reviewRating: number;
    reviewDate: string;
    profileUsername: string;
    profileID: string;
}