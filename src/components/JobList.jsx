import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'store/filter/actions';
import { selectFilters } from 'store/filter/selectors';
import { selectVisibleVacancies } from 'store/vacancies/selectors';
// import { selectVacancies, selectVisibleVacancies } from 'store/vacancies/selectors';
import { JobPosition } from './JobPosition';

const JobList = () => {
  const dispatch = useDispatch();
  // const data = useSelector(selectVacancies);
  const filters = useSelector(selectFilters);
  const data = useSelector((state) => selectVisibleVacancies(state, filters));

  const handleAddFilterClick = (filter) => {
    dispatch(addFilter(filter));
  }

  return (
    <div className='job-list'>
      {data.map(item => (
        <JobPosition
          key={item.id}
          handleAddFilterClick={handleAddFilterClick}
          {...item}
        />
      ))}
    </div>
  )
}

export {JobList};