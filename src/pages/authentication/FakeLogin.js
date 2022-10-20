import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from './users.json'
import madani from '../../images/madani.png'

const FakeLogin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));

  const handleSubmit = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.email === email)
    if (account && account.password === password) {
      setAuthenticated(true)
      localStorage.setItem("authenticated", true);
      navigate("/dashboard");
    }
  }

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={madani} alt="logo" />
                </div>
                <h4>Silahkan Login untuk Masuk</h4>
                <form className="pt-3" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value) }}
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="password"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                      class="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password" />
                  </div>
                  <div className="mt-3">
                    <button
                      style={{
                        backgroundColor: "#172D88",
                        border: "none",
                        borderRadius: "5px",
                        color: "white",
                        padding: "15px 32px",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "inline-block",
                        fontSize: "16px"
                      }}
                    >SIGN IN</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FakeLogin