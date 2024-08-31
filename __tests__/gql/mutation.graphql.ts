export const CREATE_BLOG = `
  mutation($featureImage: String!, $mainContent: String!, $excerpt: String!, $category: String!) {
    createBlogPost(featureImage: $featureImage, mainContent: $mainContent, excerpt: $excerpt, category: $category) {
      id
      category
      featureImage
      excerpt
      mainContent
    }
  }
`;

export const REMOVE_BLOG = `
  mutation($deleteBlogPostId: Int!) {
    deleteBlogPost(id: $deleteBlogPostId)
  }
`;
