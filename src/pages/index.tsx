import { Pagination } from '@/components/Pagination';
import { lists } from '@/utils/db';
import './app.css';

export default () => {
  /**
   * @param defaultCurrent: 初始显示页面
   */

  const defaultCurrent = 1;
  return (
    <div className="app">
      <Pagination
        totalPages={lists.length}
        defaultCurrent={defaultCurrent}
      />
    </div>
  );
};
