import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/store/layout/footer";
import Header from "~/components/store/layout/header/header";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;