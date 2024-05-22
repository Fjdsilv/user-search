import { useState } from "react"
import { useGlobalContext } from "../context/Context";

const SearchForm = () => {
    const [text, setText] = useState("");
    const { users, searchUsers, clearSearch, setAlert } = useGlobalContext();

const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
        setAlert("Please Enter a value valid!", "error")
        return
    }
    searchUsers(text);
    setText("");
}

  return (
    <section className="grid grid-cols-1 gap-8 mb-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        <div className="flex">
            <form onSubmit={handleSubmit}>
                <div className="join">
                    <div>
                        <div>
                            <input
                                className="input input-bordered join-item focus:outline-none w-80" 
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="indicator">
                        <button className="btn join-item">Search</button>
                    </div>
                </div>
            </form>
            {users.length > 0  && (
                <div className="indicator">
                    <button 
                        className="btn ml-1 btn-active btn-primary"
                        type="button"
                        onClick={clearSearch}
                    >Clear</button>
                </div>
            )
            }
        </div>
    </section>
  )
}
export default SearchForm