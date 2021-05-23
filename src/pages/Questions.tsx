import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { PageType } from 'utils/types';
import { useParams } from 'react-router';

interface QuestionsProp {
  pageType: PageType;
}

export const Questions: FC<QuestionsProp> = ({ pageType }) => {
  const params = useParams();
  console.log(pageType, params);

  return <QuestionsContainer>{pageType}</QuestionsContainer>;
};

const QuestionsContainer = styled(Box)``;
