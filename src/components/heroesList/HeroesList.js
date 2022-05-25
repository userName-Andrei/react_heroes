import {useHttp} from '../../hooks/http.hook';
import { useEffect, useCallback } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';

import { heroesFetchingError, deleteHero, fetchHeroes, filteredHeroesSelector } from './heroesSlice';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

import './HeroesList.scss';

const HeroesList = () => {
    
    const filteredHeroes = useSelector(filteredHeroesSelector);
    const heroesLoadingStatus = useSelector(state => state.heroes.heroesLoadingStatus);
    const dispatch = useDispatch();
    const {request} = useHttp();

    const onDeleteHero = useCallback((id) => {
        request(`http://localhost:3001/heroes/${id}`, 'DELETE')
            .then(() => dispatch(deleteHero(id)))
            .catch(() => dispatch(heroesFetchingError()))
    }, [request]);

    useEffect(() => {
        dispatch(fetchHeroes());

        // eslint-disable-next-line
    }, []);

    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return  <CSSTransition timeout={400}
                                   classNames='card'>
                                   <h5 className="text-center mt-5">Героев пока нет</h5>
                    </CSSTransition>
        }

        return arr.map(({id, ...props}) => {
            return <CSSTransition key={id}
                                  timeout={400}
                                  classNames='card'>
                                      <HeroesListItem id={id} 
                                                      onDeleteHero={onDeleteHero} 
                                                      {...props}/>
                    </CSSTransition>
        })
    }

    const elements = renderHeroesList(filteredHeroes);
    return (
        <TransitionGroup component='ul' appear={false}>
            {elements}
        </TransitionGroup>
    )
}

export default HeroesList;