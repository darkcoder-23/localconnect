\# LocalConnect



LocalConnect is a platform for discovering local home service professionals and property brokers.



The project is currently in the frontend development phase, built with Next.js, React, TypeScript, and Tailwind CSS.



\## Project Structure



```text

localconnect/

├── .github/

│   └── workflows/

│       └── frontend-check.yml

├── frontend/

│   ├── public/

│   ├── src/

│   ├── package.json

│   ├── package-lock.json

│   └── ...

├── .gitignore

└── README.md

```



\## Technology Stack



\- Next.js

\- React

\- TypeScript

\- Tailwind CSS

\- shadcn/ui

\- Lucide React

\- React Hook Form

\- Zod



\## Prerequisites



\- Node.js 22 recommended

\- npm (included with Node.js)

\- Git



\## Getting Started



\### 1. Clone the repository



```bash

git clone https://github.com/darkcoder-23/localconnect.git

```



\### 2. Open the frontend directory



```bash

cd localconnect/frontend

```



\### 3. Install dependencies



```bash

npm install

```



\*\*Why is this required?\*\*



The `node\_modules` directory is excluded from Git to avoid storing thousands of dependency files in the repository.



The repository contains `package.json` and `package-lock.json`, which describe the required dependencies.



When cloning the repository on a new computer, run `npm install` to download the dependencies and create the `node\_modules` directory.



You normally only need to do this once per fresh clone, or when dependencies change.



\### 4. Start the development server



```bash

npm run dev

```



Open your browser:



http://localhost:3000



\## Available Commands



Run these commands from the `frontend` directory.



| Command | Description |

|---|---|

| `npm install` | Install project dependencies |

| `npm run dev` | Start development server |

| `npm run build` | Create production build |

| `npm run start` | Start production server |

| `npm run lint` | Run ESLint checks |

| `npx tsc --noEmit` | Check TypeScript types |



\## GitHub Actions



GitHub Actions runs frontend quality checks on pushes and pull requests targeting `main`.



Checks include:



\- Dependency installation

\- ESLint

\- TypeScript validation

\- Next.js production build



\## Product Scope



LocalConnect focuses on two discovery sections:



1\. \*\*Home Services\*\* – Discover local home service professionals.

2\. \*\*Find Brokers\*\* – Discover local property brokers based on location, accommodation types handled, and budget range handled.



LocalConnect displays broker profiles, not individual property listings.



\## Development Status



The project is currently frontend-first.



Backend development and API integration will be added in a later phase.

