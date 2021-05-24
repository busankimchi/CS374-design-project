import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { PageType } from 'utils/types';

interface QuestionsProp {
  pageType: PageType;
}

export const Questions: FC<QuestionsProp> = ({ pageType }) => {
  return <QuestionsContainer>{pageType}</QuestionsContainer>;
};

const QuestionsContainer = styled(Box)``;
