import { FC } from 'react';
import styled from 'styled-components';
import { Box, CircularProgress } from '@material-ui/core';

export const Loading: FC = () => {
    return (
        <LoadingContainer>
            <CircularProgress size='max(3vh, 2vw)' disableShrink />
        </LoadingContainer>
    );
};

const LoadingContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: max(3vh, 2vw);
`;