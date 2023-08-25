export interface IBaseRepository<SelectModel, InsertModel> {
  findAll(): Promise<SelectModel[]>
  findById(id: string): Promise<SelectModel | null>
  create(data: InsertModel): Promise<SelectModel>
  update(id: string, data: InsertModel): Promise<SelectModel>
  delete(id: string): Promise<SelectModel>
}
