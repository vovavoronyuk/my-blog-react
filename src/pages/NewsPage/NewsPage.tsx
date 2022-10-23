import React from 'react'
import { Link } from 'react-router-dom'
import './NewsPage.scss'

type Props = {}

const NewsPage = (props: Props) => {
    return (
        <div className=" px-10 ">
            <section className="flex">
                <article className=" w-full ">
                    <div>
                        <Link to="/post-one" className="link">
                            <p className="cursor">World</p>
                        </Link>
                        <h2 className="text-2 ">
                            Luxembourg and Rwanda have joined forces to promote
                            sustainable finance
                        </h2>
                        <p>
                            On March 23, the Luxembourg Stock Exchange (LuxSE)
                            and the Rwanda Stock Exchange (RSE) signed a
                            long-term Memorandum of Understanding and
                            Cooperation (MoU), marking a new formal milestone in
                            the African country's development of sustainable
                            finance.
                        </p>
                    </div>
                    <img src="images/123.jpg" />
                </article>
                <article className="w-full ">
                    <div>
                        <Link to="/post-two" className="link">
                            <p className="cursor">World</p>
                        </Link>
                        <h2 className="text-2 ">
                            As the economic crisis in Sri Lanka worsens, two men
                            die while waiting in a fuel line
                        </h2>
                        <p>
                            According to a police spokeswoman in Colombo's
                            commercial hub, the men, who were in their sixties,
                            died while waiting for petrol and kerosene oil in
                            two separate sections of the nation.
                        </p>
                    </div>
                    <img src="images/321.png" />
                </article>
            </section>
        </div>
    )
}

export default NewsPage
