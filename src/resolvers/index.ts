import { BlogPost } from "../models/blogPost";
import { AppDataSource } from "../database";
import { Repository } from "typeorm";

const blogPostRepository: Repository<BlogPost> =
  AppDataSource.getRepository(BlogPost);

const resolvers = {
  Query: {
    // Fetch a single blog post by ID
    blogPost: async (_: any, { id }: { id: number }) => {
      return await blogPostRepository.findOneBy({ id });
    },

    // Fetch a list of blog posts with pagination
    blogPosts: async (
      _: any,
      { limit, offset }: { limit: number; offset: number }
    ) => {
      const [blogs, totalCount] = await blogPostRepository.findAndCount({
        take: limit,
        skip: offset,
      });

      const endCursor = offset + blogs.length;
      const hasNextPage = endCursor < totalCount;

      return {
        totalCount,
        edges: blogs,
        pageInfo: {
          endCursor,
          hasNextPage,
        },
      };
    },

    // Fetch blog posts by category
    blogPostsByCategory: async (
      _: any,
      {
        category,
        limit,
        offset,
      }: { category: string; limit: number; offset: number }
    ) => {
      const [blogs, totalCount] = await blogPostRepository.findAndCount({
        where: { category },
        take: limit,
        skip: offset,
      });

      const endCursor = offset + blogs.length;
      const hasNextPage = endCursor < totalCount;

      return {
        totalCount,
        edges: blogs,
        pageInfo: {
          endCursor,
          hasNextPage,
        },
      };
    },
  },

  Mutation: {
    // Create a new blog post
    createBlogPost: async (
      _: any,
      {
        featureImage,
        mainContent,
        excerpt,
        category,
      }: {
        featureImage: string;
        mainContent: string;
        excerpt: string;
        category: string;
      }
    ) => {
      const newPost = blogPostRepository.create({
        featureImage,
        mainContent,
        excerpt,
        category,
      });
      return await blogPostRepository.save(newPost);
    },

    // Delete a blog post by ID
    deleteBlogPost: async (_: any, { id }: { id: number }) => {
      const post = await blogPostRepository.findOneBy({ id });
      if (!post) {
        return false;
      }
      await blogPostRepository.remove(post);
      return true;
    },
  },
};

export default resolvers;
