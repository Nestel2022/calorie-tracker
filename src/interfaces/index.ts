export interface ICategory {
    id:number,
    name:string
}

export interface IActivity {
    id: string,
    category: number,
    name: string,
    calories: number
}