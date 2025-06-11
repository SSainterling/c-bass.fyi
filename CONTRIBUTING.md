# Contributing to C-Bass.fyi

Thank you for your interest in contributing to C-Bass.fyi! We appreciate your time and effort in making this project better.

## 🛠️ Development Setup

1. Fork the repository on GitHub
2. Clone your fork locally
   ```bash
   git clone https://github.com/your-username/c-bass.fyi.git
   cd c-bass.fyi
   ```
3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```
4. Set up environment variables (copy from `.env.example` to `.env.local` and update values)
5. Start the development server
   ```bash
   npm run dev
   ```

## 🧪 Testing

Before submitting a pull request, please ensure that:

1. Your code passes all existing tests
   ```bash
   npm test
   ```
2. Your code is properly formatted
   ```bash
   npm run format
   ```
3. There are no linting errors
   ```bash
   npm run lint
   ```

## 📝 Pull Request Process

1. Create a new branch for your feature or bugfix
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-number-short-description
   ```
2. Make your changes and commit them with a descriptive message
   ```bash
   git commit -m "feat: add new feature"
   # or
   git commit -m "fix: resolve issue with login"
   ```
3. Push your branch to your fork
   ```bash
   git push origin your-branch-name
   ```
4. Open a pull request against the `main` branch
5. Ensure all CI checks pass
6. Request a code review from a maintainer

## 📚 Code Style

- Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages
- Use TypeScript for all new code
- Follow the existing code style and patterns
- Keep components small and focused on a single responsibility
- Write meaningful comments and documentation

## 🐛 Reporting Bugs

If you find a bug, please open an issue with:

- A clear title and description
- Steps to reproduce the issue
- Expected vs. actual behavior
- Screenshots or videos if applicable
- Browser/device information

## 💡 Feature Requests

We welcome feature requests! Please open an issue with:

- A clear description of the feature
- The problem it solves
- Any alternative solutions you've considered
- Additional context or examples

## 📄 License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
