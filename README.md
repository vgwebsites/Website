# Veyra Studio

A complete, responsive agency website built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Production check: `npm run build`.

## Edit content

- Services: `src/data/services.ts`
- Sample concept projects: `src/data/projects.ts`
- Sample founder profiles: `src/data/founders.ts`
- Sample testimonial copy: `src/data/testimonials.ts`
- Contact details and social destinations: `src/data/site.ts`
- Process and technology collections: `src/data/process.ts`, `src/data/technologies.ts`

The included projects, founders, and testimonials are explicitly presented as demo content. Replace them with verified material before using the site as a real business portfolio.

## Contact form integration

The form performs client-side validation and never pretends that a submission succeeded. By default it runs in **demo mode**: after validation it prepares a pre-filled email draft and offers a copy-to-clipboard action. Nothing is sent automatically.

To enable real delivery, set `VITE_CONTACT_ENDPOINT` in your deployment environment:

```bash
VITE_CONTACT_ENDPOINT=https://your-domain.example/api/contact
```

The website sends a `POST` request with `Content-Type: application/json` and this body:

```json
{
  "name": "Visitor name",
  "email": "visitor@example.com",
  "projectType": "Website Development",
  "budget": "$1,000–$3,000",
  "details": "Project description"
}
```

Your endpoint should validate and sanitize every field again, protect against spam and abuse, deliver/store the enquiry, and return any `2xx` response only after accepting it. Non-`2xx` responses and network failures show an error and preserve the user's entries. A success message is displayed only after a successful endpoint response.

## Accessibility and motion

The site includes semantic landmarks, keyboard-accessible controls, a skip link, visible focus states, descriptive labels, responsive navigation, dialog Escape handling, and `prefers-reduced-motion` support. Standard reveals run once as content enters the viewport; hero and timeline transforms are tied to real scroll position.
