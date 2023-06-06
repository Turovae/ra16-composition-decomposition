/**
 * 
 * @returns News block
 */

function News(props: any) {
  return (
    <div className="news block">
      <h2>News block</h2>
      {props.children}
    </div>
  )
}

export default News;
