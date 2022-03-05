import { Props } from '@/utils/Props';
import { useState } from 'react';
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

  return (
    <>
      <List onCurrent={current} />
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
