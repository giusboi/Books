export interface Category {
  readonly displayName: string
  readonly listNameEncoded: string
}

// From server.
export interface CategoriesRes {
  readonly results: ReadonlyArray<{
    readonly display_name: string
    readonly list_name_encoded: string
  }>
}
