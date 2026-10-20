import re
def box(title, recall, steps, saved):
    s = ''.join(f'<li>{x}</li>' for x in steps)
    return (f'<div class="box-recall"><span class="lbl recall">Plus Two recall: {title}</span>\n'
            f'<p><b>Recall.</b> {recall}</p>\n'
            f'<p><b>Re-derive.</b></p><ol>{s}</ol>\n'
            f'<p><b>Saved.</b> {saved}</p></div>\n')

R = {
'ohm': box('Ohm’s law and resistivity',
  'From Class 12: $V=IR$, and for a wire $R=\\rho\\ell/A$, where $\\rho$ is the resistivity.',
  ['Take a uniform cylinder of length $\\ell$ and area $A$, with potential difference $V$ between its ends. The field is $E=V/\\ell$ (uniform, Example 7.3).',
   'The current density is $J=I/A$.',
   'From $V=IR$ and $R=\\rho\\ell/A$: $I=VA/(\\rho\\ell)$.',
   'Therefore $J=I/A=V/(\\rho\\ell)=E/\\rho=\\sigma E$, with $\\sigma=1/\\rho$.'],
  '$\\mathbf J=\\sigma\\mathbf E$ (Eq. 7.3).'),
'joule': box('Joule heating',
  'From Class 12: power $P=VI$, and with $V=IR$, $P=I^2R$.',
  ['Work per unit charge across a resistor is $V$.',
   'Charge passing per unit time is $I$.',
   'So energy per unit time is $VI$. Substituting $V=IR$ gives $I^2R$.'],
  '$P=VI=I^2R$ (Eq. 7.7).'),
'emf': box('emf as work per unit charge',
  'From Class 12: the emf of a source is the work done per unit charge by the source in carrying charge round the circuit.',
  ['The source force per unit charge is $\\mathbf f_s$. Its work per unit charge over one trip round the loop is $\\oint\\mathbf f_s\\cdot d\\mathbf l$.',
   'The electrostatic field does no net work round a closed loop, since $\\oint\\mathbf E\\cdot d\\mathbf l=0$.',
   'So only the source force remains.'],
  '$\\mathcal E=\\oint\\mathbf f\\cdot d\\mathbf l=\\oint\\mathbf f_s\\cdot d\\mathbf l$ (Eq. 7.9).'),
'internal': box('Internal resistance',
  'From Class 12: a real cell of emf $\\mathcal E$ and internal resistance $r$ gives terminal voltage $V=\\mathcal E-Ir$ when current $I$ flows.',
  ['An ideal source (no resistance) gives terminal voltage $V=\\mathcal E$ (Eq. 7.10).',
   'In a real source the current $I$ flows through the internal resistance $r$, so there is a potential drop $Ir$ inside the source (Ohm’s law across $r$).',
   'The terminal voltage is the emf less this drop.'],
  '$V_{\\text{terminal}}=\\mathcal E-Ir$ (footnote 4).'),
'motional': box('Motional emf $\\mathcal E=Blv$',
  'From Class 12: a conductor of length $l$ moving at speed $v$ perpendicular to a field $B$ has emf $Blv$.',
  ['The magnetic force on a charge $q$ is $q\\mathbf v\\times\\mathbf B$. So the force per unit charge is $\\mathbf v\\times\\mathbf B$, with magnitude $vB$, directed along the wire.',
   'Integrate this along the moving side of length $h$: $\\oint\\mathbf f_{\\text{mag}}\\cdot d\\mathbf l=vBh$.'],
  '$\\mathcal E=vBh$ (Eq. 7.11).'),
'faraday': box('Faraday’s law: $\\mathcal E=-d\\Phi/dt$',
  'From Class 12: the induced emf equals minus the rate of change of magnetic flux, $\\mathcal E=-d\\Phi/dt$.',
  ['For the loop of Fig. 7.10, the flux is $\\Phi=Bhx$, where $x$ is the length of the loop inside the field.',
   'As the loop moves right, $x$ decreases at speed $v$, so $dx/dt=-v$.',
   'Therefore $d\\Phi/dt=-Bhv$, and $-d\\Phi/dt=vBh$, which is the motional emf of Eq. 7.11.'],
  '$\\mathcal E=-d\\Phi/dt$ (Eq. 7.13).'),
}

PLAN = {
 'm2-s71-ohm-study.body.html': [('before','<h3>1. Force per unit charge and current density</h3>','ohm'),
                                ('before','<h3>7. Joule heating (Eq. 7.7)</h3>','joule')],
 'm2-s71-ohm-structured.body.html': [('before','<h3>1. Constitutive law</h3>','ohm'),
                                     ('before','<h3>7. Joule heating (Eq. 7.7)</h3>','joule')],
 'm2-s72-emf-study.body.html': [('before','<h3>2. Two forces drive the charges</h3>','emf'),
                                ('before','<h3>4. An analogy (footnote 5)</h3>','internal')],
 'm2-s72-emf-structured.body.html': [('before','<h3>3. Definition of emf</h3>','emf'),
                                     ('before','<h3>5. Hydraulic analogy (footnote 5)</h3>','internal')],
 'm2-s73-motional-study.body.html': [('before','<h3>2. Who is doing the work?</h3>','motional'),
                                     ('before','<h3>4. Proof of the flux rule</h3>','faraday')],
 'm2-s73-motional-structured.body.html': [('before','<h3>2. Energy balance</h3>','motional'),
                                          ('before','<h3>4. Proof</h3>','faraday')],
}
for f, items in PLAN.items():
    t = open(f, encoding='utf-8').read()
    t = re.sub(r'<div class="box-recall">.*?</p></div>\n?', '', t, flags=re.S) if False else t
    for where, anchor, key in items:
        assert t.count(anchor) == 1, (f, anchor)
        t = t.replace(anchor, R[key] + anchor)
    open(f, 'w', encoding='utf-8').write(t)
    print(f, 'recall boxes added:', len(items))
