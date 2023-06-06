import NewsItemProps from "../../interfaces/NewsItemProps";

function NewsItem(props: NewsItemProps) {
  /**
   * props:
   * @param {icon} link to the icon
   */
  return (
    <div className="news_item block">
      <a href={props.href}><span>{props.icon}</span> <span>{props.name}</span></a>
    </div>
  )
}

export default NewsItem;
