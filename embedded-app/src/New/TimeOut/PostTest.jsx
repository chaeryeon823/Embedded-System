import axios from "axios";
import { useState } from "react";

function PostTest(props) {
    const [name, setName] = useState('');

    const formSubit = async(e) => {
        e.preventDefault();

        await axios.post("/api/hello7", name, {headers: {
            'Content-Type': 'text/plain; charset=UTF-8'
        }})
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const nameChange = (e) => {
        setName(e.target.value); 
    }

    return (
        <div className="App">
              <form onSubmit={formSubit}>
                  <input name="name" value={name} onChange={nameChange} placeholder="이름"></input>
                  <button type="submit">제출</button>
              </form>
        </div>
      );
}

export default PostTest;