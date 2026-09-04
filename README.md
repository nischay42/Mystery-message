# Mystery Message

Mystery Message is a full-stack anonymous messaging platform. Users can create an account, choose a unique username, share a personal profile link, and receive anonymous messages. Authenticated users can manage their messages from a personal dashboard, control whether messages are accepted, and use AI-assisted message suggestions.

## Features

- User registration and sign-in
- Email verification
- Unique public username and profile links
- Anonymous message submission
- Personal dashboard for viewing and deleting messages
- Toggle for accepting or stopping new messages
- AI-generated message suggestions
- Responsive interface built with reusable UI components

## Tech Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS
- shadcn-style UI components and Lucide icons
- NextAuth for authentication
- Prisma ORM with PostgreSQL
- Resend for verification emails
- Google Gemini and Groq SDKs for AI features
- Zod and React Hook Form for validation
- Axios and Sonner for client-side requests and notifications

## Folder Structure

```text
mistrymessage/
├── emails/                  # Transactional email templates
├── generated/prisma/        # Generated Prisma client
├── prisma/
│   ├── migrations/          # Database migrations
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
├── src/
│   ├── app/                 # App Router pages, layouts, and API routes
│   │   ├── (app)/           # Authenticated application pages
│   │   ├── (auth)/          # Sign-in, sign-up, verification, and profiles
│   │   └── api/             # Backend API route handlers
│   ├── components/          # Shared React components
│   ├── context/             # React context providers
│   ├── helpers/             # Application helper functions
│   ├── lib/                 # Prisma, email, and utility configuration
│   ├── schemas/             # Zod validation schemas
│   └── types/               # Shared TypeScript types and declarations
├── .env                     # Local environment variables
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## Prerequisites

- Node.js 20.9 or later
- npm
- A PostgreSQL database
- A Resend account and API key
- A Google Gemini API key
- A secure NextAuth secret

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nischay42/Mystery-message.git
cd mistrymessage
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="your-postgresql-connection-string"
NEXTAUTH_SECRET="your-nextauth-secret"
RESEND_API_KEY="your-resend-api-key"
GEMINI_API_KEY="your-gemini-api-key"
```

Use your own credentials and keep the `.env` file private.

### 4. Set up the database

Generate the Prisma client and apply the migrations:

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```

## Production

Build and start the application with:

```bash
npm run build
npm run start
```
