import { useMemo, useEffect } from "react";
import { meta } from "../../lib/course.js";
import { sourcePdfUrl } from "../../lib/source";
import { ExternalLink } from "lucide-react";
import { useAtlas } from "../../app/AtlasContext";

export default function SourceDialog() {
  const { question } = useAtlas();
  const pdf = useMemo(sourcePdfUrl, []);
  useEffect(
    () => () => {
      if (pdf.startsWith("blob:")) URL.revokeObjectURL(pdf);
    },
    [pdf],
  );
  return (
    <div className="source-body">
      <div>
        <h2>{meta.sourceName}</h2>
        <a
          className="secondary"
          href={`${pdf}#page=${question.page}`}
          target="_blank"
          rel="noreferrer"
        >
          Open PDF
          <ExternalLink size={14} />
        </a>
      </div>
      <p>
        Question labels and mathematical typography are transcribed in the app.
        The original wording, including printing errors, is preserved here.
      </p>
      <iframe
        src={`${pdf}#page=${question.page}`}
        title={`Original ${meta.module} question bank`}
      />
      <details>
        <summary>Exact extracted text · page {question.page}</summary>
        <pre>{question.sourcePageText}</pre>
      </details>
    </div>
  );
}
