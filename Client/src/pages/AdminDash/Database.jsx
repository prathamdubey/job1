import { useEffect, useState } from "react"
import axios from "axios"

function Database() {

  const[users, setUsers] = useState([])

  useEffect(() =>{
    axios.get("http://localhost:3001/getusers")
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <table className="w-[800px] text-center h-[200px] font-[Barlow]">
        <thead className="text-2xl">
          <tr>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Password
            </th>
          </tr>
        </thead>
        <tbody className="text-xl">
          {
            users.map(user => {
              return <tr>
                <td> {user.name} </td>
                <td> {user.email} </td>
                <td> {user.password} </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Database
