import SideNav from "@/components/SideNav";

const Layout = ({ children }) => {
  return (
    <div className="block md:flex items-center justify-end">
      <SideNav />
      {children}
    </div>
  );
};

export default Layout;
