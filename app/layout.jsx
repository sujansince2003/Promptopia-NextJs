import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
  title: "promptopia",
  description: "search prompts now",
};
function Rootlayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}

export default Rootlayout;
