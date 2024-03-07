# TTG Toolbox Docs

https://docs.ttgtoolbox.com

We ❤️ contributions! Please open a pull request if something seems incorrect or could be explained better.

## Installation

This site is built using [VitePress](https://vitepress.dev/), a static site generate based on the [Vue.js](https://vuejs.org/) framework and built on [Vite](https://github.com/vitejs/vite).

## Local Development

> [!TIP]
> If you're an outside developer and would like to contribute to the project, see [Contributing](https://github.com/TAS-Technologies-Group/ttg-toolbox-docs/blob/main/contributing.md)

1. First, clone the repository to your local machine. Open your terminal and run:

```bash
git clone https://github.com/TAS-Technologies-Group/ttg-toolbox-docs.git
```

2. Navigate into the cloned repository:

```bash
cd ttg-toolbox-docs
```

3. Install the necessary dependencies. Since this project uses VitePress, you'll need Node.js and npm already installed. Run:

```bash
npm install
```

4. Start the local development server:

```bash
npm run docs:dev
```

Now, you can open your browser and navigate to http://localhost:5173 (or whatever port your console indicates) to see the site running locally. Any changes you make to the source files will automatically be reflected in the browser.

## Build & Preview

1. Before committing to `main`, be sure to run a build. The build process include several checks, such as dead link detection.

```bash
npm run docs:build
```

2. Preview the build.

```bash
npm run docs:preview
```

The preview build will be server at http://localhost:4173/

## Deploying to Production

This repository is part of a CI/CD pipeline. Commits to the origin's `main` branch will trigger a production deployment.

## Contributions

[Contributing](https://github.com/TAS-Technologies-Group/ttg-toolbox-docs/blob/main/contributing.md)

## License

[MIT](https://github.com/TAS-Technologies-Group/ttg-toolbox-docs/blob/main/LICENSE)

Copyright (c) 2023-present, TAS Technologies Group
