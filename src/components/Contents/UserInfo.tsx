import { FC } from 'react';
import styled from 'styled-components';
import { Box, Avatar } from '@material-ui/core';

interface UserInfoProp {
  userName: string,
  time: Date,
};

export const UserInfo: FC<UserInfoProp> = ({ userName, time }) => {
  return (
    <UserBox>
      <UserAvatar>{userName[0]}</UserAvatar>
      <UserNameBox>{userName}</UserNameBox>
      <TimeBox>{time.toDateString()}</TimeBox>
    </UserBox>
  );
};

const UserBox = styled(Box)`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
`;

const UserAvatar = styled(Avatar)`
  height: 35px;
  width: 35px;
`;

const UserNameBox = styled(Box)`
  margin-left: 10px;
  margin-top: 3px;
  font-size: 20px;
  font-weight: Bold;
`;

const TimeBox = styled(Box)`
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  font-size: 14px;
`;