import { ArrowRight, BookOpen, Network, Target } from "lucide-react";

import { useAtlas } from "../../app/AtlasContext";

export default function HelpDialog() {
  const { setModal } = useAtlas();
  return (
    <div className="help-body">
      <span className="eyebrow">A MAP, NOT A MEMORIZATION LIST</span>
      <h2>Follow the connections.</h2>
      <div>
        <Network />
        <section>
          <h3>Every concept connects to its foundations.</h3>
          <p>
            Connections run from prerequisite concepts to the ideas that depend
            on them. Tap a star to fly closer, then open Concept for its
            definition and example. Search & controls has topic destinations and
            search. Drag to orbit; Shift/right-drag to pan; scroll to zoom. On
            touch, pinch to zoom and move two fingers together to pan. Fit shows
            the whole map. A reading route also highlights the order of its
            stops.
          </p>
        </section>
      </div>
      <div>
        <Target />
        <section>
          <h3>Think before you peek.</h3>
          <p>
            Start a self-check. Each proof becomes small objective steps, with
            options hidden until you reveal them.
          </p>
        </section>
      </div>
      <div>
        <BookOpen />
        <section>
          <h3>Read only what you need.</h3>
          <p>
            Mark your gaps, follow the deduplicated reading route, and retest
            only those gaps. Passing recall marks a concept known; reading alone
            does not.
          </p>
        </section>
      </div>
      <button className="primary full" onClick={() => setModal(null)}>
        Let’s explore
        <ArrowRight size={15} />
      </button>
    </div>
  );
}
