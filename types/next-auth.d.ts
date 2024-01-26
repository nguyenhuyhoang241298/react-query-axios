import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      address: string
    } & DefaultSession['user']
    access_token: string
  }
}
