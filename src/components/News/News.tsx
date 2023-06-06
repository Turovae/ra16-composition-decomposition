import { ReactElement } from "react";

/**
 * 
 * @returns News block
 */

function News({ children }: {
  children: ReactElement[] | ReactElement
}) {
  return (
    <div className="news block">
      <h2>News block</h2>
      {children}
    </div>
  )
}

export default News;
