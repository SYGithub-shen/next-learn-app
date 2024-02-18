import {NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GithubProvider from "next-auth/providers/github";

export const GithubOption: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'email', placeholder: 'email' },
				password: { label: 'password', type: 'password' }
			},
			// @ts-ignore
			async authorize(credentials, request) {
				if (!credentials!.email || !credentials!.password) return
				const user = await prisma.user.findUnique({
					where: {
						email: credentials!.email
					}
				})
				if (!user) return null
				const passwordsMatch = await bcrypt.compare(credentials!.password, user.hashedPassword!)
				return passwordsMatch ? user : null
			}
		}),
		GithubProvider({
			clientId: `${process.env.GITHUB_CLIENT_ID}`,
			clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
		})
	],
	session: {
		strategy: "jwt",
	},
}