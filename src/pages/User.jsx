import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/Context"

const User = () => {
    const { user, fetchSingleUser, isLoading } = useGlobalContext();
    
    const { login: userLogin } = useParams();

    useEffect(() => {
        fetchSingleUser(userLogin);
    }, [])

    const {
        name,
        type,
        avatar_url: avatar,
        bio,
        login,
        html_url: url,
        hireable,  
    } = user;


if (isLoading) {
    return (
        <section className="text-center">
            <span className="loading loading-bars loading-lg"></span>
        </section>
    )
}

  return (
    <section className="w-full mx-auto lg:w-10/12">
        <article className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
            <div className="custom-card-image mb-6 md:mb-0">
                <div className="card shadow-xl image-full">
                    <figure>
                        <img src={avatar} alt="" />
                    </figure>
                    <div className="card-body justify-end">
                        <h2 className="card-title mb-0">{login}</h2>
                        <div>
                            <p className="mb-0">{name}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <div className="mb-6">
                    <h2 className="text-3xl card-title">
                        {name}
                        <div className="ml-2 mr-1 badge badge-primary badge-outline">
                        {type}
                        </div>
                        {hireable && (
                            <div className="mx-1 badge badge-secondary badge-outline">
                                hireable
                            </div>
                        )
                        }
                    </h2>
                    <p>{bio}</p>
                    <div className="mb-4 card-actions">
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-secondary mt-5">Visit Github Profile</a>
                    </div>
                </div>
            </div>
        </article>
        <div className="mb-4">
            <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
    </section>
  )
}
export default User