# Hook Up Project Guidelines

## Visual Identity & Theme
- **Color Palette**: Dominant Black and Orange.
  - Background: `#020202` with animated orange ambient glows.
  - Accent/Secondary Color: `#ff3e00`.
- **Typography**:
  - Primary Font: **Lexend** (Sans-serif) for UI and headers.
  - Secondary/Body: **Inter**.
  - Accent: **Outfit**.
- **Styles**:
  - Headers: Large (`text-7xl` to `text-8xl`), bold/black, often UPPERCASE and skewed (`skew-x-[-3deg]`).
  - Cards: Modern bordered style with subtle glow on hover, rounded corners (px-24 to px-32).
  - Footer: Compact, white text for copyright/designed by sections, italicized in certain parts.
  - Modal: Product catalog with backdrop blur and modern card grid.

## Content Guidelines
- Tone: Professional yet community-focused.
- Sections: Hero, About Us (Tentang Kami), Vendors, Features (Kenapa Kami), FAQ (General FAQ), Footer.
- Multilingual: Support for Indonesian (id) and English (en).

## Component Rules
- Use `motion/react` for all animations (mesh background, card entrances).
- Use `lucide-react` for icons.
- Ensure all Firestore operations use the custom `handleFirestoreError` logic (if integrated).
