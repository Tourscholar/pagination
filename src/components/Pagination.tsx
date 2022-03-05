import { lists } from '@/utils/db';
import { Props } from '@/utils/Props';
import { useEffect, useState } from 'react';
import { Button } from './Button';
import { List } from './List';
import { Pagers } from './Pargers';

export const Pagination = (props: Props) => {
  /**
   * @param total: 总页数
   * @param defaultCurrent: 默认当前页面
   */

  const { totalPages, defaultCurrent } = props;

  const [current, setPage] = useState(defaultCurrent);
  const [dataSource, setLists] = useState(lists[current - 1]);

  useEffect(() => {
    setLists(lists[current - 1]);
  }, [current]);

  return (
    <>
      <List dataSource={dataSource}/>
      <div className="m-pagination">
        <Button
          className="btn-prev"
          onClick={() => {
            if (current < 2) return;
            setPage(current - 1);
          }}
        >
          &lt;
        </Button>
        <Pagers
          totalPages={totalPages}
          thisCurrent={current}
          onSetPage={setPage}
        />
        <Button
          className="btn-next"
          onClick={() => {
            if (current >= totalPages) return;
            setPage(current + 1);
          }}
        >
          &gt;
        </Button>
      </div>
    </>
  );
};
