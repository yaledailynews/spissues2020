import express from 'express';
import exphbs from 'express-handlebars';
import sassMiddleware from 'node-sass-middleware';
import { join } from 'path';

let app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(
  sassMiddleware({
    src: join(__dirname, 'styles'),
    dest: join(__dirname, 'public'),
    debug: true,
    outputStyle: 'expanded',
    prefix: '/public',
  })
);

type Section =
  | 'WKND'
  | 'Opinion'
  | 'News'
  | 'University'
  | 'City'
  | 'Sports'
  | 'Sci-Tech'
  | 'Culture'
  | 'YTV'
  | 'Mag';

interface Story {
  title: string;
  imageURL: string;
  blurb: String;
  authors: string;
  section: Section;
  published: Date;
}

const images = [
  'https://ydn-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-29-at-3.57.17-PM.png',
  'https://ydn-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/ventilator_COEddieGreen.jpg',
];

const titles = [
  'The Hidden Charge: Connecticut’s Fight for Free Prison Phone Calls',
  'FOOTBALL: Dieter Eiselen ’20 signs with Chicago Bears',
  'POETRY: For Earth Day, 2020',
  'Jean Bennett ’76 to speak at Class Day',
  'Red Hot Poker moves end-of-year show to YouTube',
];

const authors = [
  'David Evans',
  'Adrian Rivera',
  'Emily Tian & Matt Kristoffersen',
];

function mulberry32(a: number) {
  return function () {
    var t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const random = mulberry32(216);
function randomChoice<T>(arr: Array<T>) {
  return arr[Math.floor(random() * arr.length)];
}

function generateStory(section: Section): Story {
  return {
    title: randomChoice(titles),
    imageURL: randomChoice(images),
    blurb:
      'This is where the blurb would go. Blurb blurb blurb, blurb blurb blurb blurb blurb.',
    authors: randomChoice(authors),
    section,
    published: new Date(),
  };
}

const stories = {
  WKND: [...Array(15)].map(() => generateStory('WKND')),
  opinion: [...Array(5)].map(() => generateStory('Opinion')),
  News: [...Array(5)].map(() => generateStory('News')),
  sports: [...Array(5)].map(() => generateStory('sports')),

};

app.use('/public', express.static(join(__dirname, 'public')));

// This is where you can add new pages.
app.get('/', function (_req, res) {
  res.render('home', { stories });
});

app.get('/news', function (_req, res) {
  res.render('news', { stories });
});

app.get('/wknd', function (_req, res) {
  res.render('wknd', { stories });
});

app.get('/sports', function (_req, res) {
  res.render('sports', { stories });
});

app.get('/opinion', function (_req, res) {
  res.render('opinion', { stories });
});

app.get('/other', function (_req, res) {
  res.render('other', { data: 'string' });
});

app.listen(3000);
console.log('Open http://localhost:3000/ to see your website.');
