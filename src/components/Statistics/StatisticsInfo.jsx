import { ListItem } from "./Statistics.styled";
import PropTypes from 'prop-types';

export const StatisticsInfo = ({label, percentage}) => {
    return (
        <ListItem>
         <span>{label}</span>
            <span>{percentage}</span>
            </ListItem>
    )
}

StatisticsInfo.propTyepes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}