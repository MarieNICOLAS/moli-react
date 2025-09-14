import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <CookieBanner />
        </>
    );
};

export default Layout;