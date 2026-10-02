# Oryenza Talent Services

## Deploy on Vercel

Import `anita025/oryenza` at https://vercel.com/new. Use the Next.js preset, root directory `./`, and default build/output settings. The project specifies Node.js 22.x. No environment variables are needed for the current email-draft contact form.

Next.js website with seven pages, responsive navigation, animated talent network, scroll reveals, service cards, FAQ accordion, and contact details from the supplied content document.

## Run

With Node.js 20.9+ installed:

```sh
npm install
npm run dev
```

Open http://localhost:3000. For production, use `npm run build` and `npm start`.

On this workspace, a local Node runtime is available:

```powershell
.\node.exe node_modules\next\dist\bin\next dev
```

## Contact form

The form validates required fields and opens the visitor's email application with a draft addressed to sales@oryenza.in, careers@oryenza.in, or info@oryenza.in. It does not send messages directly. A server email provider can be connected when credentials and deployment details are available.

The map embeds the supplied Surat address. Social links are omitted until real profile URLs are provided. Sitemap and robots use https://oryenza.in; update these if the final domain differs.

Logo assets belong to Oryenza. Supporting team photos are from Unsplash; profile photos are from Random User. Reference: https://www.prometeotalent.com/.
