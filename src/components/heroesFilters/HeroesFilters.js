import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setActiveFilter, fetchFilters, selectAll } from './filtersSlice';

const HeroesFilters = () => {

    const filters = useSelector(selectAll);
    const {filtersLoadingStatus, activeFilter} = useSelector(state => state.filters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilters());
    }, [])

    if (filters.length === 0 || !filters) {
        return <h5 className="text-center mt-5">Фильтров не обнаружено!</h5>
    }
    if (filtersLoadingStatus === 'error') {
        return <h5 className="text-center mt-5">Ошибка загрузки!</h5>
    }

    const filterItems = filters.map(({className, label, name}, i) => {
        return <button key={i} 
                       className={`btn ${className} ${name === activeFilter ? 'active' : ''}`}
                       onClick={() => dispatch(setActiveFilter(name))}>{label}</button>
    })

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {filterItems}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;