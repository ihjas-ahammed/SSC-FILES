"""
Generate section JS files from DATA/extracted/CHAPTERn.MD files.
One JS file per unit, following the existing convention (section3_1.js = one export).

Covers:
  - Chapter 1 → src/data/section5/   (units u5_1..u5_7)
  - Chapter 2 → src/data/section6/   (units u6_1..u6_6)
  - Chapter 3 → src/data/section7/   (units u7_1..u7_4)
  - Chapter 4 → src/data/section3/   (units unit87..unit92, extending existing unit81-86)
  - Chapter 6 → src/data/section2/   (units unit71..unit74, extending existing unit61-70)
  - Chapter 7 → src/data/section8/   (units u8_1..u8_6)
  - Chapter 9 → src/data/section9/   (units u9_1..u9_3)
"""

import os, re, json

ROOT = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(ROOT, "DATA", "extracted")
SRC_DIR = os.path.join(ROOT, "src", "data")


def has_arabic(s):
    return any("؀" <= c <= "ۿ" for c in s)


def mostly_arabic(p):
    ar = sum(1 for c in p if "؀" <= c <= "ۿ")
    return ar > len(p) * 0.4


def read_md(num):
    with open(os.path.join(DATA_DIR, f"CHAPTER{num}.MD"), encoding="utf-8") as f:
        return f.read()


def split_paragraphs(md_text):
    paras, cur = [], []
    for raw in md_text.split("\n"):
        line = raw.rstrip()
        if not line:
            if cur:
                paras.append(" ".join(cur).strip())
                cur = []
            continue
        s = line.strip()
        if s.startswith(("#", "---", "|", "```", "**(Page", "**(")):
            continue
        if not has_arabic(s):
            continue
        s = re.sub(r"\*\*", "", s).strip()
        if s:
            cur.append(s)
    if cur:
        paras.append(" ".join(cur).strip())
    return [p for p in paras if mostly_arabic(p) and len(p) > 30]


# ── JS renderer ──────────────────────────────────────────────────────────────

def js_str(s):
    return json.dumps(s, ensure_ascii=False)


def rv(v, indent=0):
    pad, pad_in = "  " * indent, "  " * (indent + 1)
    if isinstance(v, dict):
        if not v:
            return "{}"
        lines = ["{"]
        items = list(v.items())
        for i, (k, val) in enumerate(items):
            comma = "," if i < len(items) - 1 else ""
            lines.append(f"{pad_in}{k}: {rv(val, indent+1)}{comma}")
        lines.append(pad + "}")
        return "\n".join(lines)
    if isinstance(v, list):
        if not v:
            return "[]"
        lines = ["["]
        for i, item in enumerate(v):
            comma = "," if i < len(v) - 1 else ""
            lines.append(f"{pad_in}{rv(item, indent+1)}{comma}")
        lines.append(pad + "]")
        return "\n".join(lines)
    if isinstance(v, bool):
        return "true" if v else "false"
    if v is None:
        return "null"
    if isinstance(v, (int, float)):
        return str(v)
    return js_str(v)


def write_unit(folder, filename, var_name, unit_data):
    os.makedirs(folder, exist_ok=True)
    path = os.path.join(folder, filename)
    content = f"export const {var_name} = {rv(unit_data, 0)};\n"
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(content)
    print(f"  wrote {path}")


# ── Lesson builder ────────────────────────────────────────────────────────────

def lesson(lid, title, ar, en, vocab, fb=None):
    slides = [{"type": "sentence", "arabic": ar, "english": en}]
    for w, tr, trans, ex_ar, ex_en in vocab:
        slides.append({
            "type": "vocabulary",
            "word": w, "transliteration": tr, "translation": trans,
            "example": {"ar": ex_ar, "en": ex_en},
        })
    if len(vocab) >= 3:
        slides.append({"type": "match",
                        "pairs": [{"ar": v[0], "en": v[2]} for v in vocab[:4]]})
    if fb:
        slides.append({
            "type": "fill-blank",
            "sentence": fb["s"], "translation": fb["t"],
            "answer": fb["a"], "options": fb["o"],
        })
    return {"id": lid, "title": title, "slides": slides}


def unit(uid, title, lessons_list):
    return {"id": uid, "title": title, "lessons": lessons_list}


# ── Chapter builders ─────────────────────────────────────────────────────────

def chapter1_units():
    p = split_paragraphs(read_md(1))
    # p[0] = pillars/mirror, p[1] = not-just-trip, p[2] = types/goals,
    # p[3] = economy, p[4] = bridge, p[5] = expands mind, p[6] = open school,
    # p[7] = duty of state, p[8] = civilization is morals
    return [
        unit("u5_1", "Tourism: The Foundation", [
            lesson("u5_1_l1", "Tourism as a Pillar", p[0],
                   "Tourism is among the basic pillars in building the economy of nations. It is not merely entertainment but a mirror reflecting the civilization, cultures, and ancient history of peoples.",
                   [("السِّيَاحَةُ","As-siyahah","Tourism","السِّيَاحَةُ مُهِمَّةٌ","Tourism is important"),
                    ("الرَّكَائِزِ","Ar-raka'iz","Pillars","رَكَائِزُ الِاقْتِصَادِ","Pillars of the economy"),
                    ("مِرْآةٌ","Mir'ah","Mirror","السِّيَاحَةُ مِرْآةُ الحَضَارَةِ","Tourism is a mirror of civilization"),
                    ("حَضَارَةَ","Hadarah","Civilization","حَضَارَةُ الشُّعُوبِ","The civilization of peoples")],
                   fb={"s":"السِّيَاحَةُ ____ تَعْكِسُ حَضَارَةَ الشُّعُوبِ",
                       "t":"Tourism is a mirror that reflects civilization",
                       "a":"مِرْآةٌ","o":["نَافِذَةٌ","مِرْآةٌ","صُورَةٌ"]}),
        ]),
        unit("u5_2", "A Journey to Knowledge", [
            lesson("u5_2_l1", "Tourism Opens Doors", p[1],
                   "Tourism is not merely a trip; it opens to tourists the doors of learning and discovery. The Holy Quran pointed to the importance of contemplation in the earth: 'Say: travel the earth and see how creation began.'",
                   [("المَعْرِفَةِ","Al-ma'rifah","Knowledge","بَابُ المَعْرِفَةِ","The door of knowledge"),
                    ("الِاكْتِشَافِ","Al-iktishaf","Discovery","رِحْلَةُ الِاكْتِشَافِ","Journey of discovery"),
                    ("التَّأَمُّلِ","At-ta'ammul","Contemplation","التَّأَمُّلُ فِي الأَرْضِ","Contemplation in the earth")],
                   fb={"s":"تَفْتَحُ أَمَامَ السُّيَّاحِ أَبْوَابَ التَّعَلُّمِ وَ____",
                       "t":"Opens to tourists the doors of learning and discovery",
                       "a":"الِاكْتِشَافِ","o":["النَّوْمِ","الِاكْتِشَافِ","الأَكْلِ"]}),
            lesson("u5_2_l2", "Types of Tourism", p[2],
                   "Tourism goals may be recreational, for people seeking enjoyment and seeing the world; religious, to visit holy places; or commercial, for signing deals and attending exhibitions.",
                   [("تَرْفِيهِيَّةً","Tarfihiyyah","Recreational","سِيَاحَةٌ تَرْفِيهِيَّةٌ","Recreational tourism"),
                    ("دِينِيَّةً","Diniyyah","Religious","سِيَاحَةٌ دِينِيَّةٌ","Religious tourism"),
                    ("تِجَارِيَّةٌ","Tijariyyah","Commercial","سِيَاحَةٌ تِجَارِيَّةٌ","Commercial tourism")]),
        ]),
        unit("u5_3", "Economy and Society", [
            lesson("u5_3_l1", "Tourism and Economy", p[3],
                   "Tourism has great importance in the economy and development. It provides employment and opens fields of transport, hotels, work, and public services.",
                   [("الاِقْتِصَادِ","Al-iqtisad","Economy","اِقْتِصَادُ الدَّوْلَةِ","Economy of the state"),
                    ("الفَنَادِقِ","Al-fanadiq","Hotels","فُنْدُقٌ كَبِيرٌ","A big hotel"),
                    ("الخِدَمَاتِ","Al-khadamat","Services","الخِدَمَاتُ العَامَّةُ","Public services"),
                    ("التِّجَارَةِ","At-tijarah","Trade","حَرَكَةُ التِّجَارَةِ","Movement of trade")],
                   fb={"s":"السِّيَاحَةُ تُسْهِمُ فِي ____ أَعْدَادٍ كَبِيرَةٍ",
                       "t":"Tourism contributes to employing large numbers",
                       "a":"تَشْغِيلِ","o":["إِغْلَاقِ","تَشْغِيلِ","تَعْطِيلِ"]}),
            lesson("u5_3_l2", "Bridge of Nations", p[4],
                   "Travel and tourism is a great bridge in our modern economy. It provides investment opportunities, opens new horizons, and contributes to bringing peoples closer to each other.",
                   [("جِسْرٌ","Jisr","Bridge","جِسْرُ التَّوَاصُلِ","Bridge of communication"),
                    ("الِاسْتِثْمَارِ","Al-istithmar","Investment","فُرَصُ الِاسْتِثْمَارِ","Investment opportunities"),
                    ("الشُّعُوبِ","Ash-shu'ub","Peoples","تَقْرِيبُ الشُّعُوبِ","Bringing peoples closer")]),
        ]),
        unit("u5_4", "Duty and Civilization", [
            lesson("u5_4_l1", "Duty of the State", p[7],
                   "It is the duty of the state and society to develop tourism and preserve the environment. The state must improve infrastructure, restore historical sites, and prepare strategic plans to attract tourists.",
                   [("الدَّوْلَةِ","Ad-dawlah","State","دَوْرُ الدَّوْلَةِ","Role of the state"),
                    ("البِنْيَة التَّحْتِيَّة","Al-binyah","Infrastructure","تَحْسِينُ البِنْيَةِ","Improving infrastructure"),
                    ("تَرْمِيمِ","Tarmim","Restoration","تَرْمِيمُ المَوَاقِعِ","Restoring sites"),
                    ("اسْتِرَاتِيجِيَّةٍ","Istratijiyyah","Strategic","خُطَّةٌ اسْتِرَاتِيجِيَّةٌ","A strategic plan")],
                   fb={"s":"تَحْسِينُ ____ التَّحْتِيَّةِ مِنْ طُرُقٍ وَمُوَاصَلَاتٍ",
                       "t":"Improving infrastructure of roads and transport",
                       "a":"البِنْيَةِ","o":["البِنْيَةِ","السَّيَّارَةِ","المَدِينَةِ"]}),
            lesson("u5_4_l2", "Manners are Civilization", p[8],
                   "Civilization is not high buildings but the morals of citizens and their behavior with visitors. Tourism is not merely moving between places; it builds hope in souls and is a bridge of human communication.",
                   [("أَخْلَاقُ","Akhlaq","Morals","أَخْلَاقُ المُوَاطِنِينَ","Morals of citizens"),
                    ("سُلُوكُهُمْ","Sulukuhum","Their behavior","سُلُوكٌ حَسَنٌ","Good behavior"),
                    ("الإِبْدَاعِ","Al-ibda'","Creativity","رَوْحُ الإِبْدَاعِ","Spirit of creativity")]),
        ]),
    ]


def chapter2_units():
    p = split_paragraphs(read_md(2))
    # p[0]=mother crying, p[1]=cafe+suspicious man, p[2]=friendship grew,
    # p[3]=poisoned juice, p[5]=stimulants, p[7]=center, p[8]=accident, p[9]=recovery
    return [
        unit("u6_1", "A Mother's Tears", [
            lesson("u6_1_l1", "The Crying Mother", p[0],
                   "My mother kept crying overwhelmingly until she nearly died. I was intoxicated with heroin and didn't care for her words. She went to various temples, managed all affairs, and spent all her money to restore my life.",
                   [("تَبْكِي","Tabki","Crying","أُمِّي تَبْكِي","My mother is crying"),
                    ("ثَمِلًا","Thamilan","Intoxicated","كَانَ ثَمِلًا","He was intoxicated"),
                    ("إِهْمَال","Ihmal","Neglect","أَهْمَلْتُهَا","I neglected her"),
                    ("الوِلَادَة المُبَكِّرَة","Al-wiladah","Premature birth","وِلَادَةٌ مُبَكِّرَةٌ","A premature birth")],
                   fb={"s":"أُمِّي لَمْ تَزَلْ ____",
                       "t":"My mother was still crying",
                       "a":"تَبْكِي","o":["تَضْحَكُ","تَبْكِي","تَنَامُ"]}),
        ]),
        unit("u6_2", "The Dangerous Stranger", [
            lesson("u6_2_l1", "At the Cafe", p[1],
                   "I was alone at the cafe. I had earned high grades in all weekly tests at the medical training center and my dreams began touching the sky. A person approached me — sweet-tongued and decently dressed.",
                   [("المَقْهَى","Al-maqha","The cafe","ذَهَبْتُ إِلَى المَقْهَى","I went to the cafe"),
                    ("بِمُفْرَدِي","Bimufradi","By myself","كُنْتُ بِمُفْرَدِي","I was by myself"),
                    ("دَرَجَات","Darajat","Grades","دَرَجَاتٌ عَالِيَةٌ","High grades"),
                    ("حُلْو","Hulw","Sweet","حُلْوُ المَنْطِقِ","Sweet of tongue")],
                   fb={"s":"اقْتَرَبَ مِنِّي شَخْصٌ وَهُوَ ____ المَنْطِقِ",
                       "t":"A person approached who was sweet-tongued",
                       "a":"حُلْوُ","o":["حُلْوُ","مُرُّ","بَطِيءُ"]}),
            lesson("u6_2_l2", "Weeks of Friendship", p[2],
                   "Within weeks the relationship grew. But danger was lurking intensely, like a tiger stalking its prey. We visited this place and talked for long hours, adorning our meetings with various drinks.",
                   [("الخَطَرُ","Al-khatar","Danger","الخَطَرُ كَانَ مُتَرَصِّدًا","Danger was lurking"),
                    ("فَرِيسَتَه","Farisatahu","Its prey","يَتَرَصَّدُ فَرِيسَتَهُ","Stalking its prey"),
                    ("زَخْرَفْنَا","Zakhrafna","We adorned","زَخْرَفْنَا اللِّقَاءَاتِ","We adorned the meetings")]),
        ]),
        unit("u6_3", "Falling Into the Trap", [
            lesson("u6_3_l1", "The Poisoned Juice", p[3],
                   "He poured something into my juice glass. I didn't know it at that moment. I started feeling sudden dizziness. He took me to his room pretending to want to help me. This event only increased my love for him.",
                   [("سَكَبَ","Sakaba","Poured","سَكَبَ فِي الزُّجَاجِ","He poured into the glass"),
                    ("الدَّوَار","Ad-dawar","Dizziness","أَشْعُرُ بِالدَّوَارِ","I feel dizziness"),
                    ("مُتَظَاهِرًا","Mutazahiran","Pretending","مُتَظَاهِرًا بِالمُسَاعَدَةِ","Pretending to help")]),
            lesson("u6_3_l2", "Addiction Begins", p[5],
                   "On the third day he told me he had mixed stimulants in the drink. This news didn't create anxiety in me, because I had already become addicted. My world changed completely.",
                   [("مَزَجَ","Mazaja","Mixed","مَزَجَ المَشْرُوبَ","He mixed the drink"),
                    ("المُنَشِّطَات","Al-munashshitat","Stimulants","خَطَرُ المُنَشِّطَاتِ","The danger of stimulants"),
                    ("مُدْمِنًا","Mudminan","Addicted","أَصْبَحْتُ مُدْمِنًا","I became addicted")],
                   fb={"s":"كُنْتُ ____ عَلَى ذَلِكَ بِشَكْلٍ أَوْ بِآخَرَ",
                       "t":"I had become addicted in one way or another",
                       "a":"مُدْمِنًا","o":["مُدْمِنًا","نَاجِحًا","صَحِيحًا"]}),
        ]),
        unit("u6_4", "Mother's Sacrifice", [
            lesson("u6_4_l1", "The Center", p[7],
                   "Today I sit comfortably in the world-famous addiction treatment center named after my mother Fatima. My kind mother was on her way to consult the psychiatrist about me when a car struck her.",
                   [("مَرْكَز","Markaz","Center","مَرْكَزُ العِلَاجِ","The treatment center"),
                    ("ارْتَطَمَتْ","Irtatamat","Struck / Collided","ارْتَطَمَتْ بِهَا سَيَّارَةٌ","A car struck her"),
                    ("المُسْتَشْفَى","Al-mustashfa","Hospital","ذَهَبْتُ إِلَى المُسْتَشْفَى","I went to the hospital"),
                    ("نَفْسَانِي","Nafsani","Psychiatrist","الطَّبِيبُ النَّفْسَانِيُّ","The psychiatrist")]),
            lesson("u6_4_l2", "Mother's Last Advice", p[8],
                   "Her tongue advised me with graceful movements not to take ecstasy pills. This shocked me. I went with determination straight to the treatment center and completed the necessary exercises in three months.",
                   [("لِسَانَهَا","Lisanaha","Her tongue","لِسَانُهَا يَنْصَحُنِي","Her tongue advises me"),
                    ("النَّشْوَة","An-nashwah","Ecstasy","حُبُوبُ النَّشْوَةِ","Ecstasy pills"),
                    ("بِعَزْمٍ","Bi'azm","With determination","ذَهَبْتُ بِعَزْمٍ","I went with determination")],
                   fb={"s":"ذَهَبْتُ مُبَاشَرَةً بِحَزْمٍ وَ____ إِلَى المَرْكَزِ",
                       "t":"I went directly with firmness and determination",
                       "a":"عَزْمٍ","o":["نَوْمٍ","عَزْمٍ","حُزْنٍ"]}),
            lesson("u6_4_l3", "Recovery", p[9],
                   "Praise be to God, I overcame that suffering and returned to my mother. I focused on my studies, which led me to remarkable success. I specialized in psychiatry with a focus on addiction treatment.",
                   [("تَخَلَّصْتُ","Takhallastu","I overcame","تَخَلَّصْتُ مِنَ العَذَابِ","I overcame the suffering"),
                    ("النَّجَاح","An-najah","Success","النَّجَاحُ المَلْحُوظُ","Remarkable success"),
                    ("الطِّب","At-tibb","Medicine","الطِّبُّ النَّفْسِي","Psychiatry")]),
        ]),
    ]


def chapter3_units():
    p = split_paragraphs(read_md(3))
    # p[0-6] = poetry stanzas
    return [
        unit("u7_1", "Night Rain — Like a Mad Woman", [
            lesson("u7_1_l1", "The Opening Image", p[0],
                   "Like a mad young woman, crying and laughing and moaning without reason, mumbling without stopping, sitting crouched, throwing her long hair — night rain.",
                   [("امْرَأَةٍ","Imra'ah","A woman","امْرَأَةٌ شَابَّةٌ","A young woman"),
                    ("مَجْنُونَةٍ","Majnunah","Mad","امْرَأَةٌ مَجْنُونَةٌ","A mad woman"),
                    ("تَبْكِي","Tabki","Cries","تَبْكِي بِلَا سَبَبٍ","Cries without reason"),
                    ("تَئِنُّ","Ta'innu","Moans","تَئِنُّ وَتَضْحَكُ","Moans and laughs")],
                   fb={"s":"مِثْلَ امْرَأَةٍ شَابَّةٍ ____",
                       "t":"Like a mad young woman",
                       "a":"مَجْنُونَةٍ","o":["جَمِيلَةٍ","مَجْنُونَةٍ","كَبِيرَةٍ"]}),
        ]),
        unit("u7_2", "Night Rain — Daughter of Darkness", [
            lesson("u7_2_l1", "Cold Finger Through the Window", p[1],
                   "Night rain — daughter of the dark gloomy darkness, who slides slowly like a long wail into this hospital, stretching her cold finger through the window and touching me.",
                   [("الظَّلَامِ","Az-zalam","Darkness","ابْنَةُ الظَّلَامِ","Daughter of darkness"),
                    ("تَنْزَلِقُ","Tanzaliqu","Slides","تَنْزَلِقُ بِبُطْءٍ","Slides slowly"),
                    ("الْبَارِدَةَ","Al-baridah","Cold","إِصْبَعُهَا الْبَارِدَةُ","Her cold finger"),
                    ("النَّافِذَةِ","An-nafidhah","Window","مِنْ خِلَالِ النَّافِذَةِ","Through the window")]),
        ]),
        unit("u7_3", "Night Rain — Pain and Comfort", [
            lesson("u7_3_l1", "Sighs and Consolation", p[2],
                   "When sighs, chills, sharp sounds and sudden screams of a suffering mother shake me, I put my hand on my ears and weep on my sickbed. Then you come like a dear one, kissing through the darkness with words of consolation.",
                   [("الْآهَاتُ","Al-ahat","Sighs","الْآهَاتُ تَهُزُّنِي","Sighs shake me"),
                    ("الصُّرَاخُ","As-surakh","Screaming","الصُّرَاخُ الْمُفَاجِئُ","Sudden screaming"),
                    ("تَتَعَذَّبُ","Tata'adhabu","Suffers","أُمٌّ تَتَعَذَّبُ","A suffering mother"),
                    ("مُوَاسَاةٍ","Muwasah","Consolation","كَلِمَاتُ مُوَاسَاةٍ","Words of consolation")]),
        ]),
        unit("u7_4", "Night Rain — I Am Like You", [
            lesson("u7_4_l1", "Witness of Sorrow", p[5] + " " + p[6],
                   "Night rain, witness now of my sorrow, while I writhe in pain alone on a sickbed. In long sleepless hours, forgetting even to cry, frozen like a rock — O night rain, I know your music, your compassion, your weeping in solitude. My friend, I too am like you — rain in the night.",
                   [("الشَّاهِدُ","Ash-shahid","Witness","شَاهِدُ حُزْنِي","Witness of my sorrow"),
                    ("وَحِيدَةً","Wahidah","Alone","وَحِيدَةً عَلَى السَّرِيرِ","Alone on the bed"),
                    ("الْأَلَمِ","Al-alam","Pain","أَتَلَوَّى مِنَ الْأَلَمِ","I writhe in pain"),
                    ("نَحِيبَكَ","Nahebak","Your weeping","نَحِيبُكَ فِي الْوَحْدَةِ","Your weeping in solitude")],
                   fb={"s":"أَنَا أَيْضًا مِثْلُكَ، ____ فِي اللَّيْلِ",
                       "t":"I too am like you — rain in the night",
                       "a":"مَطَرٌ","o":["شَمْسٌ","مَطَرٌ","قَمَرٌ"]}),
        ]),
    ]


def chapter4_extra_units():
    """Additional units for section3 (Chapter 4 - India cities and more)."""
    p = split_paragraphs(read_md(4))
    # p[0]=Kalila/literature, p[1]=kings/Mughals, p[2]=British, p[3]=independence
    # p[4]=Delhi intro, p[5]=Delhi monuments (Qutb Minar etc.)
    # p[6]=climate, p[7]=Agra/Taj Mahal, p[8]=Jaipur, p[9]=Mumbai
    # p[10]=Madras/Chennai, p[11]=universities, p[12]=industries, p[13]=national symbol
    return [
        unit("unit87", "Delhi — The Capital", [
            lesson("u87_l1", "Old and New Delhi", p[4],
                   "Delhi is the capital of India — a city full of surprises. It represents a wonderful start for exploring India over its three-thousand-year history. Delhi is divided today into Old Delhi and New Delhi. Visitors enjoy a mix of old and modern.",
                   [("عَاصِمَةُ","Asimah","Capital","عَاصِمَةُ الْهِنْدِ","Capital of India"),
                    ("الْمُفَاجَآتِ","Al-mufaja'at","Surprises","مَلِيئَةٌ بِالْمُفَاجَآتِ","Full of surprises"),
                    ("القَدِيمَةِ","Al-qadimah","Old","دِلْهِي الْقَدِيمَةِ","Old Delhi"),
                    ("الزَّائِرُ","Az-za'ir","Visitor","زَائِرُ دِلْهِي","Visitor of Delhi")],
                   fb={"s":"تَنْقَسِمُ دِلْهِي الْيَوْمَ إِلَى دِلْهِي ____ وَدِلْهِي الْجَدِيدَةِ",
                       "t":"Delhi is divided today into Old Delhi and New Delhi",
                       "a":"الْقَدِيمَةِ","o":["الْكَبِيرَةِ","الْقَدِيمَةِ","الْجَمِيلَةِ"]}),
        ]),
        unit("unit88", "Delhi Monuments", [
            lesson("u88_l1", "Qutb Minar and Red Fort", p[5] if len(p) > 5 else p[4],
                   "Among the most famous buildings in India: Qutb Minar — the wonderful tall tower built in 1193 CE, reaching 83 meters. The Red Fort was built by Shah Jahan. The Grand Mosque of Delhi was completed in 1657 CE and was among the largest mosques in Asia.",
                   [("قُطْب مِينَار","Qutb Minar","Qutb Minar","قُطْب مِينَار مَشْهُورٌ","Qutb Minar is famous"),
                    ("الْقَلْعَةُ","Al-qal'ah","The fort","الْقَلْعَةُ الْحَمْرَاءُ","The Red Fort"),
                    ("الْمَسْجِدُ","Al-masjid","Mosque","الْمَسْجِدُ الْجَامِعُ","Grand Mosque"),
                    ("ارْتِفَاعُهُ","Irtifa'ahu","Its height","يَبْلُغُ ارْتِفَاعُهُ","Its height reaches")]),
        ]),
        unit("unit89", "Agra and the Taj Mahal", [
            lesson("u89_l1", "City of Taj Mahal", p[7] if len(p) > 7 else p[5],
                   "Agra flourished during the Mughal civilization; it was their capital in the 16th and 17th centuries. Its most famous monument is the Taj Mahal — the tomb of Queen Mumtaz, built by Shah Jahan as a memorial to his deep love for his wife.",
                   [("تَاج مَحَل","Taj Mahal","Taj Mahal","تَاج مَحَل مِنَ الأَعَاجِيبِ","Taj Mahal is a wonder"),
                    ("ضَرِيحُ","Darih","Tomb","ضَرِيحُ مَلِكَةٍ","Tomb of a queen"),
                    ("تِذْكَارًا","Tidhkaran","As memorial","بَنَاهُ تِذْكَارًا","Built it as a memorial"),
                    ("السِّيَاحِيَّةِ","As-siyahiyyah","Touristic","مَعْلَمٌ سِيَاحِيٌّ","A touristic landmark")],
                   fb={"s":"تَاج مَحَل ____ لِمَلِكَةِ مُمْتَاز",
                       "t":"Taj Mahal is a tomb for Queen Mumtaz",
                       "a":"ضَرِيحُ","o":["قَصْرُ","ضَرِيحُ","مَسْجِدُ"]}),
        ]),
        unit("unit90", "Jaipur and Mumbai", [
            lesson("u90_l1", "The Pink City", p[8] if len(p) > 8 else p[5],
                   "Jaipur is a beautiful ancient city called the Pink City. It looks like a castle from the Middle Ages, yet is also a lively city of exotic Indian folklore. The entire old quarter was built with walls of various shades of pink.",
                   [("الزَّهْرِيَّةَ","Az-zahrivyah","Pink","الْمَدِينَةُ الزَّهْرِيَّةُ","The Pink City"),
                    ("قَادِمَةً","Qadimah","Coming / From","قَادِمَةٌ مِنَ الْقُرُونِ","Coming from the ages"),
                    ("الفَلْكُلُورِيَّةِ","Folklore","Folkloric","تَقَالِيدُ فَلْكُلُورِيَّةٌ","Folkloric traditions"),
                    ("الْمُتَسَوِّقِينَ","Al-mutasawwiqin","Shoppers","جَنَّةُ الْمُتَسَوِّقِينَ","Paradise of shoppers")]),
            lesson("u90_l2", "Mumbai — Gateway of India", p[9] if len(p) > 9 else p[5],
                   "Mumbai is a vibrant city with constant activity. Today it is the largest city in the East for film production, producing 1000 films per year. The Gateway of India is one of its most important landmarks, built to commemorate King George V's visit.",
                   [("نَابِضَةً","Nabidah","Vibrant","مَدِينَةٌ نَابِضَةٌ","A vibrant city"),
                    ("السِّينَمَائِيِّ","As-sinima'i","Cinematic","الإِنْتَاجُ السِّينَمَائِيُّ","Film production"),
                    ("بَوَّابَةُ","Bawwabah","Gateway","بَوَّابَةُ الْهِنْدِ","Gateway of India")]),
        ]),
        unit("unit91", "Universities and Industries", [
            lesson("u91_l1", "Higher Education", p[11] if len(p) > 11 else p[9],
                   "About 900 universities serve higher education in India, of which 30 teach Arabic and Islamic studies. Among the most famous in Delhi are Jawaharlal Nehru University, Delhi University, and Jamia Millia Islamia.",
                   [("الْجَامِعَاتُ","Al-jami'at","Universities","جَامِعَاتٌ كَبِيرَةٌ","Big universities"),
                    ("الدِّرَاسَاتُ","Ad-dirasat","Studies","دِرَاسَاتٌ إِسْلَامِيَّةٌ","Islamic studies"),
                    ("الْجَامِعَةُ","Al-jami'ah","University","جَامِعَةُ دِلْهِي","Delhi University")],
                   fb={"s":"تَخْدُمُ فِي التَّعْلِيمِ الْعَالِي فِي الْهِنْدِ حَوَالِي ____ جَامِعَةٍ",
                       "t":"About 900 universities serve higher education in India",
                       "a":"٩٠٠","o":["٥٠٠","٩٠٠","٢٠٠"]}),
            lesson("u91_l2", "Traditional Crafts", p[12] if len(p) > 12 else p[9],
                   "Indian markets are distinguished by handicrafts such as gold and silver jewelry made by hand, silk fabrics and shoes embroidered with golden threads, the Indian sari, and leather goods.",
                   [("الصِّنَاعَاتُ","As-sina'at","Industries / Crafts","الصِّنَاعَاتُ التَّقْلِيدِيَّةُ","Traditional crafts"),
                    ("الْمَصْنُوعَاتِ","Al-masnu'at","Handmade goods","مَصْنُوعَاتٌ يَدَوِيَّةٌ","Handmade goods"),
                    ("السَّارِي","As-sari","Sari","السَّارِي الْهِنْدِيُّ","The Indian sari"),
                    ("الذَّهَبِيَّةِ","Adh-dhahabiyyah","Golden","خُيُوطٌ ذَهَبِيَّةٌ","Golden threads")]),
        ]),
    ]


def chapter6_extra_units():
    """Additional units for section2 (Chapter 6 - Quran & Environment), extending unit61-70."""
    p = split_paragraphs(read_md(6))
    # p[0]=resources def, p[1]=Quran commands, p[2]=Sunnah/hadith on path,
    # p[3]=water conservation, p[4]=land/agriculture hadith,
    # p[5]=Quran verse (sky/sea/mountains), p[6]=sky as protector, p[7]=water=life,
    # p[8]=plants/animals/oxygen
    return [
        unit("unit71", "Water Conservation", [
            lesson("u71_l1", "Prophetic Guidance on Water", p[3] if len(p) > 3 else p[2],
                   "The Prophetic Sunnah urged preserving the water wealth and avoiding waste. It discouraged wastefulness even in ablution, prohibiting washing limbs more than three times. It also commanded protecting water from pollution.",
                   [("الثَّرْوَةِ الْمَائِيَّةِ","Ath-tharwah","Water wealth","الثَّرْوَةُ الْمَائِيَّةُ","Water wealth"),
                    ("الإِسْرَافِ","Al-israf","Wastefulness","كَرَاهِيَةُ الإِسْرَافِ","Dislike of waste"),
                    ("الْوُضُوءِ","Al-wudu'","Ablution","عِنْدَ الْوُضُوءِ","During ablution"),
                    ("التَّلَوُّثِ","At-talawwuth","Pollution","تَلَوُّثُ الْمَاءِ","Water pollution")],
                   fb={"s":"نَهَى النَّبِيُّ عَنِ ____ فِي الْمَاءِ الرَّاكِدِ",
                       "t":"The Prophet forbade urinating in still water",
                       "a":"التَّبَوُّلِ","o":["الشُّرْبِ","التَّبَوُّلِ","الِاغْتِسَالِ"]}),
        ]),
        unit("unit72", "Land and Agriculture", [
            lesson("u72_l1", "Hadith on Land", p[4] if len(p) > 4 else p[3],
                   "Among the Prophetic teachings is not withholding land from agriculture. He urged farming and said: 'The land belongs to whoever cultivates it, not to whoever owns it,' so that no lands be left barren without being revived.",
                   [("احْتِجَازِ","Ihtijaz","Withholding","احْتِجَازُ الأَرْضِ","Withholding land"),
                    ("يَزْرَعُهَا","Yazra'uha","Cultivates it","مَنْ يَزْرَعُهَا","Whoever cultivates it"),
                    ("جَدْبَاءَ","Jad-ba'","Barren","أَرَاضٍ جَدْبَاءُ","Barren lands"),
                    ("إِحْيَائِهَا","Ihya'iha","Reviving it","بِدُونِ إِحْيَائِهَا","Without reviving it")],
                   fb={"s":"الأَرْضُ لِمَنْ ____ لَا لِمَنْ يَمْلِكُهَا",
                       "t":"The land belongs to whoever cultivates it, not owns it",
                       "a":"يَزْرَعُهَا","o":["يَبِيعُهَا","يَزْرَعُهَا","يَتْرُكُهَا"]}),
        ]),
        unit("unit73", "The Sky and the Sea", [
            lesson("u73_l1", "Quranic Verses on Environment", p[5] if len(p) > 5 else p[4],
                   "Allah said: 'And what He created for you in the earth of varied colors — indeed in that is a sign for people who remember. And He it is who subjected the sea that you may eat from it fresh meat and extract from it ornaments to wear.' (An-Nahl 13-15)",
                   [("مُخْتَلِفًا","Mukhtalifan","Varied","أَلْوَانٌ مُخْتَلِفَةٌ","Varied colors"),
                    ("الْبَحْرَ","Al-bahr","The sea","سَخَّرَ الْبَحْرَ","He subjected the sea"),
                    ("حِلْيَةً","Hilyah","Ornaments","حِلْيَةٌ تَلْبَسُونَهَا","Ornaments you wear"),
                    ("رَوَاسِيَ","Rawasiya","Mountains","وَأَلْقَى رَوَاسِيَ","He placed mountains")]),
        ]),
        unit("unit74", "Plants, Animals and Oxygen", [
            lesson("u74_l1", "Quran Mentions Animals", p[8] if len(p) > 8 else p[5],
                   "Plants and animals are food sources. Plants are the primary source of oxygen which no one can do without. Some Quran surahs are named after animals: Al-Baqarah (cow), An-Naml (ant), Al-'Ankabut (spider), An-Nahl (bee).",
                   [("الأُكْسُجِينِ","Al-uksijin","Oxygen","مَصْدَرُ الأُكْسُجِينِ","Source of oxygen"),
                    ("النَّبَاتُ","An-nabat","Plants","النَّبَاتَاتُ وَالأَشْجَارُ","Plants and trees"),
                    ("الحَيَوَانَاتُ","Al-hayawanat","Animals","دِرَاسَةُ الحَيَوَانَاتِ","Study of animals"),
                    ("سُوَرٌ","Suwar","Surahs","سُوَرٌ قُرْآنِيَّةٌ","Quranic surahs")],
                   fb={"s":"النَّبَاتُ هُوَ الْمَصْدَرُ الأَوَّلُ لِلـ____",
                       "t":"Plants are the primary source of oxygen",
                       "a":"أُكْسُجِينِ","o":["مَاءِ","أُكْسُجِينِ","غِذَاءِ"]}),
        ]),
    ]


def chapter7_units():
    p = split_paragraphs(read_md(7))
    return [
        unit("u8_1", "Aisha's Simple Life", [
            lesson("u8_1_l1", "The Village Girl", p[0],
                   "She lived in a small village surrounded by green fields and golden rays of sun — a girl named Aisha, twenty years old, tender-hearted and good of speech, who loved simplicity and lived a quiet life with her farming family.",
                   [("قَرْيَةٍ","Qaryah","Village","قَرْيَةٌ صَغِيرَةٌ","A small village"),
                    ("الْحُقُولُ","Al-huqul","Fields","الْحُقُولُ الْخَضْرَاءُ","Green fields"),
                    ("رَقِيقَةُ","Raqiqah","Tender","رَقِيقَةُ الْقَلْبِ","Tender-hearted"),
                    ("الزِّرَاعِيَّةِ","Az-zira'iyyah","Agricultural","أُسْرَةٌ زِرَاعِيَّةٌ","A farming family")],
                   fb={"s":"كَانَتْ تَعِيشُ فِي ____ صَغِيرَةٍ",
                       "t":"She lived in a small village",
                       "a":"قَرْيَةٍ","o":["قَرْيَةٍ","مَدِينَةٍ","غَابَةٍ"]}),
            lesson("u8_1_l2", "Happiness Without Luxury", p[1],
                   "Aisha didn't own much money and didn't know luxury, but she felt a happiness many girls in her time didn't know. Her face was always bright with a clear smile, and everyone who saw her felt tranquility.",
                   [("الرَّفَاهِيَّةَ","Ar-rafahiyyah","Luxury","لَمْ تَعْرِفِ الرَّفَاهِيَّةَ","She didn't know luxury"),
                    ("سَعَادَةٍ","Sa'adah","Happiness","تَشْعُرُ بِسَعَادَةٍ","She feels happiness"),
                    ("الطُّمَأْنِينَةِ","At-tuma'ninah","Tranquility","شَعَرَ بِالطُّمَأْنِينَةِ","Felt tranquility"),
                    ("ابْتِسَامَةٍ","Ibtisamah","Smile","ابْتِسَامَةٌ صَافِيَةٌ","A clear smile")]),
        ]),
        unit("u8_2", "Working with Father", [
            lesson("u8_2_l1", "Morning Routine", p[2],
                   "She woke every morning before sunrise, prayed Fajr, and helped her mother prepare bread and tea. Then she went with her father to the field to work in growing wheat. She loved the smell of wet earth.",
                   [("تَسْتَيْقِظُ","Tastayqizu","Wakes up","تَسْتَيْقِظُ مُبَكِّرًا","Wakes up early"),
                    ("الْفَجْرَ","Al-fajr","Fajr prayer","تُصَلِّي الْفَجْرَ","She prays Fajr"),
                    ("الْحَقْلِ","Al-haql","Field","إِلَى الْحَقْلِ","To the field"),
                    ("الْقَمْحِ","Al-qamh","Wheat","زِرَاعَةُ الْقَمْحِ","Growing wheat")],
                   fb={"s":"تَسْتَيْقِظُ كُلَّ ____ قَبْلَ طُلُوعِ الشَّمْسِ",
                       "t":"She wakes every morning before sunrise",
                       "a":"صَبَاحٍ","o":["لَيْلٍ","صَبَاحٍ","مَسَاءٍ"]}),
            lesson("u8_2_l2", "Earth Like the Heart", p[2],
                   "She always told her father: 'Father, this earth is like the human heart — if we water it with love, it gives us bread.' Her father smiled with pride: 'Whoever loves their work lives satisfied.'",
                   [("الْأَرْضُ","Al-ard","The earth","الْأَرْضُ مِثْلُ الْقَلْبِ","Earth is like the heart"),
                    ("سَقَيْنَاهَا","Saqaynaha","We watered it","سَقَيْنَاهَا حُبًّا","We watered it with love"),
                    ("رَاضِيًا","Radiyan","Satisfied","يَعِيشُ رَاضِيًا","He lives satisfied")]),
        ]),
        unit("u8_3", "Layla from the City", [
            lesson("u8_3_l1", "The Rich Visitor", p[3],
                   "One day a girl named Layla came, daughter of a great merchant. She wore luxurious clothes and an expensive phone, and talked much about travel and fancy stores. When she saw Aisha working in the field under the sun, she was amazed.",
                   [("التُّجَّارِ","At-tujjar","Merchants","أَحَدُ التُّجَّارِ","One of the merchants"),
                    ("ثِيَابًا فَاخِرَةً","Thiyaban","Luxurious clothes","تَرْتَدِي ثِيَابًا فَاخِرَةً","She wears luxurious clothes"),
                    ("تَعَجَّبَتْ","Ta'ajjabat","Was amazed","تَعَجَّبَتْ مِنْهَا","She was amazed at her")],
                   fb={"s":"عِنْدَمَا رَأَتْ لَيْلَى عَائِشَةَ تَعْمَلُ فِي ____ تَعَجَّبَتْ",
                       "t":"When Layla saw Aisha working in the field she was amazed",
                       "a":"الْحَقْلِ","o":["الْبَيْتِ","الْحَقْلِ","الْمَدْرَسَةِ"]}),
            lesson("u8_3_l2", "Aisha's Wisdom", p[3],
                   "Aisha smiled calmly: 'Tiredness doesn't frighten me — it makes me feel alive and joyful. We eat from the toil of our hands and sleep with clear conscience. Money comes and goes, but rest in the heart cannot be bought or sold.'",
                   [("التَّعَبُ","At-ta'ab","Tiredness","التَّعَبُ لَا يُخِيفُنِي","Tiredness doesn't scare me"),
                    ("الضَّمِيرِ","Ad-damir","Conscience","مُرْتَاحِي الضَّمِيرِ","With clear conscience"),
                    ("الرَّاحَةَ","Ar-rahah","Comfort/Rest","الرَّاحَةُ فِي الْقَلْبِ","Rest in the heart")],
                   fb={"s":"نَنَامُ هَادِئِينَ مُرْتَاحِي ____",
                       "t":"We sleep peacefully with clear conscience",
                       "a":"الضَّمِيرِ","o":["الْعَمَلِ","الضَّمِيرِ","الْمَالِ"]}),
        ]),
        unit("u8_4", "Contentment is Beauty", [
            lesson("u8_4_l1", "Starry Evening", p[4],
                   "That evening Layla sat with Aisha before her small house under a clear sky. Stars sparkled like pearls. Aisha's mother brought mint tea with a warm smile. Layla said: 'You have here something not found in the city — quiet, love, and contentment.'",
                   [("النُّجُومُ","An-nujum","Stars","النُّجُومُ تَلْمَعُ","Stars sparkle"),
                    ("الشَّايَ بِالنَّعْنَاعِ","Ash-shay","Mint tea","شَايٌ بِالنَّعْنَاعِ","Mint tea"),
                    ("الرِّضَا","Ar-rida","Contentment","الرِّضَا فِي الْقَلْبِ","Contentment in heart"),
                    ("الْهُدُوءُ","Al-hudu'","Quiet","الْهُدُوءُ وَالْحُبُّ","Quiet and love")]),
            lesson("u8_4_l2", "The Lasting Lesson", p[6],
                   "Aisha continued her life — working, smiling, planting in hearts the meaning of contentment. The whole village kept repeating a saying attributed to her: 'Whoever lives contentedly lives happily and lives pleased.'",
                   [("تَزْرَعُ","Tazra'u","Plants","تَزْرَعُ الرِّضَا","She plants contentment"),
                    ("سَعِيدًا","Sa'idan","Happy","عَاشَ سَعِيدًا","He lived happily"),
                    ("مَرْضِيًّا","Mardiyyan","Pleased","عَاشَ مَرْضِيًّا","He lived pleased")],
                   fb={"s":"مَنْ عَاشَ رَاضِيًا، عَاشَ ____ وَعَاشَ مَرْضِيًّا",
                       "t":"Whoever lived contentedly, lived happily and pleased",
                       "a":"سَعِيدًا","o":["تَعِيسًا","سَعِيدًا","غَنِيًّا"]}),
        ]),
    ]


def chapter9_units():
    p = split_paragraphs(read_md(9))
    return [
        unit("u9_1", "Walking in the Garden", [
            lesson("u9_1_l1", "First Lights of Dawn", p[0],
                   "I walked in the garden as the first lights of morning appeared. The wing of dawn pointed toward the goddesses of wings, and darkness moved slowly like the walk of a graceful elegant woman. The morning breeze flowed gently above the open fields.",
                   [("الرَّوْضِ","Ar-rawd","The garden","سِرْتُ فِي الرَّوْضِ","I walked in the garden"),
                    ("تَبَاشِيرُ","Tabashir","First lights","تَبَاشِيرُ الصَّبَاحِ","First lights of morning"),
                    ("الدُّجَى","Ad-duja","Darkness","الدُّجَى يَسْعَى","Darkness moves"),
                    ("نَسِيمُ","Nasim","Breeze","نَسِيمُ الصُّبْحِ","Morning breeze")],
                   fb={"s":"سِرْتُ فِي ____ وَقَدْ لَاحَتْ تَبَاشِيرُ الصَّبَاحِ",
                       "t":"I walked in the garden as the first lights appeared",
                       "a":"الرَّوْضِ","o":["الرَّوْضِ","الْبَيْتِ","الْبَحْرِ"]}),
        ]),
        unit("u9_2", "River and Flowers", [
            lesson("u9_2_l1", "The Drunken River", p[1],
                   "The gurgling of the river is drunken and the garden flowers are awake. The sky gazed toward the majesty of the universe with brightness, then appeared in clear candid dawn.",
                   [("خَرِيرُ","Kharir","Gurgling","خَرِيرُ النَّهْرِ","Gurgling of river"),
                    ("سَكْرَانُ","Sakran","Drunken","سَكْرَانُ بِالْمَاءِ","Drunken with water"),
                    ("جَلَالِ","Jalal","Majesty","جَلَالُ الْكَوْنِ","Majesty of universe"),
                    ("سُفُورٍ","Sufur","Openly","بَانَتْ فِي سُفُورٍ","She appeared openly")]),
        ]),
        unit("u9_3", "Bilqis on the Throne", [
            lesson("u9_3_l1", "Daisies and the Night", p[2],
                   "The daisies sipped the wine of dewy darkness from their cup, and Bilqis (Queen of Sheba) ascended the throne of the night in those regions. Night settled in the spacious throne despite the presence of the sun.",
                   [("احْتَسَتْ","Ihtasat","Sipped","احْتَسَتْ مِنَ الْكَأْسِ","She sipped from the cup"),
                    ("نَدَى","Nada","Dew","نَدَى الدَّامِسِ","Dew of darkness"),
                    ("الْأَقَاحِي","Al-aqahi","Daisies","كَأْسُ الْأَقَاحِي","The cup of daisies"),
                    ("بَلْقِيسُ","Bilqis","Queen of Sheba","اعْتَلَتْ بَلْقِيسُ","Bilqis ascended")],
                   fb={"s":"وَاعْتَلَتْ ____ عَرْشَ اللَّيْلِ",
                       "t":"And Bilqis ascended the throne of night",
                       "a":"بَلْقِيسُ","o":["الشَّمْسُ","بَلْقِيسُ","الْأَرْضُ"]}),
        ]),
    ]


# ── Write all files ───────────────────────────────────────────────────────────

PLAN = [
    # (chapter_label, folder, start_file_index, units_builder)
    (1,        "section5", 1, chapter1_units),
    (2,        "section6", 1, chapter2_units),
    (3,        "section7", 1, chapter3_units),
    (7,        "section8", 1, chapter7_units),
    (9,        "section9", 1, chapter9_units),
    # Supplemental: section3 already has _1.._6; new files start at _7
    ("4extra", "section3", 7, chapter4_extra_units),
    # Supplemental: section2 already has _1,_3,_7; new files start at _8
    ("6extra", "section2", 8, chapter6_extra_units),
]


def main():
    for (chapter, folder_name, start_idx, builder) in PLAN:
        folder = os.path.join(SRC_DIR, folder_name)
        os.makedirs(folder, exist_ok=True)
        units = builder()
        print(f"\nChapter {chapter} -> {folder_name}/ ({len(units)} units)")

        for i, u in enumerate(units):
            idx = start_idx + i
            fname = f"{folder_name}_{idx}.js"
            write_unit(folder, fname, u["id"], u)

    print("\nDone.")


if __name__ == "__main__":
    main()
