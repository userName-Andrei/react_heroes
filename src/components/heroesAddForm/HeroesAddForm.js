import {useHttp} from '../../hooks/http.hook';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { addHero } from '../heroesList/heroesSlice';
import { selectAll } from '../heroesFilters/filtersSlice';

const HeroesAddForm = () => {

    const filters = useSelector(selectAll);
    const dispatch = useDispatch();
    const {request} = useHttp();

    const onSubmitHandler = (newHero) => {
        request("http://localhost:3001/heroes", 'POST', JSON.stringify(newHero))
            .then(data => dispatch(addHero(data)))
    }

    const options = filters.filter(item => item.name !== 'all').map(({name, label}, i) => (
        <option key={i} value={name}>{label}</option>
    ));

    return (
        <Formik
            initialValues={{
                id: uuidv4(),
                name: '',
                description: '',
                element: ''
            }}
            validationSchema={object({
                name: string().min(2, 'В имени должжно быть минимум 2 символа!').max(120, 'Не больше 120 символов!').required('Обязательное поле!'),
                description: string().min(2, 'В описании должжно быть минимум 2 символа!').max(150, 'Не больше 150 символов!').required('Обязательное поле!'),
                element: string().oneOf(['fire', 'water', 'wind', 'earth'], 'Выберите один из вариантов').required('Обязательное поле!')
            })}
            onSubmit={(values, actions) => {
                onSubmitHandler(values);
                actions.resetForm();
            }}>
            <Form className="border p-4 shadow-lg rounded">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                    <Field 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        id="name" 
                        placeholder="Как меня зовут?"/>
                    <ErrorMessage name="name" component='div' style={{marginTop: '5px', fontWeight: '500', color: 'crimson'}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label fs-4">Описание</label>
                    <Field
                        component='textarea'
                        name="description" 
                        className="form-control" 
                        id="text" 
                        placeholder="Что я умею?"
                        style={{"height": '130px', "resize": 'none'}}/>
                    <ErrorMessage name="description" component='div' style={{marginTop: '5px', fontWeight: '500', color: 'crimson'}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                    <Field 
                        component='select'
                        className="form-select" 
                        id="element" 
                        name="element">
                        <option >Я владею элементом...</option>
                        {options}
                    </Field>
                    <ErrorMessage name="element" component='div' style={{marginTop: '5px', fontWeight: '500', color: 'crimson'}}/>
                </div>

                <button type="submit" className="btn btn-primary">Создать</button>
            </Form>
        </Formik>
    )
}

export default HeroesAddForm;