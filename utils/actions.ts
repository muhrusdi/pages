"use server"

import { revalidatePath } from "next/cache"

export const revalidates = (paths = []) => paths.forEach(p => revalidatePath(p))
