import { useState } from "react";
import { FaUser } from "react-icons/fa";

function Register() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const { name, email, password, passwordConf } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name={name}
              value={name}
              onChange={onChange}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name={email}
              value={email}
              onChange={onChange}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name={password}
              value={password}
              onChange={onChange}
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="passwordConf"
              name={passwordConf}
              value={passwordConf}
              onChange={onChange}
              placeholder="Confirm Password"
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
