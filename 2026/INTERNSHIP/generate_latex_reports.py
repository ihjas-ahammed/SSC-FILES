# generate_latex_reports.py
# Generates unique, professional LaTeX reports for all 7 physics students.

import os
import sys
import re
import shutil
import subprocess

# Import data and configurations
from report_data import STUDENTS, THEMES, REPORT_CONTENT

# Output directory for the LaTeX files and compiled PDFs
OUTPUT_DIR = os.path.abspath("LATEX_REPORTS")
LOGO_PATH = os.path.abspath("logo_extracted-000.png")

# Deterministic choice based on student and placeholder index
def get_deterministic_choice(student_index, placeholder_index, num_options):
    val = (student_index * 137 + placeholder_index * 79 + 503)
    val = (val ^ (val >> 8)) * 0x85ebca6b
    val = (val ^ (val >> 13)) * 0xc2b2ae35
    val = val ^ (val >> 16)
    return abs(val) % num_options

# Spintax parser
def parse_spintax(text, student_index):
    placeholder_index = 0
    def replace(match):
        nonlocal placeholder_index
        options = match.group(1).split('|')
        idx = get_deterministic_choice(student_index, placeholder_index, len(options))
        placeholder_index += 1
        return options[idx]
    
    pattern = re.compile(r'\{([^{}]+)\}')
    while pattern.search(text):
        text = pattern.sub(replace, text)
    return text

# LaTeX Escaping Function
def latex_escape(text):
    if not isinstance(text, str):
        return text
    
    # 1. Escape special characters first
    special_chars = {
        '&': r'\&',
        '%': r'\%',
        '$': r'\$',
        '#': r'\#',
        '_': r'\_',
        '{': r'\{',
        '}': r'\}',
        '~': r'\textasciitilde{}',
        '^': r'\textasciicircum{}',
    }
    
    res = []
    for c in text:
        if c in special_chars:
            res.append(special_chars[c])
        else:
            res.append(c)
    text = "".join(res)
    
    # 2. Replace standard smart quotes and other non-ASCII chars / math symbols
    text = text.replace('“', '``').replace('”', "''").replace('"', "''")
    text = text.replace('‘', '`').replace('’', "'")
    text = text.replace('×', r'$\times$')
    text = text.replace('•', r'$\bullet$')
    text = text.replace('μ', r'$\mu$')
    text = text.replace('θ', r'$\theta$')
    text = text.replace('≤', r'$\le$')
    
    return text

# Font mapping package function
def get_font_packages(font_name):
    if font_name == "Inter":
        # clean modern sans-serif
        return r"\usepackage[scaled=0.95]{helvet}" + "\n" + r"\renewcommand{\familydefault}{\sfdefault}"
    elif font_name == "Liberation Serif":
        # clean serif
        return r"\usepackage{times}"
    elif font_name == "DejaVu Sans":
        # clean modern sans-serif
        return r"\usepackage{lmodern}" + "\n" + r"\renewcommand{\familydefault}{\sfdefault}"
    elif font_name == "DejaVu Serif":
        # elegant classic serif
        return r"\usepackage{palatino}"
    elif font_name == "Liberation Sans":
        # standard clean sans-serif
        return r"\usepackage[scaled=0.92]{helvet}" + "\n" + r"\renewcommand{\familydefault}{\sfdefault}"
    elif font_name == "Nimbus Roman":
        # robust traditional serif
        return r"\usepackage{charter}"
    elif font_name == "Cantarell":
        # geometric sans-serif
        return r"\usepackage{bookman}" + "\n" + r"\renewcommand{\familydefault}{\sfdefault}"
    elif font_name == "Utopia":
        # clean serif
        return r"\usepackage{utopia}"
    else:
        return r"\usepackage{lmodern}"

# Header/Footer Style Generator
def get_header_footer_latex(style, student_name, primary_rgb, secondary_rgb):
    latex_lines = []
    latex_lines.append(r"\usepackage{fancyhdr}")
    # lastpage package removed for compatibility
    latex_lines.append(r"\pagestyle{fancy}")
    latex_lines.append(r"\fancyhf{}")
    
    if style == "simple":
        latex_lines.append(r"\renewcommand{\headrulewidth}{0pt}")
        latex_lines.append(r"\cfoot{\small\thepage}")
    elif style == "traditional":
        latex_lines.append(r"\renewcommand{\headrulewidth}{0.4pt}")
        latex_lines.append(r"\fancyhead[L]{\small\leftmark}")
        latex_lines.append(r"\fancyhead[R]{\small\rightmark}")
        latex_lines.append(r"\fancyfoot[R]{\small\thepage}")
    elif style == "modern":
        latex_lines.append(r"\renewcommand{\headrulewidth}{0.5pt}")
        latex_lines.append(r"\renewcommand{\headrule}{\hbox to\headwidth{\color{primaryColor}\leaders\hrule height \headrulewidth\hfill}}")
        latex_lines.append(r"\fancyhead[L]{\small\textcolor{primaryColor}{BSc Physics Internship Report}}")
        latex_lines.append(r"\fancyhead[R]{\small\leftmark}")
        latex_lines.append(f"\\fancyfoot[L]{{\\small\\textcolor{{gray}}{{{student_name}}}}}")
        latex_lines.append(r"\fancyfoot[R]{\small Page \thepage}")
    elif style == "classic":
        latex_lines.append(r"\renewcommand{\headrulewidth}{0.4pt}")
        latex_lines.append(r"\fancyhead[C]{\small Sullamussalam Science College, Areekode}")
        latex_lines.append(r"\cfoot{\small - \thepage\ -}")
    elif style == "clean":
        latex_lines.append(r"\renewcommand{\headrulewidth}{0pt}")
        latex_lines.append(f"\\fancyhead[R]{{\\small\\textcolor{{gray}}{{BS23PHY07 \\ | \\ {student_name}}}}}")
        latex_lines.append(r"\fancyfoot[R]{\small\thepage}")
    elif style == "stylish":
        latex_lines.append(r"\renewcommand{\headrulewidth}{0.4pt}")
        latex_lines.append(r"\renewcommand{\headrule}{\hbox to\headwidth{\color{secondaryColor}\leaders\hrule height \headrulewidth\hfill}}")
        latex_lines.append(r"\fancyhead[L]{\small\textcolor{secondaryColor}{PHYSICS INTERNSHIP REPORT}}")
        latex_lines.append(r"\fancyhead[R]{\small\leftmark}")
        latex_lines.append(r"\fancyfoot[L]{\small\textcolor{gray}{Bfone Fibernet \& BSNL Exchange}}")
        latex_lines.append(r"\fancyfoot[R]{\small\thepage}")
    elif style == "structured":
        latex_lines.append(r"\renewcommand{\headrulewidth}{0.8pt}")
        latex_lines.append(r"\fancyhead[L]{\small Sullamussalam Science College, Areekode}")
        latex_lines.append(r"\fancyhead[R]{\small June 2026}")
        latex_lines.append(r"\fancyfoot[R]{\small Page \thepage}")
        
    # Redefine plain page style for chapter first pages to maintain visual cohesion
    latex_lines.append(r"\fancypagestyle{plain}{%")
    latex_lines.append(r"  \fancyhf{}%")
    if style in ["simple", "classic"]:
        latex_lines.append(r"  \cfoot{\small\thepage}%")
    elif style in ["traditional", "clean", "stylish", "structured"]:
        latex_lines.append(r"  \fancyfoot[R]{\small\thepage}%")
    elif style == "modern":
        latex_lines.append(f"  \\fancyfoot[L]{{\\small\\textcolor{{gray}}{{{student_name}}}}}%")
        latex_lines.append(r"  \fancyfoot[R]{\small Page \thepage}%")
    latex_lines.append(r"  \renewcommand{\headrulewidth}{0pt}%")
    latex_lines.append(r"}")
    
    return "\n".join(latex_lines)

# Cover Page LaTeX Generator
def get_cover_latex(style, student_name, logo_filename):
    lines = []
    lines.append(r"\begin{titlepage}")
    
    if style == "minimalist":
        lines.append(r"\centering")
        lines.append(r"\vspace*{1.5cm}")
        lines.append(r"{\Huge\bfseries\color{primaryColor} INTERNSHIP REPORT \\[12pt] ON \\[12pt] FIBER OPTIC COMMUNICATIONS, \\ FTTH NETWORK ARCHITECTURE \\[12pt] AND \\[12pt] ELECTRICAL HOME APPLIANCES \\ MAINTENANCE \par}")
        lines.append(r"\vspace{1.5cm}")
        lines.append(r"{\color{primaryColor}\rule{0.65\textwidth}{3pt}}")
        lines.append(r"\vspace{1.5cm}")
        lines.append(r"{\large Submitted by: \par}")
        lines.append(rf"{{\Large\bfseries\color{{secondaryColor}} {student_name} \par}}")
        lines.append(r"\vspace{0.5cm}")
        lines.append(r"{\large In partial fulfillment of the requirements for the award of the Degree of \par}")
        lines.append(r"{\large\textbf{Bachelor of Science in Physics} \par}")
        lines.append(r"\vspace{1cm}")
        lines.append(r"{\large\textbf{Under the Faculty Guidance of:} \par}")
        lines.append(r"{\large Dr. Mohemmed Shanid N A \\ Department of Physics \\ Sullamussalam Science College, Areekode \par}")
        lines.append(r"\vfill")
        lines.append(rf"\includegraphics[width=1.2in]{{{logo_filename}}}")
        lines.append(r"\vspace{0.5cm}")
        lines.append(r"{\large\bfseries\color{primaryColor} DEPARTMENT OF PHYSICS \\ SULLAMUSSALAM SCIENCE COLLEGE, AREEKODE \\ June 2026 \par}")
        
    elif style == "classic":
        lines.append(r"\centering")
        lines.append(rf"\includegraphics[width=1.3in]{{{logo_filename}}}")
        lines.append(r"\vspace{0.8cm}")
        lines.append(r"{\large\bfseries\color{primaryColor} SULLAMUSSALAM SCIENCE COLLEGE, AREEKODE \par}")
        lines.append(r"\vspace{1.2cm}")
        lines.append(r"\hrule height 1.5pt")
        lines.append(r"\vspace{15pt}")
        lines.append(r"{\Large\bfseries INTERNSHIP REPORT ON \\ FIBER OPTIC COMMUNICATIONS, \\ FTTH NETWORK ARCHITECTURE \\ AND ELECTRICAL HOME APPLIANCES MAINTENANCE \par}")
        lines.append(r"\vspace{15pt}")
        lines.append(r"\hrule height 1.5pt")
        lines.append(r"\vspace{1.5cm}")
        lines.append(rf"{{\large Candidate: \textbf{{\color{{primaryColor}} {student_name}}} \par}}")
        lines.append(r"{\large Reg No: BS23PHY07 \par}")
        lines.append(r"\vspace{0.6cm}")
        lines.append(r"{\large Submitted in partial fulfillment of the BSc Physics Degree \par}")
        lines.append(r"\vspace{0.6cm}")
        lines.append(r"{\large Under the Academic Supervision of: \par}")
        lines.append(r"{\large\textbf{Dr. Mohemmed Shanid N A} \\ Head of the Department of Physics \par}")
        lines.append(r"\vfill")
        lines.append(r"{\large\bfseries\color{secondaryColor} In Industrial Collaboration with: \\ Bfone Fibernet, Edavannappara \\ \& BSNL Exchange, Manjeri \par}")
        
    elif style == "left_accent":
        lines.append(r"\noindent")
        lines.append(r"\begin{minipage}[t][0.9\textheight][s]{0.06\textwidth}")
        lines.append(r"\color{primaryColor}\rule{\textwidth}{0.88\textheight}")
        lines.append(r"\end{minipage}")
        lines.append(r"\hfill")
        lines.append(r"\begin{minipage}[t][0.9\textheight][s]{0.90\textwidth}")
        lines.append(r"\hspace{15pt}")
        lines.append(r"\begin{minipage}{0.8\textwidth}")
        lines.append(r"  \textbf{\large\color{secondaryColor} INTERNSHIP REPORT} \\[20pt]")
        lines.append(r"  {\Huge\bfseries\color{primaryColor} FIBER OPTIC\\ COMMUNICATIONS,\\ FTTH NETWORK\\ ARCHITECTURE\\ AND HOME APPLIANCES \par} \vspace{40pt}")
        lines.append(r"  \textbf{\small SUBMITTED BY:} \\")
        lines.append(rf"  \textbf{{\Large\color{{primaryColor}} {student_name}}} \\[20pt]")
        lines.append(r"  \textbf{\small SUPERVISED BY:} \\")
        lines.append(r"  \textbf{\large Dr. Mohemmed Shanid N A} \\[20pt]")
        lines.append(r"  \textbf{\small INSTITUTION:} \\")
        lines.append(r"  {\large Department of Physics \\ Sullamussalam Science College, Areekode \par} \vspace{40pt}")
        lines.append(rf"  \includegraphics[width=1.2in]{{{logo_filename}}}")
        lines.append(r"\end{minipage}")
        lines.append(r"\end{minipage}")
        
    elif style == "double_border":
        lines.append(r"\setlength{\fboxrule}{1.5pt}")
        lines.append(r"\setlength{\fboxsep}{15pt}")
        lines.append(r"\noindent\doublebox{")
        lines.append(r"\begin{minipage}[c][0.84\textheight][c]{0.94\textwidth}")
        lines.append(r"\centering")
        lines.append(r"\vspace{0.3cm}")
        lines.append(r"{\Large\bfseries\color{secondaryColor} INTERNSHIP REPORT \par}")
        lines.append(r"\vspace{1.2cm}")
        lines.append(r"{\Huge\bfseries\color{primaryColor} FIBER OPTIC \\ COMMUNICATIONS, \\ FTTH NETWORK ARCHITECTURE \\ AND ELECTRICAL HOME APPLIANCES \\ MAINTENANCE \par}")
        lines.append(r"\vspace{1.2cm}")
        lines.append(rf"\includegraphics[width=1.1in]{{{logo_filename}}}")
        lines.append(r"\vspace{1.2cm}")
        lines.append(r"{\large Submitted by: \par}")
        lines.append(rf"{{\Large\bfseries\color{{primaryColor}} {student_name} \par}}")
        lines.append(r"{\large BSc Physics Student \par}")
        lines.append(r"\vspace{0.8cm}")
        lines.append(r"{\large Under the guidance of: \par}")
        lines.append(r"{\large\textbf{Dr. Mohemmed Shanid N A} \par}")
        lines.append(r"{\large Department of Physics \\ Sullamussalam Science College, Areekode \par}")
        lines.append(r"\end{minipage}")
        lines.append(r"}")
        
    elif style == "split_title":
        lines.append(r"\noindent")
        lines.append(r"\begin{minipage}[t][0.35\textheight][c]{\textwidth}")
        lines.append(r"\colorbox{primaryColor}{\begin{minipage}[c]{\textwidth}")
        lines.append(r"\centering\color{white}")
        lines.append(r"\vspace{20pt}")
        lines.append(r"{\Huge\bfseries INTERNSHIP REPORT \par}")
        lines.append(r"\vspace{10pt}")
        lines.append(r"{\Large\bfseries ON \\ FIBER OPTIC COMMUNICATIONS, \\ FTTH NETWORK ARCHITECTURE \\ AND ELECTRICAL HOME APPLIANCES MAINTENANCE \par}")
        lines.append(r"\vspace{20pt}")
        lines.append(r"\end{minipage}}")
        lines.append(r"\end{minipage}")
        lines.append(r"\vspace{1.2cm}")
        lines.append(r"\centering")
        lines.append(rf"\includegraphics[width=1.2in]{{{logo_filename}}}")
        lines.append(r"\vspace{1.2cm}")
        lines.append(r"{\large Submitted by: \par}")
        lines.append(rf"{{\Large\bfseries\color{{primaryColor}} {student_name} \par}}")
        lines.append(r"{\large Department of Physics \\ Sullamussalam Science College, Areekode \par}")
        lines.append(r"\vspace{0.8cm}")
        lines.append(r"{\large Under the Faculty Guidance of: \par}")
        lines.append(r"{\large\textbf{Dr. Mohemmed Shanid N A} \\ Department of Physics \par}")
        
    elif style == "elegant_center":
        lines.append(r"\centering")
        lines.append(rf"\includegraphics[width=1.2in]{{{logo_filename}}}")
        lines.append(r"\vspace{1.2cm}")
        lines.append(r"{\color{primaryColor}\rule{0.8\textwidth}{1pt}}")
        lines.append(r"\vspace{10pt}")
        lines.append(r"{\Huge\bfseries\color{secondaryColor} INTERNSHIP REPORT \\ FIBER OPTIC COMMUNICATIONS, \\ FTTH NETWORK ARCHITECTURE \\ AND HOME APPLIANCES MAINTENANCE \par}")
        lines.append(r"\vspace{10pt}")
        lines.append(r"{\color{primaryColor}\rule{0.8\textwidth}{1pt}}")
        lines.append(r"\vspace{2.0cm}")
        lines.append(r"{\large Submitted by: \par}")
        lines.append(rf"{{\Large\bfseries\color{{primaryColor}} {student_name} \par}}")
        lines.append(r"\vspace{1.2cm}")
        lines.append(r"{\large Under the Faculty Guidance of: \par}")
        lines.append(r"{\large\textbf{Dr. Mohemmed Shanid N A} \par}")
        lines.append(r"\vfill")
        lines.append(r"{\large\bfseries DEPARTMENT OF PHYSICS \\ SULLAMUSSALAM SCIENCE COLLEGE, AREEKODE \par}")
        
    elif style == "geometric":
        lines.append(r"\centering")
        lines.append(r"\vspace*{0.5cm}")
        lines.append(r"\colorbox{primaryColor}{\begin{minipage}[c]{0.95\textwidth}")
        lines.append(r"\centering\color{white}")
        lines.append(r"\vspace{20pt}")
        lines.append(r"{\Large\bfseries\color{secondaryColor} INTERNSHIP REPORT \par}")
        lines.append(r"\vspace{10pt}")
        lines.append(r"{\Huge\bfseries OFC, FTTH AND ELECTRICAL APPLIANCES \par}")
        lines.append(r"\vspace{20pt}")
        lines.append(r"\end{minipage}}")
        lines.append(r"\vspace{1.5cm}")
        lines.append(rf"\includegraphics[width=1.2in]{{{logo_filename}}}")
        lines.append(r"\vspace{1.5cm}")
        lines.append(r"\begin{tabular}{rl}")
        lines.append(rf"  \textbf{{Candidate Name:}} & \textbf{{\color{{primaryColor}} {student_name}}} \\")
        lines.append(r"  \textbf{Department:} & Physics \\")
        lines.append(r"  \textbf{Academic Supervisor:} & Dr. Mohemmed Shanid N A \\")
        lines.append(r"  \textbf{Institution:} & Sullamussalam Science College, Areekode \\")
        lines.append(r"\end{tabular}")
        lines.append(r"\vfill")
        
    lines.append(r"\end{titlepage}")
    return "\n".join(lines)

# Static table content generators
def get_loss_parameters_table():
    return r"""\rowcolors{2}{zebraColor}{white}
\begin{table}[H]
\centering
\begin{tabularx}{\textwidth}{X r}
\rowcolor{primaryColor}
\textcolor{white}{\textbf{Network Element Component}} & \textcolor{white}{\textbf{Standard Loss Value}} \\
\midrule
Fiber Path Loss @ 1310 nm / 1490 nm & 0.40 dB per km \\
Fiber Path Loss @ 1550 nm & 0.25 dB per km \\
Fusion Splice Junction & 0.10 dB per splice \\
SC/UPC Physical Connector Pair & 0.35 dB per connector \\
SC/APC Physical Connector Pair & 0.25 dB per connector \\
1 $\times$ 2 Splitter Module & 3.0 dB average insertion loss \\
1 $\times$ 16 Splitter Module & 13.0 dB average insertion loss \\
1 $\times$ 32 Splitter Module & 16.0 dB average insertion loss \\
\bottomrule
\end{tabularx}
\caption{Standard Loss Parameters Used in FTTH Networks}
\end{table}"""

def get_color_coding_table():
    return r"""\rowcolors{2}{zebraColor}{white}
\begin{table}[H]
\centering
\begin{tabularx}{\textwidth}{c X c c X c}
\rowcolor{primaryColor}
\textcolor{white}{\textbf{No.}} & \textcolor{white}{\textbf{Fiber Color}} & \textcolor{white}{\textbf{Symbol}} & \textcolor{white}{\textbf{No.}} & \textcolor{white}{\textbf{Fiber Color}} & \textcolor{white}{\textbf{Symbol}} \\
\midrule
1 & Blue & BL & 7 & Red & RD \\
2 & Orange & OR & 8 & Black & BK \\
3 & Green & GR & 9 & Yellow & YL \\
4 & Brown & BR & 10 & Violet & VI \\
5 & Slate (Grey) & SL & 11 & Rose (Pink) & RS \\
6 & White & WH & 12 & Aqua & AQ \\
\bottomrule
\end{tabularx}
\caption{TIA-598-C Color Coding Identification}
\end{table}"""

def get_splicing_comparison_table():
    return r"""\rowcolors{2}{zebraColor}{white}
\begin{table}[H]
\centering
\begin{tabularx}{\textwidth}{l X X}
\rowcolor{primaryColor}
\textcolor{white}{\textbf{Feature}} & \textcolor{white}{\textbf{Fusion Splicing}} & \textcolor{white}{\textbf{Mechanical / Fast Connectors}} \\
\midrule
Mechanism & Uses a high-voltage electric arc to melt and fuse glass tips permanently. & Physically aligns two fiber ends inside a sleeve using index-matching gel. \\
Signal Loss & Extremely low ($< 0.05$ dB to $0.1$ dB). & Slightly higher ($0.2$ dB to $0.5$ dB). \\
Pros \& Cons & Most reliable, but requires an expensive fusion splicer machine. & Fast setup, low initial tool cost. Ideal for home drop termination. \\
\bottomrule
\end{tabularx}
\caption{Comparison of Fusion and Mechanical Splicing}
\end{table}"""

def get_troubleshooting_matrix_table(caption):
    return f"""\\rowcolors{{2}}{{zebraColor}}{{white}}
\\begin{{table}}[H]
\\centering
\\begin{{tabularx}}{{\\textwidth}}{{l l X}}
\\rowcolor{{primaryColor}}
\\textcolor{{white}}{{\\textbf{{ONT Indicator}}}} & \\textcolor{{white}}{{\\textbf{{Status State}}}} & \\textcolor{{white}}{{\\textbf{{Meaning / Corrective Action}}}} \\\\
\\midrule
LOS (Red) & Steady Glow & Loss of Signal: Total physical fiber cut or severe macro-bend. Check outside plant with OTDR. \\\\
PON (Green) & Blinking / Flashing & Registering: Authentication in progress. If persistent, light power is weak or configuration profile is missing. \\\\
PON (Green) & Steady Solid Glow & Connected: Symmetrical operational link established successfully. \\\\
Power Levels & Below -27 dBm & Power Fault: Dirty connector faces or high-loss splice. Rework connection or clean with a OneClick cleaner. \\\\
\\bottomrule
\\end{{tabularx}}
\\caption{{{caption}}}
\\end{{table}}"""

def get_appliance_troubleshooting_table():
    return r"""\rowcolors{2}{zebraColor}{white}
\begin{table}[H]
\centering
\begin{tabularx}{\textwidth}{l X X X}
\rowcolor{primaryColor}
\textcolor{white}{\textbf{Appliance}} & \textcolor{white}{\textbf{Common Symptom}} & \textcolor{white}{\textbf{Root Cause Detected}} & \textcolor{white}{\textbf{Corrective Action Performed}} \\
\midrule
Electric Iron & No heating; indicator light off & Open circuit in thermal fuse / Broken power cord & Replaced thermal fuse; trimmed and re-terminated power cord. \\
Induction Cooker & Dead display; won't power up & Blown main fuse due to shorted IGBT & Replaced the shorted IGBT and main glass fuse; checked gate driver circuit. \\
Mixer Grinder & Sparks from bottom; sudden stop & Worn carbon brushes / Overload switch tripped & Replaced carbon brushes; cleared jar jam and reset the bottom OLP switch. \\
Water Heater & Water not heating; indicator on & Scale buildup or open-circuit in heating element & Drained tank, removed limescale, and replaced the immersion heating element. \\
Ceiling Fan & Humming sound; spins very slowly & Degraded or leaked capacitor & Desoldered/disconnected old capacitor, verified value, and installed new 2.5$\mu$F unit. \\
Wall Fan & Fan rotates but does not oscillate / Overheating & Stripped linkage gears / Dry rotor shaft & Replaced the plastic gear wheel assembly; cleaned and lubricated the rotor shaft with machine oil. \\
Pump Motor & Motor hums but does not rotate & Seized bearings / Defective starter capacitor & Freed impeller manually; replaced bearings and capacitor. \\
\bottomrule
\end{tabularx}
\caption{Appliance Troubleshooting \& Maintenance Practice Matrix}
\end{table}"""

# Generate list items block
def make_list_items(spintax_list, student_index, ordered=False):
    lines = []
    env = "enumerate" if ordered else "itemize"
    lines.append(f"\\begin{{{env}}}")
    for item in spintax_list:
        resolved = parse_spintax(item, student_index)
        lines.append(f"  \\item {latex_escape(resolved)}")
    lines.append(f"\\end{{{env}}}")
    return "\n".join(lines)

# Generate LaTeX content string for a student
def build_student_latex(student_name, student_index):
    theme = THEMES[student_name]
    font_name = theme["font"]
    margin_in = theme["margin_inches"]
    line_spacing = theme["line_spacing"]
    cover_style = theme["cover_style"]
    hf_style = theme["header_footer_style"]
    
    # Convert rgb tuples
    p_color = theme["primary_color"]
    s_color = theme["secondary_color"]
    
    tex = []
    # Document Class and Base Packages
    tex.append(r"\documentclass[11pt,a4paper]{report}")
    tex.append(r"\usepackage[utf8]{inputenc}")
    tex.append(rf"\usepackage[margin={margin_in}in]{{geometry}}")
    tex.append(r"\usepackage{setspace}")
    tex.append(r"\usepackage[table]{xcolor}") # table option loaded here
    tex.append(r"\usepackage{graphicx}")
    tex.append(r"\usepackage{amsmath, amssymb}")
    tex.append(r"\usepackage{fancybox}")
    tex.append(r"\usepackage{tabularx}")
    tex.append(r"\usepackage{booktabs}")
    tex.append(r"\usepackage{float}")
    # enumitem removed for standard compatibility
    
    # Add Font Package
    tex.append(get_font_packages(font_name))
    
    # Define primary and secondary colors
    tex.append(f"\\definecolor{{primaryColor}}{{RGB}}{{{p_color[0]}, {p_color[1]}, {p_color[2]}}}")
    tex.append(f"\\definecolor{{secondaryColor}}{{RGB}}{{{s_color[0]}, {s_color[1]}, {s_color[2]}}}")
    tex.append(r"\definecolor{zebraColor}{HTML}{F3F4F6}")
    
    # Load hyperref at the end of preamble
    tex.append(r"\usepackage[colorlinks=true,linkcolor=primaryColor,urlcolor=secondaryColor,citecolor=primaryColor]{hyperref}")
    
    # Custom commands for chapter and section styling (pure LaTeX overrides)
    tex.append(r"""
\makeatletter
% Custom Chapter Style
\def\@makechapterhead#1{%
  \vspace*{20\p@}%
  {\parindent \z@ \raggedright \normalfont
    \ifnum \c@secnumdepth >\m@ne
        \huge\bfseries\color{primaryColor} \@chapapp\ \thechapter
        \par\nobreak
        \vskip 12\p@
    \fi
    \interlinepenalty\@M
    \Huge \bfseries\color{primaryColor} #1\par\nobreak
    \vskip 24\p@
  }}
\def\@makeschapterhead#1{%
  \vspace*{20\p@}%
  {\parindent \z@ \raggedright
    \normalfont
    \interlinepenalty\@M
    \Huge \bfseries\color{primaryColor} #1\par\nobreak
    \vskip 24\p@
  }}

% Custom Section & Subsection Style
\renewcommand{\section}{\@startsection{section}{1}{\z@}%
  {-3.25ex \@plus -1ex \@minus -.2ex}%
  {1.5ex \@plus.2ex}%
  {\normalfont\Large\bfseries\color{primaryColor}}}
\renewcommand{\subsection}{\@startsection{subsection}{2}{\z@}%
  {-3.0ex\@plus -1ex \@minus -.2ex}%
  {1.0ex \@plus .2ex}%
  {\normalfont\large\bfseries\color{secondaryColor}}}
\makeatother
""")
    
    # Header and Footer Setup
    tex.append(get_header_footer_latex(hf_style, student_name, p_color, s_color))
    
    # Set spacing
    tex.append(f"\\setstretch{{{line_spacing}}}")
    
    # Document Body Starts
    tex.append(r"\begin{document}")
    
    # 1. Cover Page
    tex.append(get_cover_latex(cover_style, student_name, "logo_extracted-000.png"))
    
    # 2. Certificate Page
    tex.append(r"\clearpage")
    tex.append(r"\thispagestyle{empty}")
    tex.append(r"\begin{center}")
    tex.append(r"  {\Huge\bfseries\color{primaryColor} CERTIFICATE \par}")
    tex.append(r"\end{center}")
    tex.append(r"\vspace{1.5cm}")
    tex.append(rf"This is to certify that the internship report entitled ``Fiber Optic Communications, FTTH Network Architecture and Electrical Home Appliances Maintenance'' is a bona fide record of the industrial training carried out by \textbf{{{student_name}}} under my academic supervision and guidance, in corporate collaboration with Bfone Fibernet, Edavannappara, in partial fulfillment of the requirements for the award of the Degree of Bachelor of Science in Physics.")
    tex.append(r"\vspace{3.5cm}")
    tex.append(r"\noindent")
    tex.append(r"\begin{tabular}{@{}l p{3cm} r@{}}")
    tex.append(r"  \textbf{Dr. Mohemmed Shanid N A} & & \textbf{External Examiner} \\")
    tex.append(r"  Head of the Department & & \\")
    tex.append(r"  Department of Physics & & \\")
    tex.append(r"\end{tabular}")
    tex.append(r"\vspace{1.5cm}")
    tex.append(r"\noindent")
    tex.append(r"\textbf{Internal Examiner}")
    
    # Start roman page numbering for prelims (TOC & Activity Schedule)
    tex.append(r"\clearpage")
    tex.append(r"\pagenumbering{roman}")
    tex.append(r"\setcounter{page}{1}")
    
    # 3. Table of Contents
    tex.append(r"\pdfbookmark[1]{Contents}{toc}")
    tex.append(r"\tableofcontents")
    
    # 4. Activity Schedule Page
    tex.append(r"\clearpage")
    tex.append(r"\chapter*{Internship Activity Schedule}")
    tex.append(r"\addcontentsline{toc}{chapter}{INTERNSHIP ACTIVITY SCHEDULE}")
    tex.append(r"The day-wise internship activities and topics covered during the training period are summarized in the table below:")
    tex.append(r"\vspace{0.3cm}")
    tex.append(r"\rowcolors{2}{zebraColor}{white}")
    tex.append(r"\begin{table}[H]")
    tex.append(r"\centering")
    tex.append(r"\begin{tabularx}{\textwidth}{l l X}")
    tex.append(r"\rowcolor{primaryColor}")
    tex.append(r"\textcolor{white}{\textbf{Day}} & \textcolor{white}{\textbf{Date}} & \textcolor{white}{\textbf{Topics / Activities Covered}} \\")
    tex.append(r"\midrule")
    tex.append(r"Day 1 & 21.05.2026 & Optical Fiber Theory Class (Introduction to OFC) \\")
    tex.append(r"Day 2 & 22.05.2026 & Splicing Practical Section \\")
    tex.append(r"Day 3 & 23.05.2026 & Repairing of the Ceiling Fan \\")
    tex.append(r"Day 4 & 25.05.2026 & \begin{itemize} \item Theory Class of Fiber To The Home (FTTH) \item Repairing of Mixer Grinder \item Field Visit of Splicing \end{itemize} \\")
    tex.append(r"Day 5 & 26.05.2026 & Field Visit at Manjeri Telephone Exchange \\")
    tex.append(r"Day 6 & 08.06.2026 & Power Calculation Theory Class \\")
    tex.append(r"Day 7 & 09.06.2026 & \begin{itemize} \item Repairing of Iron Box \item Repairing of Wall Fan \item Repairing of Induction Cooker \end{itemize} \\")
    tex.append(r"\bottomrule")
    tex.append(r"\end{tabularx}")
    tex.append(r"\caption{Day-wise Internship Activity Log}")
    tex.append(r"\end{table}")
    
    # Main content starts, change page numbering to Arabic
    tex.append(r"\clearpage")
    tex.append(r"\pagenumbering{arabic}")
    tex.append(r"\setcounter{page}{1}")
    
    # Part I
    tex.append(r"\part{Fiber Optic Communications and FTTH Network Architecture}")
    
    # Part I Introduction
    tex.append(r"\chapter*{Part Introduction: Fiber Optic Infrastructure}")
    tex.append(r"\addcontentsline{toc}{chapter}{Part Introduction: Fiber Optic Infrastructure}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["part1_intro"], student_index)))
    
    # Chapter 1
    tex.append(r"\chapter{Introduction to Optical Fiber Communication}")
    tex.append(r"\section{Overview}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch1_overview"], student_index)))
    
    tex.append(r"\section{The Basic Fiber Optic Link}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch1_link_intro"], student_index)))
    tex.append(make_list_items(REPORT_CONTENT["ch1_link_components"], student_index))
    
    tex.append(r"\section{Advantages of Fiber Optics}")
    tex.append(make_list_items(REPORT_CONTENT["ch1_advantages"], student_index))
    
    # Chapter 2
    tex.append(r"\chapter{Principle and Cable Structure}")
    tex.append(r"\section{Principle of Operation: Total Internal Reflection}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch2_tir"], student_index)))
    tex.append(make_list_items(REPORT_CONTENT["ch2_tir_conditions"], student_index))
    
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch2_tir_formula"], student_index)))
    tex.append(r"\begin{equation}\theta_c = \sin^{-1}\left( \frac{n_2}{n_1} \right)\end{equation}")
    
    tex.append(r"\section{Cable Anatomy}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch2_anatomy_intro"], student_index)))
    tex.append(make_list_items(REPORT_CONTENT["ch2_anatomy_layers"], student_index))
    
    tex.append(r"\section{Cable Types}")
    tex.append(make_list_items(REPORT_CONTENT["ch2_cable_types"], student_index))
    
    # Chapter 3
    tex.append(r"\chapter{Link Budgeting, Splicing, and Mathematical Calculations}")
    tex.append(r"\section{OFC Splicing}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch3_splicing_intro"], student_index)))
    tex.append(make_list_items(REPORT_CONTENT["ch3_splicing_types"], student_index))
    
    tex.append(r"\section{Logarithmic Conversion Mechanics}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch3_log_conv"], student_index)))
    tex.append(r"\begin{equation}P_{\text{dBm}} = 10 \log_{10}\left( \frac{P_{\text{mW}}}{1\text{ mW}} \right)\end{equation}")
    
    tex.append(r"\section{Splitter Loss Calculations}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch3_splitter_loss"], student_index)))
    tex.append(r"\begin{equation}\text{Loss}_{\text{Ideal}} = 10 \log_{10}( N )\end{equation}")
    
    tex.append(r"\section{Standard Loss Values for Link Performance}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch3_standard_loss_intro"], student_index)))
    tex.append(get_loss_parameters_table())
    
    tex.append(r"\section{Mathematical Verification: Power Link Budget Case Study}")
    tex.append(r"\begin{equation}P_r = P_t - \text{Loss}_{\text{total}}\end{equation}")
    
    tex.append(r"\subsection{Case Study Parameter Blueprint}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch3_case_study_blueprint"], student_index)))
    tex.append(make_list_items(REPORT_CONTENT["ch3_case_study_list"], student_index))
    
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch3_case_study_sum"], student_index)))
    tex.append(r"\begin{align*} \text{Total Attenuation Loss} &= 2.8 + 13.0 + 10.0 + 0.4 + 0.7 \\ &= 26.9\text{ dB} \end{align*}")
    
    tex.append(r"\subsection{Link Status Analysis}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch3_link_status"], student_index)))
    tex.append(r"\begin{equation}\text{Receiver Sensitivity Threshold} \le -28\text{ dBm}\end{equation}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch3_link_status_conclusion"], student_index)))
    
    # Chapter 4
    tex.append(r"\chapter{Optical Fiber Splicing: Detailed Analysis}")
    tex.append(r"\section{What is Splicing?}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch4_splicing_def"], student_index)))
    
    tex.append(r"\section{Types of Splicing}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch4_types_intro"], student_index)))
    
    tex.append(r"\subsection{Fusion Splicing}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch4_fusion_details"], student_index)))
    
    tex.append(r"\subsection{Mechanical Splicing}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch4_mech_details"], student_index)))
    
    tex.append(r"\section{Importance and Significance}")
    tex.append(make_list_items(REPORT_CONTENT["ch4_importance"], student_index))
    
    tex.append(r"\section{Step-by-Step Fusion Splicing Process}")
    tex.append(make_list_items(REPORT_CONTENT["ch4_steps"], student_index, ordered=True))
    
    tex.append(r"\section{Advantages}")
    tex.append(make_list_items(REPORT_CONTENT["ch4_advantages"], student_index))
    
    tex.append(r"\section{Future Scope}")
    tex.append(make_list_items(REPORT_CONTENT["ch4_future"], student_index))
    
    tex.append(r"\section{Conclusion}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch4_conclusion"], student_index)))
    
    # Chapter 5
    tex.append(r"\chapter{Introduction to FTTH \& Passive Optical Networks (PON)}")
    tex.append(r"\section{Overview of FTTH}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch5_ftth_overview"], student_index)))
    
    tex.append(r"\section{The FTTH Network Architecture Layers}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch5_layers_intro"], student_index)))
    # For laying structure, let's output paragraphs normally
    for item in REPORT_CONTENT["ch5_layers"]:
        tex.append(latex_escape(parse_spintax(item, student_index)) + "\n\n")
        
    tex.append(r"\section{Core Hardware Components}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch5_hardware_intro"], student_index)))
    
    tex.append(r"\subsection{Active Components (Power Required)}")
    for item in REPORT_CONTENT["ch5_active_hardware"]:
        tex.append(latex_escape(parse_spintax(item, student_index)) + "\n\n")
        
    tex.append(r"\subsection{Passive Components (No Power Required)}")
    for item in REPORT_CONTENT["ch5_passive_hardware"]:
        tex.append(latex_escape(parse_spintax(item, student_index)) + "\n\n")
        
    # Chapter 6
    tex.append(r"\chapter{FTTH Deployment, Coding and Testing}")
    tex.append(r"\section{Fiber Color Coding Standard (TIA-598-C)}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch6_coding_intro"], student_index)))
    tex.append(get_color_coding_table())
    
    tex.append(r"\section{Physical Deployment \& Site Survey}")
    tex.append(r"\subsection{Site Survey \& Planning}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch6_deployment_intro"], student_index)))
    tex.append(make_list_items(REPORT_CONTENT["ch6_deployment_steps"], student_index))
    
    tex.append(r"\subsection{Outdoor Routing Operations}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch6_outdoor_routing"], student_index)))
    
    tex.append(r"\subsection{Indoor Termination}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch6_indoor_termination"], student_index)))
    
    tex.append(r"\section{Splicing Methods Comparison}")
    tex.append(get_splicing_comparison_table())
    
    tex.append(r"\section{Link Budget \& Testing Benchmarks}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch6_testing_intro"], student_index)))
    
    tex.append(r"\subsection{Wavelength Multiplexing}")
    tex.append(make_list_items(REPORT_CONTENT["ch6_wavelengths"], student_index))
    
    tex.append(r"\subsection{Testing Parameters}")
    tex.append(make_list_items(REPORT_CONTENT["ch6_testing_params"], student_index))
    
    tex.append(r"\section{Troubleshooting \& Indicators}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch6_troubleshoot_intro"], student_index)))
    tex.append(get_troubleshooting_matrix_table("ONT Troubleshooting Matrix"))
    
    # Chapter 7
    tex.append(r"\chapter{Field Visit: BSNL Exchange Office, Manjeri}")
    tex.append(r"\section{Introduction to the Field Visit}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch7_visit_intro"], student_index)))
    
    tex.append(r"\section{Observations and Core Infrastructure}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch7_observations"], student_index)))
    
    tex.append(r"\section{Conclusion of the Visit}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch7_visit_conclusion"], student_index)))
    
    # Part Conclusion I
    tex.append(r"\chapter*{Part Conclusion: Fiber Optic Infrastructure}")
    tex.append(r"\addcontentsline{toc}{chapter}{Part Conclusion: Fiber Optic Infrastructure}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["part1_conclusion"], student_index)))
    
    # Part II
    tex.append(r"\part{Electrical Home Appliances Maintenance and Troubleshooting}")
    
    # Part II Introduction
    tex.append(r"\chapter*{Part Introduction: Domestic Electrical Engineering}")
    tex.append(r"\addcontentsline{toc}{chapter}{Part Introduction: Domestic Electrical Engineering}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["part2_intro"], student_index)))
    
    # Chapter 8
    tex.append(r"\chapter{Fundamentals of Electrical Systems \& Safety}")
    tex.append(r"\section{Introduction}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch8_intro"], student_index)))
    
    tex.append(r"\section{Fundamentals of Electrical Systems \& Safety Overview}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch8_overview"], student_index)))
    
    tex.append(r"\subsection{Circuit Behaviors \& Laws}")
    tex.append(make_list_items(REPORT_CONTENT["ch8_behaviors"], student_index))
    tex.append(r"\begin{equation}V = IR \quad \text{and} \quad P = VI = I^2 R\end{equation}")
    
    tex.append(r"\subsection{Earthing and Protection Systems}")
    tex.append(make_list_items(REPORT_CONTENT["ch8_protection"], student_index))
    
    # Chapter 9
    tex.append(r"\chapter{Technical Breakdown \& Diagnostics of Core Home Appliances}")
    
    tex.append(r"\section{Electric Iron}")
    tex.append(r"\noindent\textbf{A. Working Principle}\par\medskip")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch9_iron_principle"], student_index)))
    tex.append(r"\begin{equation}H = I^2 R t\end{equation}")
    tex.append(r"\noindent\textbf{B. Key Components and Parts}\par\medskip")
    tex.append(make_list_items(REPORT_CONTENT["ch9_iron_components"], student_index))
    tex.append(r"\noindent\textbf{C. Appliance Conclusion}\par\medskip")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch9_iron_conclusion"], student_index)))
    
    tex.append(r"\section{Induction Cooker}")
    tex.append(r"\noindent\textbf{A. Working Principle}\par\medskip")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch9_induction_principle"], student_index)))
    tex.append(r"\noindent\textbf{B. Key Components and Parts}\par\medskip")
    tex.append(make_list_items(REPORT_CONTENT["ch9_induction_components"], student_index))
    tex.append(r"\noindent\textbf{C. Appliance Conclusion}\par\medskip")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch9_induction_conclusion"], student_index)))
    
    tex.append(r"\section{Mixer Grinder}")
    tex.append(r"\noindent\textbf{A. Working Principle}\par\medskip")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch9_mixer_principle"], student_index)))
    tex.append(r"\noindent\textbf{B. Key Components and Parts}\par\medskip")
    tex.append(make_list_items(REPORT_CONTENT["ch9_mixer_components"], student_index))
    
    tex.append(r"\subsection{Ceiling Fan}")
    tex.append(r"\noindent\textbf{A. Working Principle}\par\medskip")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch9_ceiling_fan_principle"], student_index)))
    tex.append(r"\noindent\textbf{B. Key Components and Parts}\par\medskip")
    tex.append(make_list_items(REPORT_CONTENT["ch9_ceiling_fan_components"], student_index))
    tex.append(r"\noindent\textbf{C. Appliance Conclusion}\par\medskip")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch9_ceiling_fan_conclusion"], student_index)))
    
    tex.append(r"\subsection{Wall Fan}")
    tex.append(r"\noindent\textbf{A. Working Principle}\par\medskip")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch9_wall_fan_principle"], student_index)))
    tex.append(r"\noindent\textbf{B. Key Components and Parts}\par\medskip")
    tex.append(make_list_items(REPORT_CONTENT["ch9_wall_fan_components"], student_index))
    tex.append(r"\noindent\textbf{C. Appliance Conclusion}\par\medskip")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch9_wall_fan_conclusion"], student_index)))
    
    # Chapter 10
    tex.append(r"\chapter{Troubleshooting \& Maintenance Practice Matrix}")
    tex.append(get_troubleshooting_matrix_table("ONT Troubleshooting Matrix Summary"))
    tex.append(get_appliance_troubleshooting_table())
    
    tex.append(r"\section{Internship Outcomes \& Skills Acquired}")
    tex.append(make_list_items(REPORT_CONTENT["ch10_outcomes"], student_index))
    
    # Chapter 11
    tex.append(r"\chapter{Applied Practical Calculations}")
    tex.append(r"\section{Domestic Electricity Consumption Auditing}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["ch11_audit_intro"], student_index)))
    tex.append(r"\begin{quote}\textit{" + latex_escape(parse_spintax(REPORT_CONTENT["ch11_audit_problem"], student_index)) + r"}\end{quote}")
    
    tex.append(r"""\begin{align*}
E_{\text{Lights}} &= 2 \times 40\text{ W} \times 6\text{ hrs/day} \times 30\text{ days} = 14{,}400\text{ Wh} = 14.4\text{ kWh} \\
E_{\text{Fans}}   &= 3 \times 65\text{ W} \times 8\text{ hrs/day} \times 30\text{ days} = 46{,}800\text{ Wh} = 46.8\text{ kWh} \\
E_{\text{Misc}}   &= 150\text{ W} \times 2\text{ hrs/day} \times 30\text{ days} = 9{,}000\text{ Wh} = 9.0\text{ kWh} \\
E_{\text{Total}}  &= 14.4\text{ kWh} + 46.8\text{ kWh} + 9.0\text{ kWh} = 70.2\text{ kWh (Units)}
\end{align*}""")
    
    tex.append(r"\section{Charge Calculation in Audio Systems}")
    tex.append(r"\begin{quote}\textit{" + latex_escape(parse_spintax(REPORT_CONTENT["ch11_charge_problem"], student_index)) + r"}\end{quote}")
    tex.append(r"""\begin{align*}
\text{Given: } &V = 230\text{ V}, \ E = 8 \times 10^6\text{ J} \\
\text{Equation: } &E = qV \\
q &= \frac{E}{V} \\
  &= \frac{8 \times 10^6\text{ J}}{230\text{ V}} \\
  &= 3.48 \times 10^4\text{ Coulombs (C)}
\end{align*}""")
    
    # Part Conclusion II
    tex.append(r"\chapter*{Part Conclusion: Domestic Electrical Engineering}")
    tex.append(r"\addcontentsline{toc}{chapter}{Part Conclusion: Domestic Electrical Engineering}")
    tex.append(latex_escape(parse_spintax(REPORT_CONTENT["part2_conclusion"], student_index)))
    
    tex.append(r"\end{document}")
    
    return "\n".join(tex)

# Main Generation and Compilation Sequence
def main():
    print("Initializing directories...")
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        print(f"Created directory: {OUTPUT_DIR}")
        
    # Copy logo to Output directory
    if os.path.exists(LOGO_PATH):
        shutil.copy(LOGO_PATH, os.path.join(OUTPUT_DIR, "logo_extracted-000.png"))
        print(f"Copied logo to {OUTPUT_DIR}/logo_extracted-000.png")
    else:
        print(f"Warning: logo file not found at {LOGO_PATH}")
        
    tex_files = []
    
    print("\nStarting LaTeX source code generation for all 7 students...")
    for idx, student_name in enumerate(STUDENTS):
        safe_name = student_name.replace(" ", "_")
        print(f"Generating LaTeX for {student_name} ({idx+1}/7)...")
        
        latex_content = build_student_latex(student_name, idx)
        tex_path = os.path.join(OUTPUT_DIR, f"{safe_name}_Internship_Report.tex")
        
        with open(tex_path, "w", encoding="utf-8") as f:
            f.write(latex_content)
            
        print(f"Created LaTeX source: {tex_path}")
        tex_files.append((student_name, tex_path, safe_name))
        
    print("\nSource code generation completed.")
    
    # Check if a latex compiler is available in path
    pdflatex_path = shutil.which("pdflatex")
    
    if not pdflatex_path:
        print("\n" + "="*80)
        print("CRITICAL: 'pdflatex' compiler not found in system PATH.")
        print("To compile these reports, please install LaTeX packages on Arch Linux by running:")
        print("    sudo pacman -S texlive-latex texlive-latexrecommended texlive-fontsrecommended")
        print("Then rerun this script to automatically compile the PDFs.")
        print("="*80 + "\n")
        return
        
    print(f"\nFound LaTeX compiler at: {pdflatex_path}")
    print("Attempting to compile .tex files to PDF...")
    
    compilation_errors = []
    
    for student_name, tex_path, safe_name in tex_files:
        print(f"\n--------------------------------------------------")
        print(f"Compiling report for: {student_name}")
        print(f"--------------------------------------------------")
        
        # Run pdflatex twice to ensure Table of Contents and labels are fully resolved
        success = True
        for pass_num in [1, 2]:
            print(f"Running compilation pass {pass_num}...")
            cmd = ["pdflatex", "-interaction=nonstopmode", "-output-directory", OUTPUT_DIR, tex_path]
            result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            
            if result.returncode != 0:
                print(f"Error during compilation pass {pass_num}:")
                # Print last few lines of standard output to show LaTeX compile errors
                log_lines = result.stdout.decode("utf-8", errors="ignore").splitlines()
                for line in log_lines[-30:]:
                    print(f"  {line}")
                success = False
                break
                
        if success:
            pdf_path = os.path.join(OUTPUT_DIR, f"{safe_name}_Internship_Report.pdf")
            if os.path.exists(pdf_path):
                print(f"Success! Generated: {pdf_path}")
            else:
                print("Error: PDF compilation completed, but the PDF file was not found.")
                success = False
        
        if not success:
            compilation_errors.append(student_name)
            
    # Cleanup temporary aux/log files from compilation
    print("\nCleaning up auxiliary build files...")
    extensions_to_clean = [".aux", ".log", ".toc", ".out"]
    cleaned_count = 0
    for root, dirs, files in os.walk(OUTPUT_DIR):
        for file in files:
            ext = os.path.splitext(file)[1]
            if ext in extensions_to_clean:
                os.remove(os.path.join(root, file))
                cleaned_count += 1
    print(f"Removed {cleaned_count} auxiliary build files.")
    
    print("\n" + "="*50)
    if compilation_errors:
        print(f"COMPILATION WARNING: Completed with errors.")
        print(f"Failed to compile reports for: {', '.join(compilation_errors)}")
        print("Please check that the required LaTeX packages are installed:")
        print("    sudo pacman -S texlive-latex texlive-latexrecommended texlive-fontsrecommended")
    else:
        print("ALL REPORTS GENERATED AND COMPILED SUCCESSFULLY!")
        print(f"Find all files in: {OUTPUT_DIR}")
    print("="*50 + "\n")

if __name__ == "__main__":
    main()
