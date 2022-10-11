import React from 'react'
import './Style/NewsPageOne.scss'

type Props = {}

const NewsPageOne = (props: Props) => {
    return (
        <div className="pageOne">
            <img
                src="https://cdn.sanity.io/images/l63eam7i/production/1821dffb0cef4dfb88fb2141e408038b6dcc4ec6-1200x769.jpg"
                alt=""
            />
            <article>
                <h1>
                    Luxembourg and Rwanda have joined forces to promote
                    sustainable finance
                </h1>
                <h2>
                    On March 23, the Luxembourg Stock Exchange (LuxSE) and the
                    Rwanda Stock Exchange (RSE) signed a long-term Memorandum of
                    Understanding and Cooperation (MoU), marking a new formal
                    milestone in the African country's development of
                    sustainable finance.
                </h2>
                <div className="text">
                    <p>
                        The MoU will promote cooperative cooperation on market
                        innovations and new products, in addition to
                        contributing to the smooth running of financial markets
                        through capacity building and skills development inside
                        the International Financial Centre in Kigali, Rwanda.
                        The possibility of a future dual listing system between
                        the two institutions is included.
                    </p>
                    <p>
                        In October 2021, Franz Fayot and Rwandan Minister of
                        Finance and Economic Planning, Dr. Uzziel Ndagijimana,
                        signed a first MoU (Memorandum of Understanding) on the
                        development of a financial center in Kigali, sustainable
                        finance, the creation of a fintech ecosystem, and an
                        impact investment market.
                    </p>
                    <p>
                        As Rwanda Stock Exchange CEO Pierre Célestin Rwabukumba
                        pointed out, the overarching goal is to develop
                        accessible and sustainable capital markets "LuxSE was
                        chosen for this project because it was the first
                        exchange to provide a platform for green financial
                        products. As a result, it is the ideal environment for
                        anybody from emerging or frontier markets to collaborate
                        and advance swiftly in the field of sustainable finance.
                        We're excited to help the market become more robust,
                        especially as everyone recovers from the Covid-19
                        outbreak and its effects."
                    </p>
                    <p>
                        Rwanda has implemented a number of programs to improve
                        climate change awareness both inside and outside its
                        boundaries. In 2019, it became the first African country
                        to prohibit single-use plastics, and in 2012, it
                        launched Africa's largest green fund, the National
                        Environment Support (Fonerwa), to fund its ambitious
                        objectives to achieve carbon neutrality and climate
                        resilience by 2050.
                    </p>
                </div>
            </article>
        </div>
    )
}

export default NewsPageOne
