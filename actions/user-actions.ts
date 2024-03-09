"use server";
import { prisma } from "@/prisma/prisma";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const checkIfUserExists = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  console.log("This is the user in the db: ", user);
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

export const getUserId = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return user?.id;
};
