const typeDefs = `#graphql
type BlogPost {
    id: Int!
    featureImage: String!
    mainContent: String!
    excerpt: String!
    category: String!
  }

  type Query {
    blogPost(id: Int!): BlogPost
    blogPosts(limit: Int!, offset: Int!): BlogsList!
    blogPostsByCategory(category: String!, limit: Int!, offset: Int!): BlogsList!
  }

  type BlogsList {
    """
    Total no of blogs
    """
    totalCount: Int!
    """
    List of blogs retrieved by the query.
    """
    edges: [BlogPost!]!
    """
    'pageInfo' specifies if further queries would provide more blogs.
    """
    pageInfo: PageInfo!
  }

  type PageInfo {
    """
    'endCursor' suggests the doc no of the last doc retrieved.
    """
    endCursor: Int!
    """
    'hasNextPage' specifies if there are more docs to retrieve.
    """
    hasNextPage: Boolean!
  }

  type Mutation {
    createBlogPost(
      featureImage: String!,
      mainContent: String!,
      excerpt: String!,
      category: String!
    ): BlogPost!

    deleteBlogPost(id: Int!): Boolean
  }
`;

export default typeDefs;
