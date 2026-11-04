import { ArrowLeft } from "lucide-react";
import { useAtlas } from "../../app/AtlasContext";
export default function BackButton({ label = "Back", onClick }) {
  const { goBack, canGoBack } = useAtlas();
  return (
    <button
      type="button"
      className="back-button"
      onClick={onClick || goBack}
      disabled={!onClick && !canGoBack}
      aria-label={label}
    >
      <ArrowLeft size={16} />
      <span>{label}</span>
    </button>
  );
}
