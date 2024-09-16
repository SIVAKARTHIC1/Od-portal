import { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
}

function Table({ children }: TableProps) {
  return (
    <table className="min-w-full bg-secondary rounded-md overflow-hidden">
      {children}
    </table>
  );
}

interface TableHeadProps {
  children: ReactNode;
}

function TableHead({ children }: TableHeadProps) {
  return (
    <thead>
      <tr className="bg-grey-50 border-b border-gray-600 uppercase tracking-wider font-semibold text-grey-600 text-left">
        {children}
      </tr>
    </thead>
  );
}

function EmptyTable() {
  return (
    <tr>
      <td colSpan={12} className="text-center p-5 tracking-wide">
        No data available
      </td>
    </tr>
  );
}

interface TableBodyProps<T> {
  data: T[];
  render: (item: T, index: number) => ReactNode;
}

function TableBody<T>({ data, render }: TableBodyProps<T>) {
  return <tbody>{data.length === 0 ? <EmptyTable /> : data.map(render)}</tbody>;
}

Table.TableHead = TableHead;
Table.TableBody = TableBody;

export default Table;
