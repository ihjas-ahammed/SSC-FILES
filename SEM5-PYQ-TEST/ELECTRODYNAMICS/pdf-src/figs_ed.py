"""Computed diagrams. Electric/voltage blue; magnetic orange; current green; axes grey."""
from figs import *

def dipoles():
 s=S(360,170)
 for y in [65,105]:
  for x in [50,130,210,290]:
   s.dot(x-12,y,BLUE,5).dot(x+12,y,ORANGE,5).line(x-5,y,x+5,y,GREY)
   s.text(x-12,y+20,'−',BLUE,12).text(x+12,y+20,'+',ORANGE,12)
 s.line(70,25,290,25,BLUE,2,arrow=True).text(180,16,'E and aligned p',BLUE,12)
 s.text(180,155,'Equal charges; separated centres',INK,12)
 return fig(s.svg(),'Dipole arrows point from minus to plus. Alignment creates polarization without net charge.')
def polarized_slab():
 s=S(360,180);s.rect(90,35,180,110,'#e8f3fb',stroke=BLUE)
 for y in [55,90,125]:s.text(98,y,'−',BLUE,16).text(260,y,'+',ORANGE,16)
 s.line(130,67,230,67,BLUE,2,arrow=True).text(180,56,'P',BLUE,13)
 s.line(230,110,130,110,ORANGE,2,arrow=True).text(180,133,'E inside',ORANGE,12)
 s.line(90,90,40,90,GREY,arrow=True).text(45,77,'n',GREY)
 s.line(270,90,320,90,GREY,arrow=True).text(316,77,'n',GREY)
 s.text(180,169,'Uniform slab: E opposes P',INK,12)
 return fig(s.svg(),'For an infinite uniformly polarized slab with no free charge, bound faces make a depolarizing field.')
def boundary():
 s=S(360,170);s.rect(0,85,360,85,'#e8f3fb');s.line(10,85,350,85,GREY)
 s.text(25,40,'2',INK,15).text(25,135,'1',INK,15)
 s.line(180,125,180,35,GREY,2,arrow=True).text(196,44,'n: 1 → 2',GREY,11,'start')
 s.rect(95,65,55,40,'none',stroke=GREEN);s.text(82,155,'pillbox: normal flux',GREEN,10,'start')
 s.path('M240 65 L315 65 L315 105 L240 105 Z',BLUE,2);s.text(237,155,'loop: tangential',BLUE,10,'start')
 return fig(s.svg(),'A pillbox compares normal fields. A shrinking loop compares tangential fields. Keep the same normal direction in every jump.')
def magnetized_cylinder():
 s=S(360,180);s.rect(70,50,220,80,'#fff3e8',rx=30,stroke=ORANGE)
 for x in range(90,290,35):
  s.path(f'M{x} 52 Q{x-22} 90 {x} 128 Q{x+22} 90 {x} 52',GREEN,1.4)
  s.line(x-10,75,x-12,91,GREEN,arrow=True)
 s.line(115,90,250,90,ORANGE,2.5,arrow=True).text(180,30,'M and interior B',ORANGE,12)
 s.text(180,160,'Surface loops act like a solenoid',INK,12)
 return fig(s.svg(),'Long uniformly magnetized cylinder. The drawn loop sheet is the equivalent bound current, not a free winding.')
def hysteresis():
 s=S(360,200);s.line(30,100,330,100,GREY,arrow=True).line(180,185,180,15,GREY,arrow=True)
 for shift,c in [(0.65,BLUE),(-0.65,ORANGE)]:
  pts=[(180+47*x,100-55*math.tanh(x+shift)) for x in [i/30 for i in range(-90,91)]]
  s.path('M'+' L'.join(f'{x:.1f},{y:.1f}' for x,y in pts),c,2)
 s.text(332,117,'H',GREY,12).text(198,20,'M',GREY,12)
 s.text(40,25,'return branch',BLUE,10,'start').text(40,180,'forward branch',ORANGE,10,'start')
 return fig(s.svg(),'Illustrative M-H hysteresis branches, not measured material data. The zero-field intercept shows remanence; horizontal intercepts show coercive fields.')
def moving_rod():
 s=S(360,185)
 for x in range(90,310,45):
  for y in [60,105]:s.text(x,y,'×',ORANGE,17)
 s.line(55,35,290,35,INK).line(55,140,290,140,INK).line(55,35,55,140,INK)
 s.path('M55 70 L45 75 L65 85 L45 95 L55 105',INK,2)
 s.line(240,35,240,140,BLUE,4).line(260,87,325,87,BLUE,2,arrow=True)
 s.text(303,76,'v',BLUE,12).text(251,30,'+',BLUE,12).text(251,157,'−',BLUE,12)
 s.text(33,91,'R',INK,12).text(180,177,'B into page (×); rod moves right',ORANGE,11)
 return fig(s.svg(),'With velocity right and B into the page, v × B points up: the top of the rod becomes positive.')
def induced_e():
 s=S(360,210);cx,cy=180,95
 s.add(f'<circle cx="{cx}" cy="{cy}" r="55" fill="#fff3e8" stroke="{ORANGE}"/>')
 for x,y in [(160,75),(200,75),(160,115),(200,115),(180,95)]:s.dot(x,y,ORANGE,3)
 s.add(f'<circle cx="{cx}" cy="{cy}" r="85" fill="none" stroke="{BLUE}" stroke-width="2"/>')
 s.line(178,10,196,12,BLUE,2,arrow=True)
 s.text(180,191,'Increasing B out of page → clockwise E',INK,10)
 s.text(180,159,'B region, radius a',ORANGE,11)
 return fig(s.svg(),'Dots mean B toward the reader. The surrounding induced E circulation opposes the increasing outward flux; it persists outside the B region.')
def capacitor():
 s=S(360,150);s.line(20,75,145,75,GREEN,2).line(215,75,340,75,GREEN,2)
 s.line(145,30,145,120,INK,3).line(215,30,215,120,INK,3)
 for y in [45,75,105]:s.line(155,y,205,y,BLUE,1.7,arrow=True)
 s.line(45,58,110,58,GREEN,2,arrow=True).text(75,43,'I',GREEN)
 s.text(180,17,'changing E',BLUE,12).text(180,144,'Gap: displacement contribution',INK,11)
 return fig(s.svg(),'During charging, conduction current in the leads and changing electric flux in the gap give equal total current contributions.')
def graph(curves,xmax=5,ymin=0,ymax=1.1,xlabel='t / τ',ylabel='fraction'):
 s=S(360,210);x0,y0,w,h=45,165,285,125
 s.line(x0,y0,x0+w+5,y0,GREY,arrow=True).line(x0,y0,x0,25,GREY,arrow=True)
 s.text(190,203,xlabel,INK,11).text(15,20,ylabel,INK,10,'start')
 for name,fn,col in curves:
  pts=[(x0+w*x/xmax,y0-h*(fn(x)-ymin)/(ymax-ymin)) for x in [i*xmax/240 for i in range(241)]]
  s.path('M'+' L'.join(f'{x:.1f},{y:.1f}' for x,y in pts),col,2)
 for i in range(int(xmax)+1):s.text(x0+w*i/xmax,y0+15,str(i),GREY,9)
 legend(s,160,12,[(c,n,None) for n,_,c in curves])
 return s

def wave_profile():
 s=S(360,190);s.line(20,95,340,95,GREY,arrow=True)
 for offset,c in [(0,BLUE),(0.65,GREEN)]:
  pts=[(25+310*t,95-45*math.cos(4*math.pi*t-offset)) for t in [i/250 for i in range(251)]]
  s.path('M'+' L'.join(f'{x:.1f},{y:.1f}' for x,y in pts),c,2)
 s.line(125,25,230,25,INK,arrow=True).text(180,16,'pattern travels +z',INK,11)
 legend(s,60,153,[(BLUE,'earlier',None),(GREEN,'later',None)])
 return fig(s.svg(),'A cosine profile shifts toward +z as time increases. Field oscillation and pattern travel are different motions.')
def polarization():
 s=S(360,160)
 for cx in [65,180,295]:s.line(cx-45,80,cx+45,80,GREY).line(cx,125,cx,35,GREY)
 s.line(35,110,95,50,BLUE,2)
 for cx,a,b in [(180,35,35),(295,25,42)]:
  pts=[(cx+a*math.cos(t),80-b*math.sin(t)) for t in [i*2*math.pi/100 for i in range(101)]]
  s.path('M'+' L'.join(f'{x:.1f},{y:.1f}' for x,y in pts),BLUE,2)
 for x,t in [(65,'linear'),(180,'circular'),(295,'elliptical')]:s.text(x,149,t,INK,12)
 return fig(s.svg(),'Paths traced by the electric-field tip at a fixed position, viewed in the plane perpendicular to propagation.')
def em_geometry():
 s=S(360,185);s.line(125,125,125,30,BLUE,2.5,arrow=True).text(110,30,'E (+x)',BLUE,12,'end')
 s.line(125,125,65,163,ORANGE,2.5,arrow=True).text(55,177,'B (+y)',ORANGE,12,'start')
 s.line(125,125,320,125,GREEN,2.5,arrow=True).text(260,110,'travel (+z)',GREEN,12)
 s.text(225,35,'E × B → travel',INK,12)
 return fig(s.svg(),'A perspective schematic of three mutually perpendicular directions. E and B oscillate in phase; the propagation vector is not a third oscillating field.')
def energy_flow():
 s=S(360,150);s.rect(100,35,150,80,'#e8f3fb',stroke=BLUE)
 s.line(20,75,85,75,GREEN,3,arrow=True).text(50,58,'in',GREEN,12)
 s.line(260,75,335,75,GREEN,3,arrow=True).text(297,58,'out',GREEN,12)
 s.text(175,66,'field energy U',BLUE,12).text(175,91,'work on charges',ORANGE,11)
 s.text(180,140,'Loss = outward flow + work',INK,12)
 return fig(s.svg(),'Poynting accounting: the boundary flux and work on charges account for changes in stored field energy.')
def radiation():
 s=S(360,150);s.line(270,20,270,125,INK,5)
 s.line(30,55,250,55,BLUE,2,arrow=True).text(130,43,'incoming momentum',BLUE,11)
 s.line(250,95,30,95,ORANGE,2,arrow=True).text(140,118,'reflected momentum',ORANGE,11)
 s.text(285,140,'mirror',INK,10)
 return fig(s.svg(),'Reflection reverses normal wave momentum. The mirror receives twice the incoming momentum per unit time at ideal normal incidence.')
def transient():
 s=graph([('growth',lambda x:1-math.exp(-x),GREEN),('decay',lambda x:math.exp(-x),BLUE)])
 return fig(s.svg(),'Computed exponential growth and decay. At t/τ=1 the fractions are 0.632 and 0.368; the same time scale describes the remaining gap.')
def rc_circuit():
 s=S(360,180);s.path('M50 45 L135 45 L145 35 L155 55 L165 35 L175 55 L185 45 L290 45 L290 85',INK,2)
 s.line(270,85,310,85,BLUE,3).line(270,105,310,105,BLUE,3)
 s.path('M290 105 L290 140 L50 140 L50 105 M50 85 L50 45',INK,2)
 s.line(32,85,68,85,INK,3).line(40,105,60,105,INK,2)
 s.text(163,22,'R',INK,12).text(330,100,'C',BLUE,12).text(21,97,'V',INK,12)
 s.line(85,66,125,66,GREEN,arrow=True).text(105,83,'i',GREEN,12)
 s.text(180,167,'Charging loop: V = Ri + q/C',INK,11)
 return fig(s.svg(),'Series RC charging with the switch understood to close at t=0. The initially positive capacitor plate is the upper plate.')
def lc_energy():
 s=graph([('electric fraction',lambda x:math.cos(math.pi*x/2)**2,BLUE),('magnetic fraction',lambda x:math.sin(math.pi*x/2)**2,ORANGE)],xmax=4,xlabel='time in quarter-periods')
 return fig(s.svg(),'Computed free-LC energy fractions: electric plus magnetic energy is one at every instant.')
def phasor():
 s=S(360,185);s.line(45,135,315,135,GREY,arrow=True).line(45,165,45,20,GREY,arrow=True)
 s.line(45,135,225,135,GREEN,2.5,arrow=True).text(190,154,'I, V_R',GREEN,12)
 s.line(225,135,225,45,ORANGE,2.5,arrow=True).text(242,78,'V_L',ORANGE,12)
 s.line(45,135,225,45,BLUE,2.5,arrow=True).text(130,70,'V',BLUE,13)
 s.arc(45,135,45,0,math.degrees(math.atan2(90,180)),BLUE,label='φ',lr=58)
 return fig(s.svg(),'Series RL phasors with current as reference. V is the vector sum of V_R and V_L, so the source voltage leads current.')
def resonance():
 s=S(360,190);s.line(40,150,335,150,GREY,arrow=True).line(40,150,40,25,GREY,arrow=True)
 pts=[]
 for i in range(1,301):
  r=.2+2.3*i/300; response=1/math.sqrt(1+25*(r-1/r)**2)
  pts.append((40+285*(r-.2)/2.3,150-110*response))
 s.path('M'+' L'.join(f'{x:.1f},{y:.1f}' for x,y in pts),GREEN,2)
 x=40+285*.8/2.3;s.line(x,150,x,35,GREY,1,'3 3').text(x,167,'1',INK,10)
 s.text(190,185,'ω / ω₀',INK,11).text(47,19,'I / (V/R)',GREEN,11,'start')
 return fig(s.svg(),'Computed series-resonance current curve for Q=5. Maximum current occurs at ω=ω₀; finite resistance keeps the peak finite.')
