import { FC, useState } from 'react';
// import { useHistory, useLocation } from 'react-router';
// import styled from 'styled-components';
// import { Box } from '@material-ui/core';
// import { PageType, Question } from 'utils/types';
// import { useQuestionList } from 'apis/Question/useQuestionList';
// import { BaseQuestionContainer } from 'components/General/BaseQuestionContainer';
// import { SpecialQuestionList } from 'components/QuestionList';

// interface SpecialQuestionProp {
//   pageType: PageType;
//   search?: string;
//   questionId?: number;
//   questionId2?: number;
//   isListShown: boolean;
//   isHover: boolean;
//   isHoverDual: boolean;
//   onToggle?: () => void;
//   onHoverIn?: () => void;
//   onHoverOut?: () => void;
//   onHoverInDual: () => void;
//   onHoverOutDual: () => void;
// }

// export const SpecialQuestion: FC<SpecialQuestionProp> = ({
//   pageType,
//   search,
//   questionId,
//   questionId2,
//   isListShown,
//   isHover,
//   isHoverDual,
//   onToggle,
//   onHoverIn,
//   onHoverOut,
//   onHoverInDual,
//   onHoverOutDual,
// }) => {
//   const history = useHistory();
//   const location = useLocation();
//   const [isLoading, setIsLoading] = useState(true);
//   const { questionList } = useQuestionList(setIsLoading);

//   if (pageType === PageType.FAQ) {
//     const FAQList = questionList.filter((question) => question.isFaq);

//     const onCloseLeftContent = () => {
//       if (questionId2 !== undefined) {
//         history.push(`/faq/${questionId2}`);
//       } else {
//         history.push(`/faq`);
//       }
//     };

//     const onCloseRightContent = () => {
//       if (questionId !== undefined) {
//         history.push(`/faq/${questionId}`);
//       } else {
//         history.push(`/faq`);
//       }
//     };

//     const onClickItemDual = (item: Question) => {
//       const { pathname } = location;

//       history.push(`${pathname}?second=${item.questionId}`);
//     };

//     return (
//       <QuestionContainer>
//         <QuestionDetails>
//           <SpecialQuestionList
//           setQuestionId={setQuestionId}
//           setQuestionId2={setQuestionId2}
//             isLoading={isLoading}
//             questionList={FAQList}
//             title="FAQ"
//             itemLink={(item) => `/faq/${item.questionId}`}
//             isListShown={isListShown}
//             onToggle={onToggle}
//             onHoverIn={onHoverIn}
//             onHoverOut={onHoverOut}
//             onHoverInDual={onHoverInDual}
//             onHoverOutDual={onHoverOutDual}
//             onClickItemDual={onClickItemDual}
//           />
//         </QuestionDetails>
//         <BaseQuestionContainer
//           questionList={FAQList}
//           questionId={questionId}
//           questionId2={questionId2}
//           isHover={isHover}
//           isHoverDual={isHoverDual}
//           onCloseLeftContent={onCloseLeftContent}
//           onCloseRightContent={onCloseRightContent}
//         />
//       </QuestionContainer>
//     );
//   }
//   if (pageType === PageType.SEARCH) {
//     const searchList = questionList.filter((item) => {
//       const { question, answers } = item;

//       const contentHas = question.content.includes(search as string);
//       const titleHas = question.title.includes(search as string);
//       const answerHas = answers
//         .map((ans) => ans.content.includes(search as string))
//         .reduce((prev, next) => prev || next, false);

//       return contentHas || titleHas || answerHas;
//     });

//     const onCloseLeftContent = () => {
//       history.push(`/search?q=${search}&first=${questionId2}`);
//     };

//     const onCloseRightContent = () => {
//       history.push(`/search?q=${search}&first=${questionId}`);
//     };

//     const onClickItemDual = (item: Question) => {
//       const { pathname, search } = location;

//       history.push(`${pathname}${search}&second=${item.questionId}`);
//     };

//     return (
//       <QuestionContainer>
//         <QuestionDetails>
//           <SpecialQuestionList
//             isLoading={isLoading}
//             questionList={searchList}
//             title="SEARCH RESULT"
//             itemLink={(item) => `/search?q=${search}&first=${item.questionId}`}
//             isListShown={isListShown}
//             onToggle={onToggle}
//             onHoverIn={onHoverIn}
//             onHoverOut={onHoverOut}
//             onHoverInDual={onHoverInDual}
//             onHoverOutDual={onHoverOutDual}
//             onClickItemDual={onClickItemDual}
//           />
//         </QuestionDetails>
//         <BaseQuestionContainer
//           questionList={searchList}
//           questionId={questionId}
//           questionId2={questionId2}
//           isHover={isHover}
//           isHoverDual={isHoverDual}
//           onCloseLeftContent={onCloseLeftContent}
//           onCloseRightContent={onCloseRightContent}
//         />
//       </QuestionContainer>
//     );
//   }

//   const onCloseLeftContent = () => {
//     if (questionId2 !== undefined) {
//       history.push(`/all_questions/${questionId2}`);
//     } else {
//       history.push(`/all_questions`);
//     }
//   };

//   const onCloseRightContent = () => {
//     if (questionId !== undefined) {
//       history.push(`/all_questions/${questionId}`);
//     } else {
//       history.push(`/all_questions`);
//     }
//   };

//   const onClickItemDual = (item: Question) => {
//     const { pathname } = location;

//     history.push(`${pathname}?second=${item.questionId}`);
//   };

//   return (
//     <QuestionContainer>
//       <QuestionDetails>
//         <SpecialQuestionList
//           isLoading={isLoading}
//           questionList={questionList}
//           title="ALL QUESTIONS"
//           itemLink={(item) => `/all_questions/${item.questionId}`}
//           isListShown={isListShown}
//           onToggle={onToggle}
//           onHoverIn={onHoverIn}
//           onHoverOut={onHoverOut}
//           onHoverInDual={onHoverInDual}
//           onHoverOutDual={onHoverOutDual}
//           onClickItemDual={onClickItemDual}
//         />
//       </QuestionDetails>
//       <BaseQuestionContainer
//         questionList={questionList}
//         questionId={questionId}
//         questionId2={questionId2}
//         isHover={isHover}
//         isHoverDual={isHoverDual}
//         onCloseLeftContent={onCloseLeftContent}
//         onCloseRightContent={onCloseRightContent}
//       />
//     </QuestionContainer>
//   );
// };

// const QuestionContainer = styled(Box)`
//   display: flex;
//   width: 100%;
//   height: 96vh;
// `;

// const QuestionDetails = styled(Box)`
//   display: flex;
//   height: 100%;
// `;
