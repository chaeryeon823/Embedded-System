import axios from 'axios';
import React, { useEffect, useState } from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.num}   </b><b>{user.name}</b> <span>({user.score})</span>
    </div>
  );
}


function RankingTest(props) {
  const [myUser ,setUser] = useState([]);

    useEffect(() => {
      axios.get('/api/hello6')
      .then(response => setUser(response.data))
      .catch(error => console.log(error))
    }, []);
  return (
    <div>
      {myUser.map((user) => (
        <User user={user} key={user.num} />
      ))}
      <p>뭘봐</p>
    </div>
  );
}

export default RankingTest;


// const users = [
//     {
//         id: 1,
//         name: 'apple',
//         score: 99
//     },
//     {
//         id: 2,
//         name: 'banana',
//         score: 98
//     },
//     {
//         id: 3,
//         name: 'cherry',
//         score: 97
//     },
//     {
//         id: 4,
//         name: 'durian',
//         score: 96
//     },
//     {
//         id: 5,
//         name: 'potato',
//         score: 95
//     }
//   ];