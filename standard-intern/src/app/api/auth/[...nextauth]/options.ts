import type { NextAuthOptions} from 'next-auth';
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from '@/lib/db';
import  bcrypt  from 'bcrypt';
export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
              email: { label: 'email', type: 'text' },
              password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
              if (!credentials?.email || !credentials?.password) {
                throw new Error('Invalid credentials something missing');
              }
      
              const user = await db.user.findUnique({
                where: {
                  email: credentials.email
                }
              });
              console.log(user)
      
              if (!user || !user?.password) {
                throw new Error('Invalid credentials something missing 404 ');
              }
      
              const isCorrectPassword = await bcrypt.compare(
                credentials.password,
                user.password
              );
      
              if (!isCorrectPassword) {
                throw new Error('Invalid credentials password wrong');
              }
      
              return user;
            }
          })
    ],
    secret: process.env.SECRET,
    session: {
        strategy: 'jwt',
    },
    // callbacks: {
    //     session: ( {session, token})=>{
    //         console.log('Session Callback', { session, token})
    //         return session
    //     },
    //     jwt: ({ token, user})=>{
    //         console.log('JWT Callback', { token, user})
    //         return token
    //     },
    // },
    debug: process.env.NODE_ENV === 'development',
}