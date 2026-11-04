/* Exam marks are independent of match goals, quiz correctness and recall. */
(function () {
  var SM = window.SM;
  function fmt(n) { return String(Math.round(n * 100) / 100); }
  SM.examMarks = function () {
    var total = 0, marked = 0, questions = 0;
    var sections = SM.SECTIONS.map(function (sec) {
      var rows = sec.sheets.map(function (sh) {
        var ev = sh.cards.filter(function (c) { return c.type === 'eval'; });
        var got = 0, possible = 0, done = 0;
        ev.forEach(function (c) {
          possible += Math.max.apply(null, c.options.map(function (o) { return o.m; }));
          var s = SM.S.cards[c.id];
          if (s && s.done) { done++; got += Math.max(0, Math.min(+s.marks || 0, Math.max.apply(null, c.options.map(function (o) { return o.m; })))); }
        });
        questions++; if (ev.length && done === ev.length) marked++;
        return { id: sh.id, title: sh.title, got: got, possible: possible, checks: done, totalChecks: ev.length };
      });
      var scores = rows.map(function (row) { return row.got; }).sort(function (a,b) { return b-a; });
      var counted = sec.bestOf ? scores.slice(0, sec.bestOf) : scores;
      var got = Math.min(sec.markCap, counted.reduce(function (a,b) { return a+b; }, 0));
      total += got;
      return { title: sec.short, got: got, cap: sec.markCap, bestOf: sec.bestOf || 0, rows: rows };
    });
    return { total: total, maximum: SM.meta.exam.maximum, marked: marked, questions: questions, sections: sections };
  };
  SM.renderExamMarks = function () {
    if (!SM.meta.exam) return;
    var result = SM.examMarks(), percentage = result.total / result.maximum * 100;
    SM.$('examMarkTotal').textContent = fmt(result.total) + ' / ' + result.maximum;
    SM.$('examMarkedCount').textContent = result.marked + ' / ' + result.questions + ' marked';
    SM.$('examMarkFill').style.width = percentage + '%';
    SM.$('examMeter').setAttribute('aria-label', 'Exam marks: ' + fmt(result.total) + ' out of ' + result.maximum + '. ' + result.marked + ' questions fully marked. Open breakdown.');
    SM.$('examSummaryTotal').textContent = fmt(result.total) + ' / ' + result.maximum + ' · ' + fmt(percentage) + '% so far';
    SM.$('examSectionMarks').innerHTML = result.sections.map(function (sec) {
      return '<p class="exam-section-row"><b>' + SM.esc(sec.title) + (sec.bestOf ? ' · best ' + sec.bestOf : '') +
        '</b><strong>' + fmt(sec.got) + ' / ' + sec.cap + '</strong></p>';
    }).join('');
    SM.$('examQuestionMarks').innerHTML = result.sections.map(function (sec) {
      return '<h3>' + SM.esc(sec.title) + '</h3>' + sec.rows.map(function (row) {
        return '<p><span>' + SM.esc(row.title) + '<small>' + row.checks + ' / ' + row.totalChecks +
          ' rubric parts marked</small></span><b>' + fmt(row.got) + ' / ' + row.possible + '</b></p>';
      }).join('');
    }).join('');
  };
  SM.initExamMarks = function () {
    if (!SM.meta.exam) return;
    SM.$('examMeter').hidden = false;
    SM.$('examHeading').textContent = SM.meta.subject + ' · Day 8';
    SM.$('examSubtitle').textContent = 'Model Paper 4 · 2 hours · 70 marks';
    SM.$('examMeter').addEventListener('click', function () {
      SM.CARDS.forEach(function (c) { if (c.player && c.player.isPlaying()) c.player.pause(); });
      SM.renderExamMarks(); SM.$('examSummary').showModal();
    });
    SM.$('examSummaryClose').addEventListener('click', function () { SM.$('examSummary').close(); });
    SM.renderExamMarks();
  };
})();
