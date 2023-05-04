import React, {useEffect, useState} from 'react';
import axios from 'axios';
function Test(props) {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello2')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {hello}
        </div>
    );
}

export default Test;


// import React, {useState, useEffect} from 'react';

// function App() {
//   const [message, setMessage]=useState([]);
//   useEffect(()=>{
//     fetch("/api/hello")
//         .then((response)=>{
//           return response.json();
//         })
//         .then((data)=>{
//             setMessage(data);
//         });
//   },[]);
//   return (
//     <div>
//         {message}
//     </div>
//   );
// }

// export default App;




