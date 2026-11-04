import { ArrowRight } from "lucide-react";
import { questions } from "../../graph";
import { useAtlas } from "../../app/AtlasContext";

export default function SourceAudit() {
  const { selectQuestion } = useAtlas();
  return (
    <div className="audit-body">
      <span className="eyebrow">SOURCE QUALIFICATIONS</span>
      <h2>Keep the question bank honest.</h2>
      {questions
        .filter((q) => q.verify)
        .map((q) => (
          <div key={q.id}>
            <b>
              {q.id} · {q.title}
            </b>
            <p>{q.verify}</p>
            <button className="wiki-link" onClick={() => selectQuestion(q)}>
              Open question
              <ArrowRight size={13} />
            </button>
          </div>
        ))}
    </div>
  );
}
