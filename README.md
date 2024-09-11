# Next.js + Mantine UI + TypeScript Starter and Boilerplate

<div align="center">
  <h2>🔋 ts-nextjs-mantine-starter</h2>
  <p>Next.js 14+, Mantine UI, TypeScript starter packed with useful development features.</p>
  <p>Made by <a href="https://www.onedev.my.id/">OneDev</a></p>

<!-- [![GitHub Repo stars](https://img.shields.io/github/stars/theodorusclarence/ts-nextjs-tailwind-starter)](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter/stargazers)
[![Depfu](https://badges.depfu.com/badges/fc6e730632ab9dacaf7df478a08684a7/overview.svg)](https://depfu.com/github/theodorusclarence/ts-nextjs-tailwind-starter?project_id=30160)
[![Last Update](https://img.shields.io/badge/deps%20update-every%20sunday-blue.svg)](https://shields.io/) -->

</div>

### Features

Developer experience first, extremely flexible code structure and only keep what you need:

- ⚡ [Next.js](https://nextjs.org) with App Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Mantine UI](https://mantine.dev)
- ✅ Strict Mode for TypeScript and React 18
- ♻️ Type-safe environment variables with T3 Env
- ⌨️ Form handling with React Hook Form
- 🔴 Validation library with Zod
- ⏲️ Date config with [Dayjs](https://day.js.org/en/)
- 📏 Linter with [ESLint](https://eslint.org) (default Next.js, Next.js Core Web Vitals, Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Settings
- 🤖 SEO metadata, Open Graph tags
- 🗺️ Sitemap.xml and robots.txt
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Requirements

- Node.js 20+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/MTeguhIrawan1996/singulartw.git my-project-name
cd my-project-name
yarn
```

Then, you can run the project locally in development mode with live reload by executing:

```shell
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Project structure

```shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── services                    # Api Services folder
│   ├── libs                        # 3rd party libraries configuration
│   ├── styles                      # Styles folder
│   ├── types                       # Type definitions
│   ├── utils                       # Utilities folder
│   └── test-utils                  # Testing utilities config
└── tsconfig.json                   # TypeScript configuration

```

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
yarn git:commit
```
