export interface IBaseRepository<SelectModel, InsertModel> {
  getAll(): Promise<SelectModel[]>
  getById(id: string): Promise<SelectModel | null>
  add(data: InsertModel): Promise<SelectModel>
  update(id: string, data: InsertModel): Promise<SelectModel>
  delete(id: string): Promise<SelectModel>
}
