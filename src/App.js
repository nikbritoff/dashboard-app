import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addVacancies } from './store/vacancies/actions';
import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';
import data from './mock/data.json';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addVacancies(data));
  })
  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
