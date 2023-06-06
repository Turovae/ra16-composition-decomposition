import { ReactElement } from "react";

/**
 * 
 * @returns News block
 */

function News(props: {
  children: ReactElement[]
}) {
  console.log(props);
  return (
    <div className="news block">
      <h2>News block</h2>
      {props.children}
    </div>
  )
}

export default News;
