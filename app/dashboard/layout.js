import SideNav from "@/components/SideNav";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-end items-start">
      <SideNav />
      {children}
    </div>
  );
};

export default Layout;
