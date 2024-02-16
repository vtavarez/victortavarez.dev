import { revalidateTag } from "next/cache";
export async function POST(request: Request) {
  revalidateTag("posts");
  return new Response("OK");
}