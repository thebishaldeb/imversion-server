import { seedData } from "../data/seed";
import { CREATE_BLOG, REMOVE_BLOG } from "../gql/mutation.graphql";
import {
  BLOGS_QUERY,
  BLOGS_WITH_CATEGORY_QUERY,
  BLOG_QUERY,
} from "../gql/query.gaphql";
import { request } from "../utils/client";
import { setupDb } from "../utils/db";

// Connects to database
beforeAll(async () => {
  await setupDb().then(() => seedData());
});

test("get blog", async () => {
  const response: any = await request(BLOG_QUERY, {
    blogPostId: 2,
  });
  expect(response.data.blogPost.id).toBe(2);
});

test("get blog:null", async () => {
  const response: any = await request(BLOG_QUERY, {
    blogPostId: 20,
  });
  expect(response.data.blogPost).toBeNull();
});

test("get blog:fail", async () => {
  const response: any = await request(BLOG_QUERY, {});
  expect(response.errors).not.toBeNull();
});

test("get blogs", async () => {
  const response: any = await request(BLOGS_QUERY, {
    limit: 3,
    offset: 0,
  });
  expect(response.data.blogPosts?.edges?.length).toBe(3);
});

test("get blogs:empty", async () => {
  const response: any = await request(BLOGS_QUERY, {
    limit: 3,
    offset: 30,
  });
  expect(response.data.blogPosts?.edges?.length).toBe(0);
});

test("get blogs:fail", async () => {
  const response: any = await request(BLOGS_QUERY, {
    offset: 30,
  });
  expect(response.errors).not.toBeNull();
});

test("get blogs with category", async () => {
  const response: any = await request(BLOGS_WITH_CATEGORY_QUERY, {
    limit: 3,
    offset: 0,
    category: "category1234",
  });
  expect(response.data.blogPostsByCategory?.edges?.length).toBe(3);
});

test("get blogs with category:empty", async () => {
  const response: any = await request(BLOGS_WITH_CATEGORY_QUERY, {
    limit: 3,
    offset: 0,
    category: "category910",
  });
  expect(response.data.blogPostsByCategory?.edges?.length).toBe(0);
});

test("get blogs with category:fail", async () => {
  const response: any = await request(BLOGS_WITH_CATEGORY_QUERY, {
    offset: 30,
    category: "category1234",
  });
  expect(response.errors).not.toBeNull();
});

test("create blog", async () => {
  const response: any = await request(CREATE_BLOG, {
    featureImage: "img",
    mainContent: "main",
    excerpt: "ex",
    category: "c1",
  });
  expect(response.data.createBlogPost.mainContent).toBe("main");
});

test("create blog:fail", async () => {
  const response: any = await request(CREATE_BLOG, {
    featureImage: "img",
    mainContent: "main",
    excerpt: "ex",
  });
  expect(response.errors).not.toBeNull();
});

test("delete blog", async () => {
  const response: any = await request(REMOVE_BLOG, {
    deleteBlogPostId: 1,
  });
  expect(response.data.deleteBlogPost).toBe(true);
});

test("delete blog:fail", async () => {
  const response: any = await request(REMOVE_BLOG, {
    deleteBlogPostId: 20,
  });
  expect(response.data.deleteBlogPost).toBe(false);
});
