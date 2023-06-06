import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Banner from './components/Banner';
import News from './components/News/News';
import Search from './components/Search/Search';
import Services from './components/Services/Services';
import NewsItemProps from './interfaces/NewsItemProps';
import NewsItem from './components/News/NewsItem';

const news: NewsItemProps[] = [
  {
    id: uuidv4(),
    name: 'news item 1',
    icon: 'news icon 1',
    href: '#',
  },
  {
    id: uuidv4(),
    name: 'news item 2',
    icon: 'news item 2',
    href: '#',
  },
  {
    id: uuidv4(),
    name: 'news item 3',
    icon: 'news item 3',
    href: '#',
  }
];

function App() {

  return (
    <>
      <div className="main block">
        <h1>Main block</h1>
        <News>
          {news.map((newsItem) => <NewsItem {...newsItem} key={newsItem.id} />)}
        </News>
        <Search />
        <Banner />
        <Services />
      </div>
    </>
  )
}

export default App
