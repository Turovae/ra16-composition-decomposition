import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Banner from './components/Banner';
import News from './components/News/News';
import Search from './components/Search/Search';
import Services from './components/Services/Services';
import NewsItemProps from './interfaces/NewsItemProps';
import NewsItem from './components/News/NewsItem';
import Service from './components/Services/Service';

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
        <Services>
          <Service title='Service 1'>
            <div>Service content 1</div>
          </Service>
          <Service title='Service 2'>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </Service>
          <Service title='Service 3'>
            <div>Content service 3</div>
          </Service>
        </Services>
      </div>
    </>
  )
}

export default App
