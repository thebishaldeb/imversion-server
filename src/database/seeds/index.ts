import { AppDataSource } from "../index";
import { BlogPost } from "../../models/blogPost";

async function seedData() {
  const connection = await AppDataSource.initialize();
  const blogRepository = connection.getRepository(BlogPost);

  const blogs: any = [
    {
      featureImage:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/j/i/s/small-anime-poster-of-naruto-uzumaki-from-the-anime-series-original-imagtbtahyqqd9qg.jpeg?q=90&crop=false",
      mainContent: "content 1",
      excerpt: "excerpt 1",
      category: "category1234",
    },
    {
      featureImage: "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg",
      mainContent: "content 2",
      excerpt: "excerpt 2",
      category: "category1234",
    },
    {
      featureImage:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/j/i/s/small-anime-poster-of-naruto-uzumaki-from-the-anime-series-original-imagtbtahyqqd9qg.jpeg?q=90&crop=false",
      mainContent: "content 3",
      excerpt: "excerpt 3",
      category: "category1234",
    },
    {
      featureImage: "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg",
      mainContent: "content 4",
      excerpt: "excerpt 4",
      category: "category1234",
    },
    {
      featureImage:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/j/i/s/small-anime-poster-of-naruto-uzumaki-from-the-anime-series-original-imagtbtahyqqd9qg.jpeg?q=90&crop=false",
      mainContent: "content 5",
      excerpt: "excerpt 5",
      category: "category5678",
    },
    {
      featureImage: "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg",
      mainContent: "content 6",
      excerpt: "excerpt 6",
      category: "category5678",
    },
    {
      featureImage:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/j/i/s/small-anime-poster-of-naruto-uzumaki-from-the-anime-series-original-imagtbtahyqqd9qg.jpeg?q=90&crop=false",
      mainContent: "content 7",
      excerpt: "excerpt 7",
      category: "category5678",
    },
    {
      featureImage: "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg",
      mainContent: "content 8",
      excerpt: "excerpt 8",
      category: "category5678",
    },
  ];

  await blogRepository.insert(blogs);

  console.log("Seed data has been inserted.");

  await connection.destroy();
}

seedData().catch((error) => console.error("Error seeding data:", error));
