var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import DiaryEdit from "./pages/DiaryEdit";
import AuthRoute from "./Context/AuthRoute";
import MyPage from "./pages/MyPage";
import Header from "./components/layout/Header";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import PublicRoute from "./Context/PublicRoute";
import "./styles/index.css";
function App() {
    return (_jsx(BrowserRouter, { children: _jsxs(ThemeProvider, __assign({ theme: theme }, { children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: '/login', element: _jsx(PublicRoute, { children: _jsx(Login, {}) }) }), _jsx(Route, { path: '/signup', element: _jsx(PublicRoute, { children: _jsx(SignUp, {}) }) }), _jsx(Route, { path: '/', element: _jsx(AuthRoute, { children: _jsx(Home, {}) }) }), _jsx(Route, { path: '/diary/edit', element: _jsx(AuthRoute, { children: _jsx(DiaryEdit, {}) }) }), _jsx(Route, { path: '/mypage', element: _jsx(AuthRoute, { children: _jsx(MyPage, {}) }) }), _jsx(Route, { path: '*', element: _jsx(NotFound, {}) })] })] })) }));
}
export default App;
