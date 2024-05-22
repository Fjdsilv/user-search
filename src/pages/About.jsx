import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
        <h2 className="text-6xl">GitHub Search🤡</h2>
        <p className='mb-4 text-xl font-light'>
        A React app to search GitHub profiles and see profile details. This is a dummy project. Thank you.
        </p>
        <Link to="/" className="btn" >Back Home</Link>
     </section>
  )
}
export default About