export interface CategoriesRes {
  readonly results: ReadonlyArray<{
    readonly display_name: string
    readonly list_name_encoded: string
  }>
}

export interface Category {
  readonly displayName: string
  readonly listNameEncoded: string
}
