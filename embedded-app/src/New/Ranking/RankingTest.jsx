import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.id}   </b><b>{user.name}</b> <span>({user.score})</span>
    </div>
  );
}
const users = [
    {
        id: 1,
        name: 'apple',
        score: 99
    },
    {
        id: 2,
        name: 'banana',
        score: 98
    },
    {
        id: 3,
        name: 'cherry',
        score: 97
    },
    {
        id: 4,
        name: 'durian',
        score: 96
    },
    {
        id: 5,
        name: 'potato',
        score: 95
    }
  ];

function RankingTest() {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default RankingTest;