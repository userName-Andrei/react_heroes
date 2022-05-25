import * as classNames from 'classnames';

const HeroesListItem = ({id, name, description, element, onDeleteHero}) => {

    let elementClassName = classNames({
        'bg-gradient': true,
        'bg-danger': element === 'fire',
        'bg-primary': element === 'water',
        'bg-success': element === 'wind',
        'bg-secondary': element === 'earth',
        'bg-warning': element !== 'fire' && element !== 'water' && 
                      element !== 'wind' && element !== 'earth' 
    });
    
    return (
        <li 
            className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}>
            <img src="http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg" 
                 className="img-fluid w-25 d-inline" 
                 alt="unknown hero" 
                 style={{'objectFit': 'cover'}}/>
            <div className="card-body">
                
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                <button type="button" 
                        className="btn-close btn-close" 
                        aria-label="Close"
                        onClick={() => onDeleteHero(id)}></button>
            </span>
        </li>
    )
}

export default HeroesListItem;