const viewers = new Map<string, number>();
const TIMEOUT = 60_000;

function cleanup() {
  const now = Date.now();
  for (const [id, lastSeen] of viewers.entries()) {
    if (now - lastSeen > TIMEOUT) viewers.delete(id);
  }
}

export async function GET() {
  cleanup();
  return Response.json({ count: viewers.size });
}

export async function POST(request: Request) {
  const { id } = await request.json();
  if (typeof id === "string") viewers.set(id, Date.now());
  cleanup();
  return Response.json({ count: viewers.size });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  if (typeof id === "string") viewers.delete(id);
  return Response.json({ count: viewers.size });
}
