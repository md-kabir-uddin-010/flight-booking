import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  return (
    <>
      <header id="header">
        <div className="container">
          <img src="./img/lws-logo.svg" alt="logo" className="logo" />
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="/">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>

      <section>
        {/* <!-- Input Data --> */}
        <Form />

        {/* <!-- Preview Data --> */}
        <Table />
      </section>
    </>
  );
}

export default App;
