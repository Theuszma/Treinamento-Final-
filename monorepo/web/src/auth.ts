import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/app/(backend)/services/db";

export const auth = betterAuth({
  adapter: prismaAdapter(prisma),
  cookies: nextCookies,
});