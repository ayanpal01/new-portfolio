import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        // Simple hardcoded admin credentials
        const adminUsername = process.env.ADMIN_USERNAME || 'admin';
        const adminPassword = process.env.ADMIN_PASSWORD || 'ayanpal01';
        const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

        if (credentials.username === adminUsername) {
          let isValidPassword = false;
          
          // Try both plain password and hashed password
          if (adminPasswordHash) {
            try {
              isValidPassword = await bcrypt.compare(credentials.password, adminPasswordHash);
            } catch (error) {
              console.log('Hash comparison failed, trying plain password');
            }
          }
          
          // Fallback to plain password comparison
          if (!isValidPassword && adminPassword) {
            isValidPassword = credentials.password === adminPassword;
          }
          
          if (isValidPassword) {
            return {
              id: '1',
              name: 'Admin',
              email: 'admin@portfolio.com',
              role: 'admin'
            };
          }
        }

        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = 'admin';
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub!;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/admin/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };