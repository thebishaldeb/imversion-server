export const BLOG_QUERY = `
    query($blogPostId: Int!) {
      blogPost(id: $blogPostId) {
        id
      }
    }
`;

export const BLOGS_QUERY = `
  query($limit: Int!, $offset: Int!) {
    blogPosts(limit: $limit, offset: $offset) {
      edges {
        id
      }
    }
  }
`;

export const BLOGS_WITH_CATEGORY_QUERY = `
  query($category: String!, $limit: Int!, $offset: Int!) {
    blogPostsByCategory(category: $category, limit: $limit, offset: $offset) {
      edges {
        id
      }
    }
  }
`;
