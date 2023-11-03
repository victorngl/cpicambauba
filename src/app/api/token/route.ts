export async function GET() {
  return Response.json({ token: process.env.AGENDAEDU_BEARER_TOKEN })
}