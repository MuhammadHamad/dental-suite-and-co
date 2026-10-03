import { renderMonogramImage } from "@/lib/og";

// Square logo referenced by the clinic's structured data.
export const dynamic = "force-static";

export function GET() {
  return renderMonogramImage(600);
}
