export interface IModel<T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(_Id: string): Promise<T | null>,
  update(_Id: string, obj: T): Promise<T | null>,
  delete(_Id: string): Promise<T | null>,
}
