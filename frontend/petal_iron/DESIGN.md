# Design System Specification: Editorial Soft-Minimalism

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Curator"**

This design system moves away from the rigid, "bootstrap" aesthetic of traditional developer portfolios. Instead, it adopts an editorial lens—treating code and projects like high-end gallery pieces. The goal is to balance the technical precision of a developer with the tactile, soft aesthetic of a boutique design studio.

By leveraging **intentional asymmetry**, high-contrast typography scales, and a "paper-on-stone" layering philosophy, we break the template look. We move beyond the grid to create a breathing, organic interface that feels premium, professional, and undeniably custom.

---

## 2. Colors & Tonal Architecture
The palette is a sophisticated blend of warm neutrals and muted botanical tones. It avoids the harshness of pure white and black to create a "soft-focus" professional environment.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. 
*   **How to define boundaries:** Use background color shifts. For example, a `surface-container-low` section should sit directly against a `surface` background.
*   **Why:** Hard lines create visual noise. Tonal transitions create "zones" of focus that feel integrated and high-end.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of heavy-weight cotton paper.
*   **Nesting Logic:** Use the `surface-container` tiers (Lowest to Highest) to create depth. An inner card should use `surface-container-lowest` (#ffffff) to "pop" against a `surface-container` (#f1eee4) background.
*   **The "Glass & Gradient" Rule:** For floating navigation or modal overlays, use **Glassmorphism**. Apply a semi-transparent `surface` color with a `20px` backdrop-blur. 
*   **Signature Textures:** For Hero CTAs, use a subtle linear gradient transitioning from `primary` (#825159) to `primary_container` (#edafb8) at a 135-degree angle. This adds "soul" and prevents the flat-UI fatigue common in junior portfolios.

---

## 3. Typography: The Geometric Voice
The typography is the backbone of this system’s editorial feel. We pair the geometric precision of **Space Grotesk** (Display/Headlines) with the approachable clarity of **Manrope** (Body).

*   **Display & Headline (Space Grotesk):** These are your "statements." Use `display-lg` for hero sections with tight letter-spacing (-2%) to mimic high-end print magazines.
*   **Body & Title (Manrope):** Chosen for its superior legibility in technical contexts. `body-lg` (1rem) is the standard for project descriptions to ensure effortless reading.
*   **The Hierarchy Intent:** The massive jump between `display-lg` (3.5rem) and `body-md` (0.875rem) is intentional. This high-contrast scale signals authority and helps the user's eye navigate the "story" of your portfolio.

---

## 4. Elevation & Depth
In this design system, elevation is a feeling, not a shadow.

### The Layering Principle
Depth is achieved through **Tonal Layering**. Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift that feels like physical paper without the clutter of drop shadows.

### Ambient Shadows
If a "floating" state is required (e.g., a hover state on a project card):
*   **Shadow Spec:** `0px 12px 32px`
*   **Color:** Use a tinted version of `on-surface` at **6% opacity**. Never use pure black or grey; the shadow must feel like it is cast by the ambient light of the page color.

### The "Ghost Border" Fallback
If accessibility requirements demand a container boundary, use a **Ghost Border**:
*   **Spec:** `outline-variant` (#d5c2c4) at **15% opacity**. 
*   **Prohibition:** 100% opaque, high-contrast borders are strictly forbidden.

---

## 5. Components

### Buttons
*   **Primary:** `primary` background with `on-primary` text. Use `xl` (1.5rem) roundedness. No shadow at rest; a subtle "lift" on hover using the Ambient Shadow spec.
*   **Secondary:** `secondary_container` background. This provides a softer, "petal-like" call to action that doesn't compete with the primary button.
*   **Tertiary:** Text-only in `primary` weight, but with a 2px underline in `primary_fixed_dim` that expands on hover.

### Cards & Lists
*   **Rule:** Forbid the use of divider lines. 
*   **Separation:** Use vertical white space (32px or 48px) or a background shift to `surface-container-high` to separate list items.
*   **Project Cards:** Use `surface-container-lowest` with an `lg` (1rem) corner radius. The content should have generous padding (min 24px) to emphasize the editorial "breathable" feel.

### Input Fields
*   **Style:** Filled, not outlined. Use `surface-container-highest`.
*   **Focus State:** Transition the background to `surface-container-lowest` and add a 2px "Ghost Border" in the `primary` color.

### Chips (Tech Stack Tags)
*   **Style:** Use `tertiary_container` (#b0c4b1) with `on-tertiary-container` (#405243) text. Small `sm` (0.25rem) corners to keep them feeling technical and precise amidst the softer UI.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts. A project image on the left with text offset to the right creates a custom, "designed" feel.
*   **Do** embrace white space. If you think there is enough space, add 16px more.
*   **Do** use the `primary` color sparingly for "moments of delight" (icons, links, accents).

### Don't
*   **Don't** use standard 1px borders to separate content.
*   **Don't** use pure black (#000000) for text. Use `on-surface` (#1c1c16) or `on-surface-variant` (#514345) to maintain the "soft-focus" aesthetic.
*   **Don't** use sharp corners. Every container must follow the Roundedness Scale, prioritizing `md` and `lg` for a tactile, friendly feel.