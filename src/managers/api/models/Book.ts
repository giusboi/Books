export interface Book {
  readonly title: string
  readonly description: string
  readonly bookImage: BookImage
}

export interface BookImage {
  readonly url: string
  readonly width: number
  readonly height: number
}

// From server.
export interface BooksRes {
  readonly results: {
    readonly books: ReadonlyArray<{
      readonly title: string
      readonly description: string
      readonly book_image: string
      readonly book_image_width: number
      readonly book_image_height: number
    }>
  }
}
