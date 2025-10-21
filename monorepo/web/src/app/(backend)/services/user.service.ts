import prisma from "@/app/(backend)/services/db";

export const updateUserAuraStatus = async (userId: string, status: number) => {
  return await prisma.user.update({
    where: { id: userId },
    data: { auraStatus: status },
  });
};