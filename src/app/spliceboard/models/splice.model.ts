export interface SpliceModel{
    name : string;
    fragments : Fragment[];
}

export interface Fragment{
    id : string;
    start : number;
    stop :number;
}

export interface RunRelog {
    name:string;
    type:string;
    start:number;
    stop:number;
}

