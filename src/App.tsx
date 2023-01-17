import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/allesoares95.png',
      name: 'Alexandre Soares',
      role: 'Developer Web'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu GitHub 🚀'},
      {type: 'link', content: 'allesoares95/fundamentos-react' },
    ], 
    publishedAt: new Date('2023-01-14 12:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/C4D03AQGyTDF-HfmfLQ/profile-displayphoto-shrink_200_200/0/1579706244494?e=1679529600&v=beta&t=jsDAP4HSYtzLUiKswiBHqnhbv0gHC7U_yPDT-wmP-EQ',
      name: 'Joycy Morais',
      role: 'Auxiliar Administrativo'
    },
    content: [
      { type: 'paragraph', content: 'Adorei seu novo projeto',},
      {type: 'paragraph', content: ''},
      { type: 'link', content: 'allesoares95/fundamentos-react' },
    ], 
    publishedAt: new Date('2023-01-15 13:30:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </div>
  )
}
