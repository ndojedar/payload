export type ColumnToCreate = {
  columnName: string
  columnType?: 'integer' | 'numeric' | 'uuid' | 'varchar'
  notNull: boolean
  tableName: string
}

/**
 * Set of all paths which should be moved
 * This will be built up into one WHERE query
 */
export type PathsToQuery = Set<string>

export type DocsToResave = {
  [id: number | string]: Record<string, unknown>[]
}
