import React from 'react';

const ListName = ({ value }) => <li>{value}</li>;

export const List = ({ items }) => {
  const result = items.map((item) => <ListName key={item} value={item} />);

  return <ul>{result}</ul>;
};
