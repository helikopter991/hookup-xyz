# Hook Up Project Guidelines

## Visual Identity & Theme
- **Color Palette**: Dominant Black and Orange with Plain Grey sections.
  - Primary Background: `#020202`.
  - Secondary/Section Background: `#0d0d0d` (used for "Tentang Kami" / plain grey sections).
  - Surface Background: `#0a0a0a` (used for footer and modal surfaces).
  - Ambient Background: Glow orange (`radial-gradient`) used for active sections like Hero, Vendors, and FAQ.
  - Accent Color: `#ff3e00` (Orange).
- **Typography**:
  - Primary Font: **Lexend** (Sans-serif) for UI and Headers.
  - Secondary/Body: **Inter**.
  - Accent Font: **Outfit**.
- **Styles**:
  - Headers: Multi-scale (`text-5xl` to `text-8xl`), bold/black, uppercase, often skewed (`skew-x-[-3deg]`).
  - Section Dividers: Horizontal lines with gradient glows (`from-transparent via-brand-accent/20 to-transparent`).
  - Plain Sections: "Tentang Kami" (About Us) uses a plain `#0d0d0d` background without a container card, creating a clean full-width break.
  - Navigation: Fixed, backdrop-blur (`backdrop-blur-md`), dark background (`bg-brand-bg/60`).
  - Buttons: 
    - Primary: Fully rounded, orange, with shadow-glow.
    - Glassmorphism: Semi-transparent dark backgrounds (`#0a0a0a/40`) with backdrop-blur.
- **Animations**:
  - Floating effects for logo/key elements (`animate-float`).
  - Pulse/Ambient glows for background depth.

## Content Guidelines
- Tone: Professional, authoritative, yet community-focused.
- Key Sections: Hero, Tentang Kami (About), Vendor Partners, Kenapa Kami (Features), FAQ, Footer.
- Multilingual: Native support for ID (Indonesian) and EN (English).

## Technical Rules
- Use `motion/react` for complex animations.
- Use `lucide-react` for icons via CDN script in HTML or packages in full-stack.
- Follow the custom `handleFirestoreError` if database integration is added.
