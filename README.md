# Educational Content Browser

A simplified educational content browser built as a frontend coding exercise.

The application allows students to browse educational articles, search by title, filter by academic group, sort by publication date, and view article details.

## Tech Stack

- TypeScript
- React
- Next.js (App Router)
- Tailwind CSS
- Next.js Route Handlers
- Mock Data / API

## Features

- Browse educational articles
- Search articles by title
- Filter by academic group
- Sort by publication date
- View article details
- URL-based search, filter, and sort state
- Loading state
- Error state with retry
- Empty results state
- Responsive layout
- Accessible UI
- Type-safe data models

## Architecture

The project uses a simple separation between data fetching, API handling, and UI interaction.

```text
Articles Page
     │
     ▼
Article Service
     │
     ▼
Next.js API Route
     │
     ▼
Mock Data
     │
     ▼
ArticlesPageClient
     │
     ├── Search
     ├── Filter
     ├── Sort
     └── URL State
```
