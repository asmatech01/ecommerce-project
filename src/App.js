import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
// import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import HelpCenter from "./pages/HelpCenter/HelpCenter";
import Returnpolicy from "./pages/Return Policy/Returnpolicy";
import Faq from "./pages/FAQ/Faq";
import Security from "./pages/Security/Security";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import PrivicyPolicy from "./pages/PrivicyPolicy/PrivicyPolicy";
import Howtobuy from "./pages/Howtobuy/Howtobuy";
import Paymentoptions from "./pages/PaymentOptions/Paymentoptions";
import Confirmation from "./pages/Confirmationpage/Confirmation";
import Invoice from "./pages/Invoice/Invoice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./statemanagment/reducers/product.reducer";
const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/HelpCenter" element={<HelpCenter />}></Route>
        <Route path="/Returnpolicy" element={<Returnpolicy />}></Route>
        <Route path="/Faq" element={<Faq />}></Route>
        <Route path="/Security" element={<Security />}></Route>
        <Route path="/TermsConditions" element={<TermsConditions />}></Route>
        <Route path="/PrivicyPolicy" element={<PrivicyPolicy />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Howtobuy" element={<Howtobuy />}></Route>
        <Route path="/Paymentoptions" element={<Paymentoptions />}></Route>
        <Route path="/Confirmation" element={<Confirmation />}></Route>
        <Route path="/Invoice" element={<Invoice />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        {/* <Route path="/paymentgateway" element={<Payment />}></Route> */}
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Route>
  )
);

function App() {
  const orders = useSelector((state) => state.rootReducer.order);
  console.log("here is order ", orders);
  // Access the pdfData from your Redux store
  const pdfData = useSelector((state) => state.rootReducer.order.pdfData);
  console.log("here is pdf", pdfData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
