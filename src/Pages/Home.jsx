import Banner from "../components/Banner";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import CartCountButton from "../components/CartCountButton";
import menuItemsData from "../menuData.js";
import { useRef } from "react";

const Home = () => {
  const menuRef = useRef();
  const handleScrollMenu = () =>
    menuRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <Menu list={menuItemsData} ref={menuRef} />
      <Footer />
      <CartCountButton />
    </div>
  );
};

export default Home;
