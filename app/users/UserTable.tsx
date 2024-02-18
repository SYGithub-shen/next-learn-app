import React from 'react';
import Link from "next/link";
import {sort} from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({sortOrder}: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-cache', // 禁用缓存
    // next: {
    //   revalidate: 10 // 10秒后获取新的数据
    // }
  })
  const users: User[] = await res.json()
  let sortUsers = sort(users).asc(sortOrder === 'email' ? user => user.email : user => user.name);
  return (
    <div>
      <table className="table table-bordered">
        <thead>
        <tr>
          <th>
            <Link href={'/users?sortOrder=name'}>Name</Link>
          </th>
          <th>
            <Link href={'/users?sortOrder=email'}>Email</Link>
          </th>
        </tr>
        </thead>
        <tbody>
        {sortUsers.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
        </tbody>

      </table>
    </div>
  );
};

export default UserTable;