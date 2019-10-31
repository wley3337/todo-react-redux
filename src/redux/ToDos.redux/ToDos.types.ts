export interface ToDo{
    listId: number 
    title: string 
    description?: string 
    due?: Date | undefined | string
}