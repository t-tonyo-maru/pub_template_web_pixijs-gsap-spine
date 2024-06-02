# pub_pub_template_web_pixijs-gsap-spine

## Development environment

| tool | version |
| ---- | ------- |
| node | >=20    |

## Commands

| Command         | Content           |
| --------------- | ----------------- |
| npm run dev     | run dev server    |
| npm run build   | build app         |
| npm run preview | preview built app |
| npm run format  | run code format   |
| npm run test    | run vitest        |

## Quik Start

1. Match your environment to the Development environment.
2. Setup Github pages path. (If don't use github pages, you can skip 2 step.)
   1. Create /.env
   2. Write `VITE_GITHUB_PAGES_PATH=/github-pages-path` in .env.
      - Please refer .env.sample.
   3. Uncomment `base: process.env.VITE_GITHUB_PAGES_PATH || '/'` in vite.config.ts
3. Run `npm i` command
4. Run `npm run dev` command

## Github-pages Deploy Flow

1. Setup Github Pages.
2. Create /.env .
   - Write `VITE_GITHUB_PAGES_PATH=/github-pages-path`.
3. Uncomment `base: process.env.VITE_GITHUB_PAGES_PATH || '/'` in vite.config.ts
4. Run `npm run build`.
   - If the command completes successfully, dist directory generated at root directory.
5. Rename dist directory to docs.
6. Push branch that setuped for Github Pages.

## Github-pages deploy check list

- [ ] Create .env
  - [ ] write `VITE_GITHUB_PAGES_PATH=/github-pages-path`
- [ ] Create images
  - [ ] OGP Image: /public/assets/images/ogp_image.jpg
  - [ ] Icon(ico): public/assets/images/icon/favicon.ico
  - [ ] Icon(png): public/assets/images/icon/favicon.png
- [ ] Fix index.html's url
  - OGP url …etc
- [ ] Rename dist directory to docs

## Directory structure

```
.
├── .env
├── .env.sample
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── assets … static assets files
├── src
│   ├── main.ts
│   ├── reset.css
│   ├── utils … util functions
│   └── vite-env.d.ts
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

## Links

- Pixi.js
  - [SpineBoy Adventure](https://pixijs.com/8.x/tutorials/spine-boy-adventure#1)
  - [pixijs/open-games](https://github.com/pixijs/open-games/tree/main)
