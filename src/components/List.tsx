import { lists } from '@/utils/db';
import { useEffect, useState } from 'react';

export const List = (props: { onCurrent: number }) => {
  const { onCurrent } = props;
  const [dataSource, setLists] = useState(lists[onCurrent - 1]);

  useEffect(() => {
    setLists(lists[onCurrent - 1]);
  }, [onCurrent]);
  const list = dataSource.map((show, key) => {
    return <h1 key={key}>{show.name}</h1>;
  });

  return <>{list}</>;
};
