import { AppDataSource } from "../index";
import { BlogPost } from "../../models/blogPost";

const CATEGORIES = [
  { name: "Science" },
  { name: "History" },
  { name: "Sports" },
  { name: "Anime" },
];

const IMAGES = [
  "https://wallpapers.com/images/featured/naruto-pictures-mlnh852tb7krwmzz.jpg",
  "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/naruto.jpg",
  "https://i2.wp.com/librairielabourse.com/wp-content/uploads/2016/11/naruto-wallpaper-Naruto-HD-Wallpaper-in-HD.jpg?fit=1170%2C731&ssl=1",
  "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/01/sasuke-naruto-and-sakura.jpg",
  "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/155/2023/08/27/9f3a8dfe802f2054e09c6d8f3e97c96d-3469266998.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVspjch5GZmTUgMLikbT_zxpqT88YzJHKTPLIQuHiCK5nDbHJFGfQjxKYQsouDWhcmZZw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75psx_yJtLrVIcH4Ym-3f9G9_PDQEcD1LwS7qm7Xu0IemV4igDu-Pm_fDJTdEsJ-qO44&usqp=CAU",
];

const blog = (index: number) => {
  const category = CATEGORIES[index % CATEGORIES.length];
  const image = IMAGES[index % IMAGES.length];

  return {
    category: category.name,
    mainContent:
      "# Naruto\n\n![Naruto](https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/s/l/6/large-naruto-poster-naruto-uzumaki-naruto-poster-naruto-wall-original-imagrpzveyng3sam.jpeg?q=90&crop=false) \n\n## Overview\n\n**Naruto** is a popular Japanese manga and anime series created by Masashi Kishimoto. The story revolves around Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.\n\n## Plot Summary\n\nNaruto grows up in the Hidden Leaf Village, where he is shunned by most villagers due to being the host of the Nine-Tails, a powerful demon fox that attacked the village. Despite this, Naruto is determined to become the Hokage, the strongest ninja and the leader of the village.\n\nThe series follows Naruto's journey from an underdog ninja to a hero, forming strong bonds with his friends Sasuke Uchiha and Sakura Haruno. As the story progresses, Naruto faces various challenges, learns powerful techniques, and uncovers dark secrets about his village and the ninja world.\n\n## Main Characters\n\n- **Naruto Uzumaki**: The main protagonist, a loud and energetic ninja with a dream to become the Hokage.\n- **Sasuke Uchiha**: Naruto's rival and teammate, who seeks revenge for his clan's destruction.\n- **Sakura Haruno**: A member of Naruto's team, skilled in medical ninjutsu and a close friend of Naruto and Sasuke.\n- **Kakashi Hatake**: The leader of Team 7, a skilled and mysterious ninja who hides his face behind a mask.\n\n## Themes\n\n- **Perseverance**: Naruto's determination to overcome obstacles and achieve his dream, despite being an outcast.\n- **Friendship**: The bonds between Naruto, Sasuke, and Sakura, and how they support each other through difficult times.\n- **Redemption**: Characters like Sasuke and other antagonists seek redemption for their past actions.\n- **Ninja Way**: The code of honor and principles that guide ninjas in their lives and missions.\n\n## Major Arcs\n\n1. **Introduction Arc**: Naruto's early days as a ninja and forming Team 7.\n2. **Chunin Exams Arc**: The ninja tournament where Naruto and his friends face powerful foes.\n3. **Sasuke Retrieval Arc**: Naruto and his friends' mission to bring back Sasuke after he leaves the village.\n4. **Shippuden**: Naruto's journey to bring peace to the ninja world and stop the Akatsuki organization.\n5. **Fourth Great Ninja War**: The final battles against powerful enemies threatening the world's peace.\n\n## Impact and Legacy\n\nNaruto has become one of the most successful anime and manga series of all time, influencing a generation of fans around the world. Its themes of perseverance, friendship, and redemption resonate with audiences, making it a beloved series in the anime community.\n\n## Trivia\n\n- **Author**: Masashi Kishimoto\n- **Manga**: Serialized in Weekly Shōnen Jump from 1999 to 2014.\n- **Anime**: Aired from 2002 to 2007 (Naruto) and 2007 to 2017 (Naruto Shippuden).\n- **Spin-offs**: \"Boruto: Naruto Next Generations\" follows Naruto's son, Boruto Uzumaki.\n\n## Watch the Anime\n\nYou can watch Naruto on popular streaming platforms like [Crunchyroll](https://www.crunchyroll.com) or [Netflix](https://www.netflix.com).\n\n## Conclusion\n\nNaruto is more than just a story about ninjas; it's a tale of growth, resilience, and the importance of never giving up on your dreams. Whether you're a long-time fan or new to the series, Naruto offers an unforgettable journey filled with action, emotion, and life lessons.\n\n---\n\n*Dattebayo!* 🌟\n",
    excerpt: `This is a blog on Naruto ${index}`,
    featureImage: image,
  };
};

async function seedData() {
  const connection = await AppDataSource.initialize();
  const blogRepository = connection.getRepository(BlogPost);

  const blogs: any = [...Array(100)].map((_, i) => blog(i));

  await blogRepository.insert(blogs);

  console.log("Seed data has been inserted.");

  await connection.destroy();
}

seedData().catch((error) => console.error("Error seeding data:", error));
