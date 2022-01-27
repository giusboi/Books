import { CategoriesRes, Category } from './models/Category';
import { Book, BooksRes } from './models/Book';

export class ApiClient {
  private static readonly BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/'
  private static readonly API_KEY = 'ScnIlJcO8CXvkCmSvPOvOYPyn2ZjSDtQ'

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static async getCategories(): Promise<ReadonlyArray<Category>> {
    const path = 'names.json'
    const res: CategoriesRes = await this._fetchJSON(path)
    return res.results.map((elem) => ({
      displayName: elem.display_name,
      listNameEncoded: elem.list_name_encoded
    }))
  }

  public static async getBooks(listNameEncoded: string): Promise<ReadonlyArray<Book>> {
    const path = `${listNameEncoded}.json`
    const res: BooksRes = await this._fetchJSON(path)
    return res.results.books.map(elem => ({
      title: elem.title,
      description: elem.description,
      bookImage: {
        url: elem.book_image,
        width: elem.book_image_width,
        height: elem.book_image_height
      }
    }))
  }

  private static async _fetchJSON(path: string) {
    const pathWithApiKey = `${path}?api-key${this.API_KEY}`
    const response = await fetch(this.BASE_URL + pathWithApiKey)
    if (!response.ok) {
      const errorMsg =
        `Code: ${response.status.toString()} ` + `- Url: ${response.url}`
      throw Error(errorMsg)
    }
    const json = await response.json()
    return json
  }
}
