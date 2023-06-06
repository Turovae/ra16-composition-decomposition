import './App.css';
import Banner from './components/Banner';
import News from './components/News/News';
import Search from './components/Search/Search';
import Services from './components/Services/Services';
import NewsItemProps from './interfaces/NewsItemProps';
import NewsItem from './components/News/NewsItem';

const news: NewsItemProps[] = [
  {
    name: 'news item 1',
    icon: 'news icon 1',
    href: '#',
  },
  {
    name: 'news item 2',
    icon: 'news item 2',
    href: '#',
  },
  {
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
          {/* {news.map((newsItem, index) => (
            <div key={index} className='news_item block'>
              <span className="news_icon">{newsItem.icon}</span> <a href={newsItem.href} className='news_title'>{newsItem.name}</a>
            </div>
          ))} */}
          {news.map((newsItem) => <NewsItem {...newsItem} />)}
        </News>
        <Search />
        <Banner />
        <Services />
      </div>
    </>
  )
}

export default App
