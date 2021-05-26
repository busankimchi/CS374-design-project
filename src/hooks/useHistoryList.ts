import { useState, Dispatch, SetStateAction, useEffect, useCallback } from 'react';
import { fetchHistoryList } from 'apis/History';
import { HistoryQuery } from 'utils/types';

interface HistoryListHookResponse {
  historyList: HistoryQuery[];
  setHistoryList: Dispatch<SetStateAction<HistoryQuery[]>>;
  maxHistoryId: number;
  setMaxHistoryId: Dispatch<SetStateAction<number>>;
}

export const useHistoryList = (): HistoryListHookResponse => {
  const [historyList, setHistoryList] = useState<HistoryQuery[]>([]);
  const [maxHistoryId, setMaxHistoryId] = useState(0);

  const fetchHistoryListCallback = useCallback(async () => {
    const response = await fetchHistoryList();

    setHistoryList(response.historyList);
    setMaxHistoryId(response.maxHistoryId);
  }, []);

  useEffect(() => {
    fetchHistoryListCallback();
  }, [fetchHistoryListCallback]);

  return { historyList, setHistoryList, maxHistoryId, setMaxHistoryId };
};
