import React, { Component } from 'react';
import styled from 'styled-components';
import InputForm from './InputForm';
import Projection from './Projection';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`

const Header = styled.div`
  height: 10%;

  padding: 1rem;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 3rem;

  margin-bottom: 2rem;
`

const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: stretch;
`

const Sidebar = styled.div`
  flex: 1;
`

const Main = styled.div`
  flex: 2;
`

const Footer = styled.div`
  height: 10%;
`

class App extends Component {
	render() {
		return (
			<Layout>
        <Header>
			    Renting vs. buying
        </Header>
        <Content>
          <Sidebar>
            <InputForm />
          </Sidebar>
          <Main>
            <Projection />
          </Main>
        </Content>
        <Footer>
          Footer
        </Footer>
			</Layout>
		);
	}
}

export default App;
