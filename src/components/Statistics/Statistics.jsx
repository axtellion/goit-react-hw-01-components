import { StatisticsInfo } from "./StatisticsInfo";
import { Section, Title, List } from "./Statistics.styled";
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title && (<Title>{title}</Title>)}
    <List>
        {stats.map(stat => (
            <StatisticsInfo
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
            />
       ))}
  </List>
</Section>)
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}