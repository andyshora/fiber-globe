import React from "react"
import styled from "styled-components"
import { Typography, IconButton } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import {
  AccountTreeOutlined,
  LinearScaleOutlined,
  Domain
} from "@mui/icons-material"
import { Router, Link } from "@reach/router"

import DashboardView from "./views/DashboardView"

const NAV_WIDTH = 80

const AppWrap = styled.div`
  display: grid;
  grid-template-columns: ${80}px 1fr;
  grid-template-rows: 1fr;
  min-height: 500px;
`
const NavWrap = styled.nav`
  width: ${NAV_WIDTH}px;
  margin-top: ${NAV_WIDTH}px;
`
const HeaderWrap = styled.header`
  height: ${NAV_WIDTH}px;
  width: 100%;
  display: flex;
  align-items: center;
`
const MainWrap = styled.main``
const MainContentWrap = styled.div`
  min-height: 600px;

  border-top: 1px solid rgb(49, 49, 49);
  border-left: 1px solid rgb(49, 49, 49);
  padding: 1rem;
`

const NavItems = styled.ul`
  padding: 0;
  margin: 0;
`
const NavItem = styled.li`
  width: ${NAV_WIDTH}px;
  height: ${NAV_WIDTH}px;
  padding: 0;
  text-align: center;
  margin: 0;
  transition: opacity 0.4s ease;

  > a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 3px solid transparent;
    opacity: 0.5;
    transition: all 0.4s ease;

    &.--active {
      background: ${(p) => p.theme.colorScales.primary(1).alpha(0.4)};
      border-color: ${(p) => p.theme.colorScales.primary(1).alpha(0.8)};
      opacity: 1;
    }

    &:hover {
      opacity: 1;
      background: ${(p) => p.theme.colorScales.primary(1).alpha(0.4)};
    }
    > button {
      width: 100%;
      height: 100%;
    }
  }
`

const EmptyView = ({ title }) => <Typography>{title}</Typography>

const routes = [
  {
    icon: <LinearScaleOutlined />,
    title: "Graphs",
    Component: DashboardView,
    url: "graphs"
  },
  {
    icon: <AccountTreeOutlined />,
    title: "Data Explorer",
    Component: EmptyView,
    url: "explorer"
  },
  {
    icon: <Domain />,
    title: "Business",
    Component: EmptyView,
    url: "business"
  }
]

// this link will be active when itself or deeper routes
// are current
const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "--active" } : {}
}

export default function App() {
  const theme = useTheme()
  return (
    <AppWrap>
      <NavWrap>
        <NavItems>
          {routes.map(({ active, icon, title, url }) => (
            <NavItem key={title} theme={theme}>
              <Link to={url} title={title} getProps={isActive}>
                <IconButton>{icon}</IconButton>
              </Link>
            </NavItem>
          ))}
        </NavItems>
      </NavWrap>
      <MainWrap>
        <HeaderWrap>
          <Typography variant="h4">App Title</Typography>
        </HeaderWrap>
        <MainContentWrap>
          <Router>
            {routes.map(({ Component, url, title }) => (
              <Component key={url} path={url} title={title} />
            ))}
          </Router>
        </MainContentWrap>
      </MainWrap>
    </AppWrap>
  )
}
