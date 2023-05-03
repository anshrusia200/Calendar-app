import SideBar from "../components/SideBar";

type Props = {
  children: JSX.Element;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <div className="sidebar-wrapper">
        <SideBar />
        <div className="child-page">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
