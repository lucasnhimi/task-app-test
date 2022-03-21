import { prisma } from "./prisma";

export async function getAllTasks() {
  const data = await prisma.task.findMany();
  return data;
}
