// Components
import { HeroCard } from "./";

// Hooks React
import { useMemo } from "react";

// Helpers
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero} />
                ))
            }
        </div>
    )
}
