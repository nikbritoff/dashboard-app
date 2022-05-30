import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, removeFilter } from 'store/filter/actions';
import { selectFilters } from 'store/filter/selectors';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';


const FilterPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleClearCLick = () => {
    dispatch(clearFilter());
  }

  const handleRemoveClick = (filter) => {
    dispatch(removeFilter(filter));
  }

  if (filters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((filter) => (
            <Badge
              variant="clearable"
              key={filter}
              onClear={() => handleRemoveClick(filter)}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className='link' onClick={handleClearCLick}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};