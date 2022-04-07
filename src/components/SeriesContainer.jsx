import PropTypes from 'prop-types';
import SeriesCard from 'components/SeriesCard';

const SeriesContainer = ({ series }) => {
  console.log(series);
  return (
    <div className="Series">
      {series &&
        series.length &&
        series.map((serie, index) => <SeriesCard key={index} title={serie?.full_name ?? ''} />)}
    </div>
  );
};

SeriesContainer.propTypes = {
  series: PropTypes.array
};

export default SeriesContainer;