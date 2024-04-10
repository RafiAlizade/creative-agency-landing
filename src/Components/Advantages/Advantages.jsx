import './Advantages.css'

function Advantages() {

    const advantages = [
        {
            advantagesNumber : '01',
            advantagesName : 'Brand Strategy',
            advantagesDescription : 'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.'
        },
        {
            advantagesNumber : '02',
            advantagesName : 'Brand Design',
            advantagesDescription : 'Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.'
        },
        {
            advantagesNumber : '03',
            advantagesName : 'Web Design',
            advantagesDescription : 'A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues. '
        }
    ]


    return (
        <section className="app_advantages">
            <div className="advantages__inner">
                <div className="advantages__left">
                <span className="advantages__desc">
                    Our approach for creating a winning brand
                </span>
                </div>

                <div className="advantages__right">
                    <div className="advantages__container">

                        {advantages.map((objects , keys) => (
                            <div className="advantages__box" key={keys}>
                            <div className="advantages_op_number">
                                <span className="advantages_number">{objects.advantagesNumber}</span>
                            </div>

                            <div className="advantages_main_texts">
                            <div className="advantages_name">
                                <span className="advantages_name_span">{objects.advantagesName}</span>
                            </div>

                            <div className="advantages_description">
                                <span className="advantages_description_par">
                                {objects.advantagesDescription}
                                </span>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Advantages;