export interface Splice{
    name : string;
    fragments : Fragment[];
}

export interface Fragment{
    id : string;
    start : number;
    stop :number;
}

export interface Run {
    name:string;
    type:string;
    start:number;
    stop:number;
}

export interface Relog {
    name:string;
    type:string;
    start:number;
    stop:number;
}