import { db } from "@/db"
import { InferInsertModel, InferSelectModel, eq } from "drizzle-orm"
import { AnySQLiteTable } from "drizzle-orm/sqlite-core"
import { IBaseRepository } from "./base"
import { withId } from "@/utils/create-id"

export abstract class DefaultDrizzleRepository<
  Table extends AnySQLiteTable,
  SelectModel extends InferSelectModel<Table>,
  InsertModel extends InferInsertModel<Table>,
> implements IBaseRepository<SelectModel, InsertModel>
{
  constructor(private readonly table: Table) {}

  async add(data: InsertModel): Promise<SelectModel> {
    return (
      (await db
        .insert(this.table)
        .values(withId(data))
        .returning()) as unknown as any[]
    )[0] as SelectModel
  }

  async update(id: string, data: InsertModel): Promise<SelectModel> {
    return (
      (
        (await db
          .update(this.table)
          .set(data)
          //@ts-expect-error id should exist on every table
          .where(eq(this.table.id, id))
          .returning()) as unknown as any[]
      )[0] as unknown as SelectModel
    )
  }

  async getAll(): Promise<SelectModel[]> {
    return (await db.select().from(this.table)) as unknown as SelectModel[]
  }

  async getById(id: string): Promise<SelectModel | null> {
    const [found] = await db
      .select()
      .from(this.table)
      //@ts-expect-error id should exist on every table
      .where(eq(this.table.id, id))
      .limit(1)

    if (!found) return null

    return found as SelectModel
  }

  /**
   * @throws Error
   */
  async delete(id: string): Promise<SelectModel> {
    return (
      (
        (await db
          .delete(this.table)
          //@ts-expect-error id should exist on every table
          .where(eq(this.table.id, id))
          .returning()) as unknown as any[]
      )[0] as SelectModel
    )
  }
}
