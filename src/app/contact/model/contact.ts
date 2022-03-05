export interface Contact {
    _id?: string;
    name: string;
    phone: string;    
    picture: string;
    tags: Array<string>;
    isVip: Boolean;
    rank: number;
    comment?: string
}