import { useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import SingleUser from "./SingleUser"

const UsersResult = () => {
  const { users, isLoading, searchUsers } = useGlobalContext();

  useEffect(() => {
    if (users.length === 0) {
      return
    }
    searchUsers();
  }, [])

  if (isLoading) {
    return (
      <section className="text-center">
        <span className="loading loading-bars loading-lg"></span>
      </section>
    )
  }

  return (
    <section className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {
        users.map((user) => {
          return <SingleUser key={user.id} {...user}/>
        })
      }
    </section>
  )
}
export default UsersResult