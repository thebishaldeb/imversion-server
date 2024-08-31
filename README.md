# Blog Management API

## Overview

This project is a Node.js-based GraphQL API for managing blog posts. It allows users to create, delete, and fetch blog posts, including support for pagination and filtering by category.

## Features

- **Create Blog Post**: Add new blog posts with a feature image, content, excerpt, and category.
- **Delete Blog Post**: Remove blog posts by ID.
- **Fetch Blog Posts**: Retrieve a list of blog posts with pagination support.
- **Fetch Blog Posts by Category**: Filter blog posts by category with pagination.

## Tech Stack

- **Node.js**: Backend runtime environment.
- **TypeScript**: For type-safe JavaScript.
- **GraphQL**: API query language.
- **Apollo Server**: GraphQL server implementation.
- **TypeORM**: ORM for interacting with the PostgreSQL database.
- **PostgreSQL**: Relational database management system.
- **Jest**: Testing framework.

## Getting Started

### Prerequisites

- **Node.js**
- **npm**
- **PostgreSQL**
- **Docker compose**

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/thebishaldeb/imversion-server.git
   cd imversion-server
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and copy the values from `.env.example` in it.

### Database Setup

1. **Start the PostgreSQL DB in docker:**

   ```bash
   docker compose up
   ```

2. **Seed the DB:**

   ```bash
   npm run seed
   ```

### Running the Application

1. **Start the Server:**

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:4000`.

### Testing

#### Setup Test Database

- **In-Memory Database (SQLite):**
  No additional setup is required; Jest will use an in-memory SQLite database.

#### Running Tests

- **Run All Tests:**

  ```bash
  npm test
  ```

  - It covers the all graphql requests present in the schema.
  - It will also show the test and coverage report in the console. We can also view the coverage report by opening the `<root>\coverage\lcov-report\index.html` file in browser

### Project Structure

```bash
├── src
│   ├── database
│   │   └── index.ts          # TypeORM data source configuration
│   ├── models
│   │   └── blogPost.ts      # Blog post entity definition
│   ├── resolvers
│   │   └── index.ts         # GraphQL resolvers
│   ├── typeDefs
│   │   └── index.ts         # GraphQL schema
│   └── index.ts             # Server entry point
├── __tests__                # Test files
├── jest.config.js           # Jest configuration
└── .env                     # Environment variables
```

### GraphQL API

#### Queries

- **Get a Blog Post by ID:**

  ```graphql
  query ($blogPostId: Int!) {
    blogPost(id: $blogPostId) {
      id
      category
      featureImage
      excerpt
      mainContent
    }
  }
  ```

- **Get Paginated Blog Posts:**

  ```graphql
  query ($limit: Int!, $offset: Int!) {
    blogPosts(limit: $limit, offset: $offset) {
      totalCount
      edges {
        id
        category
        featureImage
        excerpt
        mainContent
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ```

- **Get Blog Posts by Category:**
  ```graphql
  query ($category: String!, $limit: Int!, $offset: Int!) {
    blogPostsByCategory(category: $category, limit: $limit, offset: $offset) {
      totalCount
      edges {
        id
        category
        featureImage
        excerpt
        mainContent
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ```

#### Mutations

- **Create a Blog Post:**

  ```graphql
  mutation (
    $featureImage: String!
    $mainContent: String!
    $excerpt: String!
    $category: String!
  ) {
    createBlogPost(
      featureImage: $featureImage
      mainContent: $mainContent
      excerpt: $excerpt
      category: $category
    ) {
      id
      category
      featureImage
      excerpt
      mainContent
    }
  }
  ```

- **Delete a Blog Post:**
  ```graphql
  mutation ($deleteBlogPostId: Int!) {
    deleteBlogPost(id: $deleteBlogPostId)
  }
  ```

---
