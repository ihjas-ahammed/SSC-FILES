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
      if (pdf?.startsWith("blob:")) URL.revokeObjectURL(pdf);
    },
    [pdf],
  );
  return (
    <div className="source-body">
      <div>
        <h2>{meta.sourceName}</h2>
        {pdf && (
          <a
            className="secondary"
            href={`${pdf}#page=${question.page}`}
            target="_blank"
            rel="noreferrer"
          >
            Open PDF
            <ExternalLink size={14} />
          </a>
        )}
      </div>
      <p>
        {pdf
          ? "Question labels and mathematical typography are transcribed in the app. The original wording, including printing errors, is preserved here."
          : `The exercise is quoted from ${meta.sourceName}. Read it in your own copy of the book${meta.sourceLocation ? ` (${meta.sourceLocation})` : ""} for the original figures.`}
      </p>
      {pdf && (
        <iframe
          src={`${pdf}#page=${question.page}`}
          title={`Original ${meta.module} question bank`}
        />
      )}
      <details open={!pdf}>
        <summary>Exact extracted text · page {question.page}</summary>
        <pre>{question.sourcePageText}</pre>
      </details>
    </div>
  );
}
