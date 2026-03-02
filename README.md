# RIC Removal, Demolition & Hauling Website

Modern, mobile-first lead generation website for **ricids.com** (no repository binary assets, PR-safe for systems that block binary files).

## Pages
- Home (`index.html`) includes embedded **Contact / Get Quote** section
- Services (`services.html`)
- Gallery / Projects (`gallery.html`)
- About (`about.html`)
- Legacy contact URL (`contact.html`) redirects to `index.html#quote`

## Folder structure

```text
ricids/
├── index.html
├── services.html
├── gallery.html
├── about.html
├── contact.html            (redirects to home quote section)
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    └── js/
        └── main.js
```

## Deployment instructions

1. Business contact is set to phone `(321) 999-2191` and email `quotes@ricids.com`; update only if needed.
2. Upload all files/folders to your hosting root (`public_html`, `www`, or similar).
3. Ensure `index.html` is in the root so it loads automatically.
4. Test on mobile:
   - Navigation menu
   - Click-to-call buttons
   - Embedded quote form and photo upload
5. Connect the quote form:
   - Use your host's form mailer, or
   - Point `form action` to your backend endpoint, or
   - Use a hosted form service.

## Editing tips
- Main design styles: `assets/css/styles.css`
- Mobile menu behavior: `assets/js/main.js`
- SEO titles/descriptions: `<title>` and `<meta name="description">` in each page.
