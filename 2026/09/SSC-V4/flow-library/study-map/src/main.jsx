import { createRoot } from "react-dom/client";
import App from "./app/App";
import { AtlasProvider } from "./app/AtlasContext";
import { configureCourse } from "./lib/course.js";
import "katex/dist/katex.min.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "./styles.css";
export function mountStudyMap(course, element) {
  configureCourse(course);
  const root = createRoot(element);
  root.render(
    <AtlasProvider>
      <App />
    </AtlasProvider>,
  );
  return () => root.unmount();
}
