"""Read-only source/content checks; never writes educational course data."""
import json, math, re, xml.etree.ElementTree as ET
from pathlib import Path
import sympy as sp

root = Path(__file__).resolve().parents[1]
reports = {}
for subject in ("electrodynamics-ii", "optics"):
    data = json.loads((root/"data"/f"{subject}-model-paper-4-practice.json").read_text())
    sheets = [sh for sec in data["sections"] for sh in sec["sheets"]]
    cards = [c for sh in sheets for c in sh["cards"]]
    assert [len(sec["sheets"]) for sec in data["sections"]] == [10,8,2]
    assert len({sh["id"] for sh in sheets}) == 20
    questions = [c for c in cards if c["type"] == "question"]
    assert [c["title"] for c in questions] == [f"Question {n}" for n in range(1,21)]
    assert [q["marks"] for q in questions] == [3]*10+[6]*8+[10]*2
    assert sum(bool(q.get("recallAnswer")) for q in questions) == 10
    quiz_prompts = []
    for sh in sheets:
        ev = [c for c in sh["cards"] if c["type"] == "eval"]
        assert sum(max(o["m"] for o in c["options"]) for c in ev) == sh["marks"]
        assert all(any(o["m"] == 0 for o in c["options"]) for c in ev)
        key = [i for i,c in enumerate(sh["cards"]) if c["type"] == "key"]
        assert len(key) == 1
        quiz = sh["cards"][key[0]+1:]
        assert len(quiz) == 3
        for c in quiz:
            assert c["type"] == "mcq" and c["practice"] == "remember-word"
            assert c["q"].count("____") == 1 and len(c["options"]) == 4
            assert c["time"] == 45 and 0 <= c["answer"] < 4
            assert c["why"] and not any(re.search(r"[0-9\\]",o) for o in c["options"])
            quiz_prompts.append(c["q"])
    assert len(set(quiz_prompts)) == 60
    for c in cards:
        if c["type"] == "info": assert len(c.get("body","")) <= 220
        if c.get("art"): ET.fromstring(c["art"])
        if c["type"] == "derivation": assert sum("ask" in s for s in c["steps"]) == 4
    assert (root/"data"/f"{subject}-model-paper-4-practice.json").read_bytes() == (root/"source/data"/f"{subject}-model-paper-4-practice.json").read_bytes()
    reports[subject] = dict(questions=20,flips=10,authoredCards=len(cards),
        derivations=sum(c["type"]=="derivation" for c in cards),
        diagrams=sum(bool(c.get("art")) for c in cards),wordQuizzes=60,rubricsSumCorrectly=True)

# Independent AC calculations for all numerical source questions.
p=math.pi
assert math.isclose(1/(2*p*50*25e-6),127.3239544735,rel_tol=1e-10)
assert math.isclose(220*2*p*50*25e-6,1.72787595947,rel_tol=1e-10)
assert math.isclose(math.sqrt(2)*220*2*p*50*25e-6,2.44358561599,rel_tol=1e-10)
xl=2*p*25*.01; z=math.hypot(1.5,xl); current=100/z
assert math.isclose(current,46.0414081702,rel_tol=1e-10)
assert math.isclose(math.degrees(math.atan2(xl,1.5)),46.3207037701,rel_tol=1e-10)
assert math.isclose(current*1.5,69.0621122553,rel_tol=1e-10)
assert math.isclose(current*xl,72.3216748343,rel_tol=1e-10)
assert math.isclose(1/((2*p*50)**2*5),2.02642367285e-6,rel_tol=1e-10)
assert math.isclose(2*p*50*5,1570.79632679,rel_tol=1e-10)
z=math.hypot(200,2*p*100*5)
assert math.isclose(200/z,.063533361911,rel_tol=1e-10)
assert math.isclose((10/z)**2*200,.00201824403785,rel_tol=1e-10)
net=2*p*50*.3-1/(2*p*50*40e-6);z=math.hypot(52,net)
assert math.isclose(z,54.0297875123,rel_tol=1e-10)
assert math.isclose(200/z,3.70166179081,rel_tol=1e-10)
assert math.isclose(52/z,.962432065611,rel_tol=1e-10)
assert math.isclose((200/z)**2*52,712.519600705,rel_tol=1e-10)

# Symbolic physics checks, including finite-loss parallel resonance.
w,L,C,R=sp.symbols("w L C R",positive=True,real=True)
Y=1/(R+sp.I*w*L)+sp.I*w*C
wr2=1/(L*C)-R**2/L**2
assert sp.simplify(sp.im(Y)/w).subs(w**2,wr2).simplify()==0
assert sp.simplify(sp.re(Y).subs(w**2,wr2)-R*C/L)==0
beta=sp.symbols("beta",real=True)
assert sp.simplify(sp.diff((sp.sin(beta)/beta)**2,beta)-2*sp.sin(beta)*(beta*sp.cos(beta)-sp.sin(beta))/beta**3)==0
assert sp.simplify((sp.sin(beta)/beta)**2*sp.cos(beta)**2-(sp.sin(2*beta)/(2*beta))**2)==0
roots=[float(sp.nsolve(sp.tan(beta)-beta,guess)) for guess in (4.5,7.7)]
assert math.isclose(roots[0],4.49340945791,rel_tol=1e-10)
ys=[.2*5e-7*b/(p*.0002)*1000 for b in roots]
assert math.isclose(2*ys[0],1.43029665312,rel_tol=1e-10)
assert math.isclose(ys[1]-ys[0],.514363689916,rel_tol=1e-10)
d=.0254/15000; lambdas=[589e-9,589.6e-9]
angles=[math.asin(2*l/d) for l in lambdas]
assert math.isclose(angles[1]-angles[0],.000986967812571,rel_tol=1e-10)
angles=[math.asin(l/d) for l in lambdas]
assert math.isclose(.1*(angles[1]-angles[0])*1000,.0377956730572,rel_tol=1e-10)
assert math.isclose(.1*(math.tan(angles[1])-math.tan(angles[0]))*1000,.0430039815839,rel_tol=1e-10)
assert math.isclose(.1**2/(5e-5),200,rel_tol=1e-10)
scale=math.sqrt(6e-7*.5/2)*1000
for v,want in [(1.22,.472503968237),(2.34,.906278103013),(1.87,.724247885741)]:
    assert math.isclose(v*scale,want,rel_tol=1e-10)
reports["independentNumericalAndSymbolicPhysicsChecks"]=True
(root/"verification/content-check.json").write_text(json.dumps(reports,indent=2)+"\n")
print(json.dumps(reports,indent=2))
