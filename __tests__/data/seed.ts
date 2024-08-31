import { Repository } from "typeorm";
import { BlogPost } from "../../src/models/blogPost";
import { AppDataSource } from "../../src/database";

const blogPostRepository: Repository<BlogPost> =
  AppDataSource.getRepository(BlogPost);

const blogs: any = [
  {
    featureImage: "image 1",
    mainContent: "content 1",
    excerpt: "excerpt 1",
    category: "category1234",
  },
  {
    featureImage: "image 2",
    mainContent: "content 2",
    excerpt: "excerpt 2",
    category: "category1234",
  },
  {
    featureImage: "image 3",
    mainContent: "content 3",
    excerpt: "excerpt 3",
    category: "category1234",
  },
  {
    featureImage: "image 4",
    mainContent: "content 4",
    excerpt: "excerpt 4",
    category: "category1234",
  },
  {
    featureImage: "image 5",
    mainContent: "content 5",
    excerpt: "excerpt 5",
    category: "category5678",
  },
  {
    featureImage: "image 6",
    mainContent: "content 6",
    excerpt: "excerpt 6",
    category: "category5678",
  },
  {
    featureImage: "image 7",
    mainContent: "content 7",
    excerpt: "excerpt 7",
    category: "category5678",
  },
  {
    featureImage: "image 8",
    mainContent: "content 8",
    excerpt: "excerpt 8",
    category: "category5678",
  },
];

export const seedData = async () => blogPostRepository.insert(blogs);
