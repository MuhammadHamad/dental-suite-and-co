import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { clinic } from "@/content/site";

// Rendering helpers for share images and generated icons (Satori: flexbox-only CSS).

const fontDir = (pkg: string) => join(process.cwd(), "node_modules/@fontsource", pkg, "files");

async function loadFonts() {
  const [display, displayItalic, sans, sansBold] = await Promise.all([
    readFile(join(fontDir("cormorant-garamond"), "cormorant-garamond-latin-600-normal.woff")),
    readFile(join(fontDir("cormorant-garamond"), "cormorant-garamond-latin-500-italic.woff")),
    readFile(join(fontDir("manrope"), "manrope-latin-500-normal.woff")),
    readFile(join(fontDir("manrope"), "manrope-latin-700-normal.woff")),
  ]);
  return [
    { name: "Cormorant", data: display, weight: 600 as const, style: "normal" as const },
    { name: "Cormorant", data: displayItalic, weight: 500 as const, style: "italic" as const },
    { name: "Manrope", data: sans, weight: 500 as const, style: "normal" as const },
    { name: "Manrope", data: sansBold, weight: 700 as const, style: "normal" as const },
  ];
}

async function photoDataUrl() {
  const buf = await readFile(join(process.cwd(), "src/assets/dr-osama-afridi.jpg"));
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

const INK = "#100f0c";
const GOLD = "#d5b475";
const GOLD_DEEP = "#c39a57";
const IVORY = "#fcfaf5";
const STONE = "#b3ab9c";

export const OG_SIZE = { width: 1200, height: 630 };

function MonogramMark({ size }: { size: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size,
        border: `${Math.max(2, size / 40)}px solid ${GOLD_DEEP}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: GOLD,
        fontFamily: "Cormorant",
        fontWeight: 600,
        fontSize: size * 0.42,
        letterSpacing: size * 0.01,
        paddingTop: size * 0.02,
      }}
    >
      DS
    </div>
  );
}

export async function renderShareImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  const [fonts, photo] = await Promise.all([loadFonts(), photoDataUrl()]);
  const titleSize = title.length > 60 ? 54 : title.length > 38 ? 62 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: `radial-gradient(circle at 18% 12%, #2a2318 0%, ${INK} 55%)`,
          padding: "56px 64px",
          fontFamily: "Manrope",
          color: IVORY,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, paddingRight: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <MonogramMark size={64} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: "Cormorant", fontWeight: 600, fontSize: 28, letterSpacing: 5, color: IVORY }}>THE DENTAL SUITE</div>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 6, color: GOLD, marginTop: 4 }}>
                &amp; CO. · PESHAWAR
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: 5, color: GOLD, textTransform: "uppercase" }}>
              {eyebrow}
            </div>
            <div
              style={{
                fontFamily: "Cormorant",
                fontWeight: 600,
                fontSize: titleSize,
                lineHeight: 1.04,
                marginTop: 18,
                color: IVORY,
              }}
            >
              {title}
            </div>
            <div style={{ fontSize: 24, lineHeight: 1.45, color: STONE, marginTop: 20, maxWidth: 620 }}>{subtitle}</div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 17, color: STONE, whiteSpace: "nowrap" }}>
            <div style={{ display: "flex", gap: 3 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24">
                  <path fill={GOLD} d="m12 2.5 2.9 6 6.6.8-4.9 4.6 1.3 6.6L12 17.2l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8Z" />
                </svg>
              ))}
            </div>
            <div style={{ color: IVORY, fontWeight: 700 }}>5.0 Google</div>
            <div style={{ width: 5, height: 5, borderRadius: 5, background: GOLD_DEEP }} />
            <div>Liberty Mall</div>
            <div style={{ width: 5, height: 5, borderRadius: 5, background: GOLD_DEEP }} />
            <div style={{ color: IVORY, fontWeight: 700 }}>{clinic.phone.display}</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              padding: 10,
              borderTopLeftRadius: 240,
              borderTopRightRadius: 240,
              borderBottomLeftRadius: 28,
              borderBottomRightRadius: 28,
              border: `1.5px solid ${GOLD_DEEP}`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img> only */}
            <img
              src={photo}
              alt=""
              width={400}
              height={500}
              style={{
                width: 400,
                height: 500,
                objectFit: "cover",
                borderTopLeftRadius: 230,
                borderTopRightRadius: 230,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}

export async function renderMonogramImage(size: number, { rounded = false }: { rounded?: boolean } = {}) {
  const fonts = await loadFonts();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `radial-gradient(circle at 30% 20%, #2a2318 0%, ${INK} 70%)`,
          borderRadius: rounded ? size * 0.22 : 0,
        }}
      >
        <MonogramMark size={Math.round(size * 0.78)} />
      </div>
    ),
    { width: size, height: size, fonts },
  );
}
