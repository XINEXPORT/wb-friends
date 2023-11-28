import express from 'express';
import ViteExpress from 'vite-express';
import morgan from 'morgan';

const app = express();
const port = 8000;
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

const SAVED_FRIENDS = [
  { name: 'Beach Cat', picture: 'https://http.cat/images/301.jpg' },
  { name: 'Shy Cat', picture: 'https://http.cat/images/404.jpg' },
  { name: 'Robo Kitty', picture: 'https://http.cat/images/500.jpg' },
  { name: 'Pup', picture: 'https://images.dog.ceo/breeds/terrier-lakeland/n02095570_763.jpg'}
];

app.get('/api/friends', (req, res) => {
  res.json(SAVED_FRIENDS);
});

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));
