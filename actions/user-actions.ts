"use server";

import { prisma } from "@/prisma/prisma";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

export const checkIfUserExists = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    return null;
  }
  return user;
};

export const addUserToDatabase = async (user: KindeUser) => {
  const fullName = user.given_name + " " + user.family_name;
  const newUser = await prisma.user.create({
    data: {
      id: user.id,
      email: user.email || "",
      firstName: user.given_name || "",
      lastName: user.family_name || "",
      fullName,
      image: user.picture || "",
    },
  });
  return newUser;
};
