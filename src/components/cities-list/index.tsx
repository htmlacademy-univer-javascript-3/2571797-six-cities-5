import { memo } from 'react';
import { useActions, useAppSelector } from '../../store/hooks';
import { CityTab } from '../city-tab';
import { selectCityName } from '../../store/selectors';
import { CITIES as citiesList } from '../../constants/cities.ts';

export const CitiesList = memo(() => {
  const city = useAppSelector(selectCityName);
  const { changeCity } = useActions();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesList.map((name) => (
            <CityTab
              key={name}
              name={name}
              isActive={name === city}
              onChange={() => changeCity(name)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
});

CitiesList.displayName = 'CitiesList';
