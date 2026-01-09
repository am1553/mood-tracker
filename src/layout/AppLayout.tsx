import Logo from "../assets/logo.svg";
import ProfilePicture from "../assets/avatar-lisa.jpg";
import ChevronDown from "../assets/icon-dropdown-arrow.svg";
function AppLayout() {
  return (
    <section className="px-4 py-8">
      <header className="h-10 flex items-center justify-between">
        <img src={Logo} alt="logo" />
        <button className="flex gap-2">
          <img src={ProfilePicture} alt="" className="rounded-full h-10 w-10" />
          <img src={ChevronDown} alt="" />
        </button>
      </header>
    </section>
  );
}

export default AppLayout;
