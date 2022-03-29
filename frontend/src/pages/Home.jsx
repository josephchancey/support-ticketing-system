import { Link } from "react-router-dom";
import { FaPlus, FaBookmark } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="heading">
        <h1>How can we not help?</h1>
        <p>Please choose from the list of options</p>
      </section>
      <Link to="/new-ticket" className="btn btn-reverse btn-block">
          <FaPlus /> Create Ticket
      </Link>
      <Link to="/tickets" className="btn btn-block">
          <FaBookmark /> View My Tickets
      </Link>
    </>
  );
}

export default Home;
