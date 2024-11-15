# pub_pub_template_web_pixijs-gsap-spine

## Summary

This repository is starter template of [PixiJS v8](https://pixijs.com/) + [GSAP](https://gsap.com/) + [Spine](https://esotericsoftware.com/).

- [explanatory article (ja)](https://zenn.dev/t_tonyo_maru/articles/b5d96768a38368/)
- [Sample page](https://t-tonyo-maru.github.io/pub_template_web_pixijs-gsap-spine/)

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
2. Setup Github pages path. (If don't use github pages, you can skip this step.)
   1. Create /.env
   2. Write `VITE_GITHUB_PAGES_PATH=/github-pages-path` in .env.
      - Please refer .env.sample.
3. Run `npm i` command
4. Run `npm run dev` command

## Github-pages Deploy Flow

1. Setup Github Pages.
2. Create /.env .
   - Write `VITE_GITHUB_PAGES_PATH=/github-pages-path`.
3. Run `npm run build`.
   - If the command completes successfully, dist directory generated at root directory.
4. Rename dist directory to docs.
5. Push branch that setuped for Github Pages.

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
/
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
- spine-pixi-v8
  - [spine-pixi-v8ランタイムをリリースしました](https://ja.esotericsoftware.com/blog/spine-pixi-v8-runtime-released)
  - [spine-pixiランタイム ドキュメント](https://ja.esotericsoftware.com/spine-pixi)
