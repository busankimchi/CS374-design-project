import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const timeForToday = (value: Date) => {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return 'just now';
    if (betweenTime < 60) {
        return `${betweenTime} mins. ago`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour} hrs. ago`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
        return `${betweenTimeDay} days ago`;
    }

    return `${Math.floor(betweenTimeDay / 365)} yrs. ago`;
}