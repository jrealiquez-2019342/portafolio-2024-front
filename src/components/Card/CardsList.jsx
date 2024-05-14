import { Cards } from './Cards'

export const CardsList = ({ cardsApi }) => {

    return (
        <div className="container mx-auto mt-2">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    cardsApi.map((card) => (
                        <Cards
                            key={card._id}
                            imagen={card.urlImage}
                            nameTask={card.title}
                            description={card.description}
                            bimester={card.bimester}
                            week={card.week}
                            linkTask={card.urlTask}
                            habilities={card.habilities}
                            course={card.course}
                            user={card.user}
                        />
                    ))
                }
            </div>
        </div>
    )
}
