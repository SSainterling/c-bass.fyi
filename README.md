# C-Bass.fyi

A modern web application built with Next.js, React, and Tailwind CSS.

## 🚀 Features

- Next.js 13+ App Router
- TypeScript support
- Tailwind CSS for styling
- Dark/light mode support
- Responsive design
- Markdown content support

## 🛠️ Prerequisites

- Node.js 18.0.0 or later
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SSainterling/c-bass.fyi.git
cd c-bass.fyi
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add the necessary environment variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Other environment variables
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Build and Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Linting and Formatting

```bash
# Run linter
npm run lint

# Format code with Prettier
npx prettier --write .
```

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 13+
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Headless UI](https://headlessui.com/), [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Authentication**: [Clerk](https://clerk.com/)
- **State Management**: [SWR](https://swr.vercel.app/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Content**: [Contentlayer](https://www.contentlayer.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Clerk Documentation](https://clerk.com/docs)
