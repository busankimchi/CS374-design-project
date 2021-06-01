import { FC } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Avatar } from '@material-ui/core';
import { timeForToday } from '../../utils/functions'
import { H3, B2, COLORS } from '../../utils/themes'

interface UserInfoProp {
  userName: string,
  time: Date,
  image: number,
};

const us = (c: number) => {
  return makeStyles((theme) => ({
    col: {
      color: theme.palette.getContrastText(COLORS[c]),
      backgroundColor: COLORS[c],
    },
  }));
}

export const UserInfo: FC<UserInfoProp> = ({ userName, time, image }) => {
  const classes = us(image)();
  return (
    <UserBox>
      <UserAvatar className={classes.col}>{userName[0]}</UserAvatar>
      <UserNameBox>{userName}</UserNameBox>
      <TimeBox>{timeForToday(time)}</TimeBox>
    </UserBox>
  );
};

const UserBox = styled(Box)`
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  display: flex;
`;

const UserAvatar = styled(Avatar)`
  height: 35px !important;
  width: 35px !important;
`;

const UserNameBox = styled(Box)`
  margin-left: 10px !important;
  margin-top: 4px !important;
  ${H3};
`;

const TimeBox = styled(Box)`
  margin-left: 10px !important;
  margin-top: 10px !important;
  display: flex;
  ${B2};
`;