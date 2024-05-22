import { Link } from "react-router-dom"

const SingleUser = ({ login, avatar_url }) => {
  return (
    <article className="card compact side bg-neutral text-neutral-content">
        <div className="flex-row items-center space-x-4 card-body">
            <div className="avatar">
                <div className="w-14 h-14 mask mask-hexagon">
                    <img src={avatar_url} alt="Profile" />
                </div>
            </div>
            <div>
                <h2 className="card-title">{login}</h2>
                <Link to={`/user/${login}`} className="text-primary">See Profile</Link>
            </div>
        </div>
    </article>
  )
}
export default SingleUser