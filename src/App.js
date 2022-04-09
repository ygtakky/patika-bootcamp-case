import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import "./ant.css";
import "./App.css";
import AppHeader from "./components/MainPage/AppHeader";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signup")
    }
  }, [navigate, isLoggedIn])

  return (
    <Layout className="app">
      {isLoggedIn ? <AppHeader /> : null}
      <Layout>
        <Content className="app__content">
          <Outlet />
        </Content>
      </Layout>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
