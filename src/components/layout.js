import Navbar from "./navbar.js";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <nav className="p-4 shadow-sm bg-slate-800 w-full">
        <Navbar />
      </nav>
      <main className="p-4 flex flex-col items-center w-full max-w-6xl bg-gray-900">
        {children}
      </main>
    </div>
  );
};

export default Layout;
