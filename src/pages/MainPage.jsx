import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Home from './Home.jsx'
import European from './European.jsx';
import TheThuc from './TheThuc.jsx';

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: 'league',
    label: 'Giải đấu',
    children: [
      {
        key: 'european',
        label: 'European Cup',
      }
    ]
  },
  {
    key: 2,
    label: 'Thể thức',
  },
]

const PAGE_NAME = {
  HOME: 'home',
  EUROPEAN: 'european',
  THE_THUC: 'the_thuc'
}


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
      case PAGE_NAME.THE_THUC: {
        return (<TheThuc />)
      }
    }
  }

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
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
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>

  );
}

export default MainPage;