import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Oops.. not a valid email address");
      return;
    }

    if (!password) {
      setError("Whoa.. you forgot the password");
      return;
    }

    setError("");

    // SIGN UP API call
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-4">Sign Up</h4>

            <div>
              <h4 className="text-sm">Name</h4>
              <input
                type="text"
                placeholder="Name"
                className="input-box"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <h4 className="text-sm">Email</h4>
              <input
                type="text"
                placeholder="Email"
                className="input-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <h4 className="text-sm">Password</h4>
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            {/* Start of Button with button primary and submit type */}
            <button className="btn-primary" type="submit">
              Create an account
            </button>
            {/* End of Button with button primary and submit type */}

            {/* start of helper if the user didnt have an account yet */}
            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="fpnt-medium text-primary underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
