# Contribution Guide

Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Code of Conduct](https://github.com/TAS-Technologies-Group/ttg-toolbox-docs/blob/main/code-of-conduct.md)
- [Fork, Clone, Code](#fork-clone-code)
- [Pull Request Guidelines](#pull-request-guidelines)

## Fork, Clone, Code

1. **Fork the Repository**: Navigate to the [main repository](https://github.com/TAS-Technologies-Group/ttg-toolbox-docs), and click the "Fork" button in the upper right corner. This will create a copy of the repository in your own GitHub account.

2. **Clone the Forked Repository**: Clone your forked repository to your local machine. Replace `yourusername` with your GitHub username.

```bash
git clone https://github.com/yourusername/ttg-toolbox-docs.git
```

3. **Create a New Branch:** Navigate into the cloned repository and create a new branch for your changes. Replace `your-branch-name` with a name that describes the changes you're making.

```bash
cd ttg-toolbox-docs
git checkout -b your-branch-name
```

4. **Make Your Changes:** Make the changes you want to contribute. Be sure to thoroughly test your changes.

5. **Commit Your Changes:** Stage and commit your changes.

```bash
git add .
git commit -m "Describe your changes here"
```

6. **Push Your Changes:** Push your changes to your forked repository.

```bash
git push origin your-branch-name
```

7. **Submit a Pull Request:** Navigate to your forked repository on GitHub, and click the "New pull request" button. Ensure your pull request is being made from your new branch to the `main` branch of the original repository.

We appreciate detailed pull requests. Let us know what changes you made, why you made them, and which issues you're addressing.

## Pull Request Guidelines

- If the change is minor, such as a typo or modification to verbiage, checkout `main`, and merge back against it.

- For major changes, create a new branch.

  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- It's OK to have multiple small commits as you work on the pull request - GitHub can automatically squash them before merging.

- Commit messages should be detailed.

## Development Setup

You will need Node.js and npm.

After cloning the repo, run:

```bash
# cd into the repository
$ cd ttg-toolbox-docs
# install the dependencies of the project
$ npm install
```

### Setup a Dev Environment

The easiest way to start testing is to tweak the docs. You may run `npm run docs:dev` to boot up the documentation site locally, with live reloading of the source code.

```bash
$ npm run docs:dev
```

After executing the above command, visit http://localhost:5173 and try modifying the source code. You'll get live updates.
