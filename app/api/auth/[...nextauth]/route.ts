import NextAuth from "next-auth";

import {GithubOption} from "@/app/token/GitOptions";
const handle = NextAuth(GithubOption);

export { handle as GET, handle as POST };