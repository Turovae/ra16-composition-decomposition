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
    name: 'news name 1',
    icon: 'icon 1',
    href: '#',
  },
  {
    id: uuidv4(),
    name: 'news name 2',
    icon: 'icon 2',
    href: '#',
  },
  {
    id: uuidv4(),
    name: 'news name 3',
    icon: 'icon 3',
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
