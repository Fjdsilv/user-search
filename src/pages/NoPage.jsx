import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <section>
        <h2 className="text-6xl">Error 404😰</h2>
        <h3 className="mt-4 text-xl font-light">Ohh!</h3>
        <p className="mb-4 text-xl font-light">We can't seem to find page you are looking for</p>
        <Link to="/" className="btn" >Back Home</Link>
     </section>
  )
}
export default NoPage