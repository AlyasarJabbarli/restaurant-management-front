import React, { Component } from 'react';
import { login } from '../action/MainAction';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  componentDidMount() {
    if (this.props.token) {
      this.setState({ redirectToDashboard: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.token && this.props.token !== prevProps.token) {
      this.setState({ redirectToDashboard: true });
    }
  }

  render() {
    console.log(this.props.token);
    if (this.state.redirectToDashboard || this.props.token) {
      return <Navigate to="/dashboard" />;
    }

    return (
      <main>
        <section>
          <div className="flex min-h-full h-[100vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">
                Musayeff
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={this.handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email adresi
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Şifrə
                    </label>

                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Daxil Ol
                  </button>
                </div>
              </form>

              <p className="mt-5 text-center text-sm text-gray-500">
                Demo üçün bizimlə əlaqə saxlıyın!
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.Data.token,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

