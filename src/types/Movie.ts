export interface Creator{
    name:string;
    url:string;
}

export interface Movie {
    id:string;
    title: string;
    synopsis: string;
    yearsAired: string;
    creators: Creator[];
}