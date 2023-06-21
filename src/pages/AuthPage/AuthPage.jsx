import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage({ addUser }) {
  let user = "GUEST";
  const [newUser, setNewUser] = useState(user);

  function handleUser(evt) {
    evt.preventDefault();
    console.log("etv\n", evt.target.value);
    if (evt.target.value && evt.target.value > 0) {
      setNewUser(evt.target.value);
    } else {
      setNewUser("GUEST");
    }
    addUser(newUser);
  }

  return (
    <>
      <h1>Sign in</h1>
      <form onSubmit={handleUser}>
        <label for="username">Username</label>

        <input
          name="username"
          value={newUser}
          onChange={(evt) => setNewUser(evt.target.value)}
          placeholder={user}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
