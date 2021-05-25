import { useState, Dispatch, SetStateAction, useEffect, useCallback } from 'react';
import { fetchTopicList } from 'apis/Topic';
import { Topic } from 'utils/types';

interface TopicListHookResponse {
  topicList: Topic[];
  setTopicList: Dispatch<SetStateAction<Topic[]>>;
  maxTopicId: number;
  setMaxTopicId: Dispatch<SetStateAction<number>>;
}

export const useTopicList = (): TopicListHookResponse => {
  const [topicList, setTopicList] = useState<Topic[]>([]);
  const [maxTopicId, setMaxTopicId] = useState(0);

  const fetchTopicListCallback = useCallback(async () => {
    const response = await fetchTopicList();

    setTopicList(response.topicList);
    setMaxTopicId(response.maxTopicId);
  }, []);

  useEffect(() => {
    fetchTopicListCallback();
  }, [fetchTopicListCallback]);

  return { topicList, setTopicList, maxTopicId, setMaxTopicId };
};
