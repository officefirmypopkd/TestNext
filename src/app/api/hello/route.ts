export const dynamic = 'force-static';

export async function GET() {
  return Response.json({ message: 'Hello from Next.js using GET!' });
}
