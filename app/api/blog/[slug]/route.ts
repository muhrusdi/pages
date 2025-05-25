import { mapMdxContent } from "@/lib/services"

export const dynamic = "force-static"
export const runtime = "edge"

export const GET = async (
  req: Request,
  {
    params,
  }: {
    req: Request
    params: Promise<{ slug: string }>
  },
) => {
  const { slug } = await params
  const map = await mapMdxContent()

  const { fileName } = map[slug]

  return Response.json({ fileName })
}
