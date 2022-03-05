export const List = (props: {
  dataSource: {
    id: number;
    name: string;
  }[];
}) => {
  const { dataSource } = props;
  const lists = dataSource.map((list, key) => {
    return <h1 key={list.id}>{list.name}</h1>;
  });

  return <>{lists}</>;
};
