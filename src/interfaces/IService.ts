export interface IService<T> {
  create(obj:unknown):Promise<T>,
  read():Promise<T[]>,
  readOne(_Id: string): Promise<T | null>
  update(_Id: string, obj: T): Promise<T | null>
}