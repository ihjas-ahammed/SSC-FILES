import { X, CheckCircle2 } from "lucide-react";
import { useAtlas } from "./AtlasContext";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import MobileNav from "../components/layout/MobileNav";
import AtlasDialog from "../components/dialogs/AtlasDialog";
import AtlasPage from "../pages/AtlasPage";
import QuestionBank from "../pages/QuestionBank";
import ProgressPage from "../pages/ProgressPage";
export default function App() {
  const { nav, mobileMenu, setMobileMenu, toast } = useAtlas();
  return (
    <div className={`app-shell ${nav === "atlas" ? "map-shell" : ""}`}>
      <Header />
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="main-content">
        {nav === "atlas" ? (
          <AtlasPage />
        ) : nav === "progress" ? (
          <ProgressPage />
        ) : (
          <QuestionBank />
        )}
      </main>
      <MobileNav />
      {mobileMenu && (
        <div className="overlay" onClick={() => setMobileMenu(false)}>
          <aside
            className="mobile-sidebar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-sidebar-title">
              Your question bank
              <button
                className="icon-btn"
                aria-label="Close question menu"
                onClick={() => setMobileMenu(false)}
              >
                <X />
              </button>
            </div>
            <Sidebar />
          </aside>
        </div>
      )}
      <AtlasDialog />
      {toast && (
        <div className="toast" role="status">
          <CheckCircle2 size={16} />
          {toast}
        </div>
      )}
    </div>
  );
}
