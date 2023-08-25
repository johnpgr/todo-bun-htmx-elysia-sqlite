import { db } from "@/db"
import { InferInsertModel, InferSelectModel, eq } from "drizzle-orm"
import { AnySQLiteTable } from "drizzle-orm/sqlite-core"
import { IBaseRepository } from "./base"
import { withId } from "@/utils/with-id"

export abstract class DefaultDrizzleRepository<
  Table extends AnySQLiteTable,
  SelectModel extends InferSelectModel<Table>,
  InsertModel extends InferInsertModel<Table>,
> implements IBaseRepository<SelectModel, InsertModel>
{
  constructor(private readonly table: Table) {}

  async create(data: InsertModel): Promise<SelectModel> {
    return (
      (await db
        .insert(this.table)
        .values(withId(data))
        .returning()) as unknown as SelectModel[]
    )[0]
  }

  async update(id: string, data: InsertModel): Promise<SelectModel> {
    return (
      (
        (await db
          .update(this.table)
          .set(data)
          //@ts-expect-error id should exist on every table
          .where(eq(this.table.id, id))
          .returning()) as unknown as SelectModel[]
      )[0]
    )
  }

  async findAll(): Promise<SelectModel[]> {
    return (await db.select().from(this.table)) as unknown as SelectModel[]
  }

  async findById(id: string): Promise<SelectModel | null> {
    return (
      (
        (await db
          .select()
          .from(this.table)
          //@ts-expect-error id should exist on every table
          .where(eq(this.table.id, id))
          .limit(1)) as unknown as SelectModel[]
      )[0] ?? null
    )
  }

  async delete(id: string): Promise<SelectModel> {
    return (
      (
        (await db
          .delete(this.table)
          //@ts-expect-error id should exist on every table
          .where(eq(this.table.id, id))
          .returning()) as unknown as SelectModel[]
      )[0]
    )
  }
}
