"""Reproducible, human-authored ED content assembly; no network or model calls."""
from pathlib import Path
import importlib, json, re, html
ROOT=Path(__file__).resolve().parent

def box(kind,label,body): return f'<div class="box {kind}"><span class="lab">{label}</span><p>{body}</p></div>'
def steps(text):
    parts=text.split(';;')
    if len(parts)==1: return '<p>'+text+'</p>'
    out='<div class="steps">'
    for part in parts:
        a,*b=part.split('::',1)
        out+='<div class="step">'+a+(f'<span class="why">Why: {b[0]}</span>' if b else '')+'</div>'
    return out+'</div>'
def cover(mod,title,kind,sub):
    return f'<section class="cover"><div><div class="kicker">Electrodynamics II · Semester 5</div><h1>{title}</h1><p class="sub">Module {mod} · {kind}</p></div><div>{sub}<div class="band"></div><p class="small">CU-FYUGP syllabus 2024 · study edition<br>SI units · phone pages · October 2026</p></div></section>'
def head(code,title):return f'<div class="topic-head"><span class="tid">{code}</span><h2>{title}</h2></div>'
def parse_topics(s):
    return [dict(zip(['code','title','idea','result','explain','trap','check','figure'],line.split('|'))) for line in s.strip().splitlines() if line.strip()]
def parse_questions(s):
    qs=[]
    for n,line in enumerate(s.strip().splitlines(),1):
        if not line.strip():continue
        t,target,prompt,answer,final=line.split('|')
        qs.append(dict(n=n,topic=t,target=target,prompt=prompt,answer=answer,final=final,marks=3 if n<=20 else 6 if n<=36 else 10,tags=[]))
    return qs

def write(mod):
    d=importlib.import_module('content_m'+str(mod)); topics=parse_topics(d.TOPICS); qs=parse_questions(d.QUESTIONS)
    assert len(qs)==40,(mod,len(qs))
    assert len({q['target'] for q in qs})==40
    titles={t['code']:t['title'] for t in topics}
    assert all(q['topic'] in titles for q in qs)
    mapping=ROOT/'research'/'pyq_mapping.json'
    maps=json.loads(mapping.read_text()) if mapping.exists() else []
    for m in maps:
        if m['module']==mod: qs[m['question']-1]['tags'].append(m['tag'])
    dest=ROOT/'src'/f'm{mod}';dest.mkdir(exist_ok=True)
    def tag(q):return ' '.join(f'<span class="src">{html.escape(t)}</span>' for t in q['tags']) or '<span class="small">Model · syllabus-based</span>'
    def refs(q):return '<div class="need"><b>Know first</b><span class="chip">'+q['topic']+'</span><span class="chip pre">P1</span><span class="chip math">M1</span></div>'
    p=cover(mod,d.TITLE,'Prepare','<p>Start with the idea. Learn the mathematics. Work the questions. Check the result.</p>')
    p+='<section class="page"><h2>How to use this book</h2><p>P means prerequisite, M means mathematics, T means topic and Q means the numbered practice question. Topic codes restart in each module. Read P1 and M1 first, then follow the topics in order.</p>'
    for kind,label,body in [('remind','Remind me','A fact from school that we will use again.'),('maths','Maths tool','The meaning of a symbol and the operation it asks you to do.'),('idea','The idea','A physical explanation before the equation.'),('result','Result','The statement to carry into an exam.'),('trap','Exam trap','An assumption, sign or unit that changes the answer.'),('check','Check yourself','Cover the answer and try. Then explain why your answer makes sense.')]: p+=box(kind,label,body)
    p+='</section><section><h2>One rule for this module</h2>'+box('idea','Keep this in mind',d.RULE)+'<h3>The whole module in five sentences</h3><ol>'+''.join('<li>'+s+'</li>' for s in d.STORY)+'</ol><h3>Syllabus route</h3><p>'+d.SOURCE+'</p><p class="small">Definitions and derivations are independently explained from the named textbook sections. Worked numerical values are original practice unless a past-paper tag is printed.</p></section>'
    p+='<section><h2>Topic route</h2><p class="small">'+{1:'Unit 1 → T1–T3; unit 2 → T4; unit 3 → T5–T7; unit 4 → T8–T9; unit 5 → T10–T13.',2:'Unit 6 → T1–T3; unit 7 → T4–T7; unit 8 → T8–T11.',3:'Unit 9 → T1–T3; unit 10 → T4; unit 11 → T5; unit 12 → T6; unit 13 → T7–T8; unit 14 → T9.',4:'Units 15–16 → T1–T5; unit 17 → T6; unit 18 → T7; unit 19 → T8; unit 20 → T8–T9; unit 21 → T10; unit 22 → T11.'}[mod]+'</p><div class="toc">'+''.join(f'<div>{t["code"]} · {t["title"]}</div>' for t in topics)+'</div></section>'
    p+='<section class="page">'+head('P1','School physics bridge')+d.BRIDGE+'</section><section>'+head('M1','Mathematics from the beginning')+d.MATHS+'</section>'
    for t in topics:
        relevant=[q for q in qs if q['topic']==t['code']]
        p+='<section class="topic"><div class="keep">'+head(t['code'],t['title'])+f'<p class="oneline">Purpose: {t["idea"]}</p></div>'
        p+=box('remind','Before you start','Use P1 for the physical quantities and M1 for the mathematics. '+d.REMIND)
        p+=box('idea','The idea',t['idea'])
        if t['figure']:p+='{{fig:'+t['figure']+'}}'
        p+=steps(t['explain'])+box('result','Result',t['result'])+box('trap','Exam trap',t['trap'])
        ask,ans=t['check'].split('=>',1);p+=box('check','Check yourself','<b>'+ask+'</b><br>Answer: '+ans)
        p+='<p class="small">This topic supports '+', '.join('Q'+str(q['n']) for q in relevant)+'.</p></section>'
        for q in relevant:
            p+=f'<section class="worked"><div class="keep"><h3>Work it through · Q{q["n"]}</h3><p class="small">Skill: {q["target"]}. {tag(q)}</p><p class="q">{q["prompt"]}</p></div>'
            
            p+=steps(q['answer'])+box('result','Check the endpoint',q['final'])+'</section>'
    p+='<section><h2>Formula and condition sheet</h2>'+''.join(f'<h3>{t["code"]} · {t["title"]}</h3><p>{t["result"]}</p>' for t in topics)+'</section>'
    p+='<section><h2>Past-paper route</h2>'+source_route(qs)+'</section>'
    (dest/'prepare.html').write_text(p)
    p=cover(mod,d.TITLE,'PYQ + model paper','<p>40 questions · 20 short + 16 problems + 4 essays<br>Double the question count of the supplied April 2026 FYUGP prerequisite paper.</p>')
    p+='<section class="page"><h2>Practice instructions</h2><p>Suggested time: two sittings of two hours. Section A: 20 questions × 3 marks, ceiling 48. Section B: 16 × 6, ceiling 72. Section C: answer any two of four × 10. Maximum: 140.</p><p>This doubles the supplied April 2026 <b>Electrodynamics I</b> 70-mark practice pattern. The current ED II syllabus specifies 70 theory marks but does not supply a question pattern here. This is a study paper, not an official FYUGP mock.</p><p>Each numbered question has a distinct primary assessment target. Longer questions combine earlier methods. N25 means November 2025 CBCSS ED I; A26 means April 2026 FYUGP ED I. Tags explicitly identify these older or prerequisite courses. Expanded/adapted means wording, scope or mark allocation was changed. Overlapping past questions are tagged with their original course and number; untagged questions are original model practice.</p><p>All four theory modules are included in the set. Module V is laboratory work and is outside this theory-paper series.</p></section>'
    for q in qs:
        n=q['n']
        if n in [1,21,37]:p+='<div class="section-head"><b>Section '+('A · Short answers' if n==1 else 'B · Problems and explanations' if n==21 else 'C · Essays')+'</b><small>'+('3 marks each · ceiling 48' if n==1 else '6 marks each · ceiling 72' if n==21 else '10 marks each · answer any two')+'</small></div>'
        p+=f'<div class="qq"><span class="n">{n}.</span><div>{q["prompt"]}<div class="meta">{tag(q)}</div></div></div>'
    p+='<section class="coverage"><h2>Coverage audit</h2><p>40 numbered questions; 40 primary targets. The list below makes the intended distinction explicit.</p>'
    p+=''.join(f'<p class="small"><b>Q{q["n"]} · {q["topic"]}</b> {q["target"]}</p>' for q in qs)
    p+='<h3>Past-paper accounting</h3>'+source_summary(qs)+'</section>'
    (dest/'paper.html').write_text(p)
    p=cover(mod,d.TITLE,'Answer key','<p>40 worked answers. Each answer names the prepare topic to revise first. Mark splits are suggested study rubrics.</p>')
    for q in qs:
        if q['n'] in [1,21,37]:p+='<section><div class="section-head"><b>Section '+('A' if q['n']==1 else 'B' if q['n']==21 else 'C')+'</b></div></section>'
        p+=f'<article><div class="ans-head"><span class="n">Q{q["n"]}</span>{tag(q)}</div><p class="q">{q["prompt"]}</p>'+refs(q)
        rubric={3:'1 mark: correct physical statement; 1 mark: explanation or calculation; 1 mark: required result with condition/unit.',6:'1 mark: law and assumptions; 4 marks: explanation or calculation; 1 mark: conclusion with units/limiting check.',10:'2 marks: definitions and assumptions; 5 marks: connected derivation/explanation; 2 marks: application or physical interpretation; 1 mark: final result and conditions.'}[q['marks']]
        p+=answer_body(q,rubric)+'</article>'
    (dest/'answers.html').write_text(p)
    (ROOT/'research'/f'coverage_m{mod}.json').write_text(json.dumps({'module':mod,'topics':topics,'questions':qs},indent=2))

def answer_body(q,rubric):
    body=steps(q['answer'])
    ending=f'<div class="final">{q["final"]}</div><p class="marking">Marks: {rubric}</p>'
    if q['n']==40 and '<div class="step">' in body:
        lead,tail=body.rsplit('<div class="step">',1)
        number=len(q['answer'].split(';;'))-1
        return lead+'</div><div class="keep"><div class="steps" style="counter-reset:st '+str(number)+'"><div class="step">'+tail+ending+'</div>'
    return body+ending

def source_summary(qs):
    tagged=[q for q in qs if q['tags']]
    if not tagged:return source_route(qs)
    return '<p>'+str(sum(len(q['tags']) for q in tagged))+' distinct questions from the supplied ED I papers are represented at '+', '.join('Q'+str(q['n']) for q in tagged)+'. Their course, date and any adaptations are printed beside the questions. Full original wordings and exclusions are in the source inventory.</p>'

def source_route(qs):
    tagged=[q for q in qs if q['tags']]
    if not tagged:return '<p>No question from the supplied local past papers maps directly to this module. All 40 are model questions, guided by the syllabus; no invented PYQ provenance.</p>'
    return ''.join(f'<p class="small"><b>Q{q["n"]} → {q["topic"]}</b><br>'+html.escape('; '.join(q['tags']))+'</p>' for q in tagged)
if __name__=='__main__':
    for m in range(1,5): write(m)
