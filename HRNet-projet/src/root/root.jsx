import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Provider } from 'react-redux'
import { store } from '../app/store.js';

export default function Root() {
    return (
        <Provider store={store}>
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        </Provider>
    )
}