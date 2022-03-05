import { generatePages } from '../utils/index';

interface Props {
  totalPages: number;
  thisCurrent: number;
  onSetPage: (len: number) => void;
}
/**
 * 1. 中间按钮一共五页, 加上首位按钮2页, 一共7页, 只有当大于7页的时候才有可能显示更多按钮
 * 2. 左右更多按钮会随着当前页码的不同而显示或隐藏, 以第4页和倒数第4页为界
 * 3. 当页码大于4时, 显示左边更多按钮
 * 4. 当页码小于倒数第4页时, 显示右边更多按钮
 */

export const Pagers = (props: Props) => {
  /**
   * @param totalPage: 总页数
   * @param thisCurrent: 当前页码
   */
  const { totalPages, thisCurrent, onSetPage } = props;
  /**
   * @param current: 当前页码
   */

  const pages = Array.from(generatePages(totalPages));

  let centerPages: number[] = [];

  // 中心页码数
  const centerSize = 5;
  const jumpSize = centerSize - 1;

  // 控制右边省略号之前的数据显示为总数据长度 - 1个
  const startEllipsisSize = pages.length - 1;

  (() => {
    let centerPage = thisCurrent;
    if (thisCurrent > pages.length - 3) {
      centerPage = pages.length - 3;
    }
    if (thisCurrent < 4) {
      centerPage = 4;
    }
    if (pages.length <= startEllipsisSize) {
      const centerPage = [];
      for (let i = 2, len = pages.length; i < len; i++) {
        centerPage.push(i);
      }
      centerPages = centerPage;
    } else {
      centerPages = [
        centerPage - 2,
        centerPage - 1,
        centerPage,
        centerPage + 1,
        centerPage + 2,
      ];
    }
  })();

  return (
    <>
      <ul className="m-pager">
        <li
          className={'number' + (thisCurrent == 1 ? ' active' : '')}
          onClick={() => {
            onSetPage(1);
          }}
        >
          1
        </li>

        {thisCurrent >= centerSize && pages.length >= startEllipsisSize && (
          <li
            className="more left"
            onClick={() => {
              let newPage = thisCurrent - jumpSize;
              if (newPage < 1) {
                newPage = 1;
              }
              onSetPage(newPage);
            }}
          ></li>
        )}

        {centerPages.map((page, key) => {
          return (
            <li
              key={key}
              className={'number' + (page == thisCurrent ? ' active' : '')}
              onClick={() => {
                onSetPage(page);
              }}
            >
              {page}
            </li>
          );
        })}

        {thisCurrent <= pages.length - centerSize + 1 &&
          pages.length >= startEllipsisSize && (
            <li
              className="more right"
              onClick={() => {
                let newPage = thisCurrent + jumpSize;
                if (newPage > pages.length) {
                  newPage = pages.length;
                }
                onSetPage(newPage);
              }}
            ></li>
          )}

        {pages.length !== 1 && (
          <li
            className={
              'number' + (pages.length == thisCurrent ? ' active' : '')
            }
            onClick={() => {
              onSetPage(pages.length);
            }}
          >
            {pages.length}
          </li>
        )}
      </ul>
    </>
  );
};
