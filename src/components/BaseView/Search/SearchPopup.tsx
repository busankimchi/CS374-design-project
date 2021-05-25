/* eslint-disable react/jsx-props-no-spreading */
import { FC, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Box, Dialog, Divider, InputBase, IconButton, Typography, List } from '@material-ui/core';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import { HistoryQuery } from 'utils/types';
import { H3, B4 } from 'utils/themes';
import { useHistoryList } from 'hooks/useHistoryList';
import { deleteHistory, updateHistory } from 'apis/History';
import { DateToTimestamp } from 'utils/functions';
import { HistoryListItem } from './HistoryListItem';

interface SearchPopupProp {
  open: boolean;
  onClose?: () => void;
}

export const SearchPopup: FC<SearchPopupProp> = ({ open, onClose }) => {
  // const [historyList, setHistoryList] = useState<HistoryQuery[]>(dummySearchHistory);

  const { historyList, setHistoryList, maxHistoryId, setMaxHistoryId } = useHistoryList();
  const [search, setSearch] = useState('');
  const browserHistory = useHistory();

  const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions, focused } = useAutocomplete({
    id: 'use-autocomplete',
    options: historyList,
    // freeSolo: true,
    getOptionLabel: (option: HistoryQuery) => option.history,
  });

  const onClickDelete = (item: HistoryQuery) => {
    console.log('asdfasdfasdf');
    const newHistoryList = historyList.filter((it) => it.id !== item.id);
    // TODO: delete history list
    setHistoryList(newHistoryList);
    const historyFB = { ...item, time: DateToTimestamp(item.time) };
    deleteHistory(historyFB);
  };

  const addHistoryBySearch = () => {
    if (onClose !== undefined) {
      onClose();
    }

    const newHistory = { id: maxHistoryId + 1, history: search, time: new Date() };
    const newHistoryFB = { ...newHistory, time: DateToTimestamp(newHistory.time) };
    const newHistoryList = historyList;
    newHistoryList.unshift(newHistory);

    setHistoryList(newHistoryList);
    setMaxHistoryId(maxHistoryId + 1);
    updateHistory(newHistoryFB);
  };

  const addHistoryByClick = (item: HistoryQuery) => {
    if (onClose !== undefined) {
      onClose();
    }

    const newHistoryList = historyList.filter((it) => it.id !== item.id);
    const newHistory = { ...item, time: new Date() };
    const newHistoryFB = { ...newHistory, time: DateToTimestamp(newHistory.time) };
    newHistoryList.unshift(newHistory);

    setHistoryList(newHistoryList);
    updateHistory(newHistoryFB);
  };

  return (
    <SearchPopupContainer open={open} onClose={onClose} BackdropProps={{ invisible: true }} disableBackdropClick>
      <PopupContainer {...getRootProps()}>
        <SearchBarContainer>
          <SearchIconContainer>
            <SearchIcon />
          </SearchIconContainer>
          <Input
            {...getInputProps()}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="SEARCH"
            inputProps={{ 'aria-label': 'search' }}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                browserHistory.push(`/search?q=${search}`);
                addHistoryBySearch();
              }
            }}
          />
          <CloseIconContainer onClick={onClose}>
            <CloseIcon />
          </CloseIconContainer>
        </SearchBarContainer>
      </PopupContainer>
      <Divider />
      {focused && (
        <SearchResultContainer>
          {groupedOptions.length === 0 && (
            <SearchEmpty>
              <SearchEmptyText>No matches found...</SearchEmptyText>
            </SearchEmpty>
          )}
          <HistoryListContainer {...getListboxProps()}>
            {groupedOptions.length > 0 &&
              groupedOptions.map((option, index) => (
                <HistoryListItem
                  key={option.id}
                  {...getOptionProps({ option, index })}
                  history={option}
                  onClickItem={() => addHistoryByClick(option)}
                  onClickDelete={() => onClickDelete(option)}
                />
              ))}
          </HistoryListContainer>
        </SearchResultContainer>
      )}
    </SearchPopupContainer>
  );
};

const SearchPopupContainer = styled(Dialog)`
  display: flex;
  flex-direction: column;
  background: transparent;
  align-items: center;

  .MuiPaper-rounded {
    border-radius: 20px;
  }

  .MuiDialog-container {
    align-items: flex-start;
  }

  .MuiDialog-paper {
    margin: 6px;
    width: 52em;
  }
`;

const PopupContainer = styled(Box)`
  background-color: #ffffff;
`;

const SearchBarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SearchIconContainer = styled(Box)`
  display: flex;
  align-self: center;
  margin: 0em 0em 0em 1.5em;
`;

const Input = styled(InputBase)`
  width: 70%;

  .MuiInputBase-input {
    ${B4}
  }
`;

const CloseIconContainer = styled(IconButton)`
  margin: 0em 0.5em;
`;

const SearchResultContainer = styled(Box)``;

const SearchEmpty = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em;
`;

const SearchEmptyText = styled(Typography)`
  ${H3}
`;

const HistoryListContainer = styled(List)``;
