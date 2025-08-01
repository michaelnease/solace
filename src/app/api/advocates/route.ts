import db from "@/db";
import { advocates } from "@/db/schema";
import { eq, gte, lte, and, SQL, ilike, or } from "drizzle-orm";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const yearsOfExperience = searchParams.get("yearsOfExperience");
  const degree = searchParams.get("degree");
  const search = searchParams.get("search");

  const conditions: SQL[] = [];

  if (yearsOfExperience) {
    const [min, max] =
      yearsOfExperience === "10+"
        ? [10, null]
        : yearsOfExperience.split("-").map(Number);

    if (min !== undefined) {
      conditions.push(gte(advocates.yearsOfExperience, min));
    }

    if (max !== null) {
      conditions.push(lte(advocates.yearsOfExperience, max));
    }
  }

  if (degree) {
    conditions.push(eq(advocates.degree, degree));
  }

  if (search) {
    const searchCondition = or(
      ilike(advocates.firstName, `%${search}%`),
      ilike(advocates.lastName, `%${search}%`),
      ilike(advocates.city, `%${search}%`)
    );
    conditions.push(searchCondition as SQL);
  }

  let query = db.select().from(advocates);

  if (conditions.length > 0) {
    query = (query as any).where(and(...conditions));
  }

  const data = await query;
  return Response.json({ data });
}
