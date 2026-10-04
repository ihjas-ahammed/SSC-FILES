import { byName } from "../../lib/course";
import MathText from "../ui/MathText";
import { useAtlas } from "../../app/AtlasContext";
export default function SymbolKey({ names = [] }) {
  const { openReader } = useAtlas();
  if (!names.length) return null;
  return (
    <details className="symbol-key">
      <summary>
        Explore the symbols in this step <span>{names.length}</span>
      </summary>
      <div>
        {names.map((name) => (
          <button key={name} onClick={() => openReader(name)}>
            <MathText text={`$${byName[name].symbol}$`} />
            <span>{name}</span>
          </button>
        ))}
      </div>
    </details>
  );
}
