import { Article } from '@mui/icons-material'
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
                        <Link to="/post/luxembourg-and-rwanda-have-joined-forces-to-promote-sustainable-finance">
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
                    <img src="https://cdn.sanity.io/images/l63eam7i/production/1821dffb0cef4dfb88fb2141e408038b6dcc4ec6-1200x769.jpg" />
                </article>
                <article className="w-full ">
                    <div>
                        <Link to="post/as-the-economic-crisis-in-sri-lanka-worsens-two-men-die-while-waiting-in-a-fuel-line">
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
                    <img src="https://cdn.sanity.io/images/l63eam7i/production/d9198d0ebb7eedf9a66b7ad8892d95d1f17109d7-1024x683.png" />
                </article>
            </section>
        </div>
    )
}

export default NewsPage
