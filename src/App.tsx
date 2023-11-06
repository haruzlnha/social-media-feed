import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/haruzlnha.png",
      name: "Ana Sichieri",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. O nome do projeto é DevLinks 🚀",
      },
      { type: "link", content: "haru.portifolio.com/devlinks" },
    ],
    publishedAt: new Date("2023-11-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://media.licdn.com/dms/image/D4D03AQGHeNwT0-2b1Q/profile-displayphoto-shrink_800_800/0/1688665834547?e=2147483647&v=beta&t=drRx5Nx4hWHhP9lTOcAJwSPay2TjISK9Lz5ysPwi32c",
      name: "Lucas Piovani",
      role: "CEO @ PiCode",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Se liga nessa novidade na PiCode 🚀",
      },
      { type: "link", content: "picodeeducation.com.br" },
    ],
    publishedAt: new Date("2023-10-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
