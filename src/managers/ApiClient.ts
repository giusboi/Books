import { User } from '../state/User';

export interface ApiClient {
  auth: () => void
  getUser: () => Promise<User>
}

export class ApiClientImpl implements ApiClient {
  private token: string | undefined

  auth = () => {
    console.log('auth')
    this.token = 'myToken'
  }

  getUser(): Promise<User> {
    return new Promise<User>(resolve => {
      setTimeout(() => {
        resolve({
          name: 'Name from Network',
          surname: 'Surname from Network',
          userId: 'User Id from Network'
        })
      }, 5000)
    })
  }
}

export class ApiClientMock implements ApiClient {
  auth = () => {
    console.log('auth')
  }

  getUser(): Promise<User> {
    return new Promise<User>(resolve => {
      setTimeout(() => {
        resolve({
          name: 'Name from Network',
          surname: 'Surname from Network',
          userId: 'User Id from Network'
        })
      }, 5000)
    })
  }
}
