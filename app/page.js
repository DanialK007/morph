import Footer from "@/components/component/footer";
import { MainPage } from "@/components/component/main-page";
import MyNavbar from "@/components/component/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="loading fixed w-full h-full top-0 left-0 bg-primary flex items-center justify-center">
        <img alt="" src="logo.png" className="loadingIcon size-56 me-2 object-cover rounded-[40px] duration-300 bg-primary p-1"/>
      </div>
      <MyNavbar />
      <MainPage />
      <Footer />
    </>
  );
}
