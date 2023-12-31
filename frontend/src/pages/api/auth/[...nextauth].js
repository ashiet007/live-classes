import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const providers = [
  CredentialsProvider({
    name: "Credentials",
    authorize: async (credentials) => {
      try {
        const res = await axios.post(
          `${process.env.API_URL}/auth/login`,
          {
            email: credentials.email,
            password: credentials.password,
          },
          {
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
            },
          }
        );
        if (res) {
          return { status: "success", data: res.data.token };
        }
      } catch (e) {
        const errorMessage = e.response?.data?.message;
        // Redirecting to the login page with error messsage in the URL
        throw new Error(errorMessage + "&email=" + credentials.email);
      }
    },
  }),
];

const callbacks = {
  async jwt({ token, user }) {
    if (user) {
      token.accessToken = user.data.token;
    }

    return token;
  },

  async session({ session, token, user }) {
    session.accessToken = token.accessToken;
    return session;
  },
};

const options = {
  providers,
  callbacks,
  pages: {
    error: "/login", // Changing the error redirect page to our custom login page
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => NextAuth(req, res, options);
