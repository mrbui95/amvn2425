import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Home from './Home.jsx'
import European from './European.jsx';
import TheThuc from './TheThuc.jsx';

const { Header, Content, Footer } = Layout;

const PAGE_NAME = {
  HOME: 'home',
  EUROPEAN: 'european',
  SECOND_CHANCE: 'second-chance',
  THE_THUC: 'the_thuc'
}

const items = [
  {
    key: 'league',
    label: 'Giải đấu',
    children: [
      {
        key: PAGE_NAME.EUROPEAN,
        label: 'European Cup',
      },
      {
        key: PAGE_NAME.SECOND_CHANCE,
        label: 'Second Chance',
      }
    ]
  },
  {
    key: PAGE_NAME.THE_THUC,
    label: 'Thể thức',
  },
]




function MainPage() {
  const [pageName, setPageName] = useState(PAGE_NAME.HOME)


  const onMenuClick = (e) => {
    setPageName(e.key)
  }

  const renderContent = () => {
    switch(pageName) {
      case PAGE_NAME.HOME: {
        return (<Home />)
      }
      case PAGE_NAME.EUROPEAN: {
        return (<European />)
      }
      case PAGE_NAME.SECOND_CHANCE: {
        return (<European />)
      }
      case PAGE_NAME.THE_THUC: {
        return (<TheThuc />)
      }
    }
  }

  return (
    <Layout>
      <Header
        className='main-header'
      >
        <div className="demo-logo">
          <img src="logo_amvn.png" alt="logo" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={onMenuClick}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 5px',
        }}
      >
        <div
          style={{
            padding: 5,
            height: 'calc(100vh - 130px)'
          }}
        >
          {renderContent()}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Fantasy AMVN ©{new Date().getFullYear()} Created by Thanh Bui
      </Footer>
    </Layout>

  );
}

export default MainPage;