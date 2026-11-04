#!/usr/bin/env python3
"""Create paired light/dark teaching diagrams for the new module III/IV bridges."""
from pathlib import Path
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

ROOT = Path(__file__).resolve().parents[1]
OUT = {mode: ROOT / 'diagrams' / mode for mode in ('light', 'dark')}
for folder in OUT.values():
    folder.mkdir(parents=True, exist_ok=True)

PALETTE = {
    'light': {'bg': '#FAF8F4', 'fg': '#172033', 'grid': '#d8dee9', 'blue': '#2563eb', 'green': '#059669', 'orange': '#d97706', 'pink': '#db2777', 'purple': '#7c3aed'},
    'dark': {'bg': '#101621', 'fg': '#e5edf7', 'grid': '#344154', 'blue': '#60a5fa', 'green': '#34d399', 'orange': '#fbbf24', 'pink': '#f472b6', 'purple': '#c4b5fd'},
}

def save(name, title, draw, xlabel='', ylabel=''):
    for mode, folder in OUT.items():
        c = PALETTE[mode]
        fig, ax = plt.subplots(figsize=(7.4, 4.5), dpi=160)
        fig.patch.set_facecolor(c['bg']); ax.set_facecolor(c['bg'])
        draw(ax, c)
        ax.set_title(title, color=c['fg'], fontsize=13, weight='bold', pad=13)
        if xlabel: ax.set_xlabel(xlabel, color=c['fg'])
        if ylabel: ax.set_ylabel(ylabel, color=c['fg'])
        ax.tick_params(colors=c['fg'])
        for sp in ax.spines.values(): sp.set_color(c['grid'])
        ax.grid(alpha=.45, color=c['grid'], linestyle='--')
        fig.tight_layout()
        fig.savefig(folder / f'{name}.png', facecolor=c['bg'], bbox_inches='tight')
        plt.close(fig)

def complex_plane(ax, c):
    ax.axhline(0, color=c['grid']); ax.axvline(0, color=c['grid'])
    z=(3,2)
    ax.annotate('', xy=z, xytext=(0,0), arrowprops={'arrowstyle':'->','lw':3,'color':c['blue']})
    ax.annotate('', xy=(3,-2), xytext=(0,0), arrowprops={'arrowstyle':'->','lw':2,'color':c['orange']})
    ax.plot([3,3],[0,2],':',color=c['fg']); ax.text(3.1,2.05,r'$z=3+2i$',color=c['blue'],fontsize=12)
    ax.text(3.1,-2.3,r'$z^*=3-2i$',color=c['orange'],fontsize=12)
    ax.text(1.5,.25,r'$|z|=\sqrt{13}$',color=c['green'],ha='center',fontsize=12)
    ax.set(xlim=(-1,5),ylim=(-3,3),aspect='equal')

def state_coords(ax,c):
    ax.bar([0,1],[1/np.sqrt(2),1/np.sqrt(2)],color=[c['green'],c['purple']],width=.58)
    ax.set_xticks([0,1],[r'$|0\rangle$: phase $0$',r'$|1\rangle$: phase $\pi/2$'])
    ax.set_ylim(0,1.05); ax.set_ylabel('amplitude magnitude')
    ax.text(.5,.88,r'$|\psi\rangle=(|0\rangle+i|1\rangle)/\sqrt{2}$',color=c['blue'],ha='center',fontsize=13)
    ax.text(.5,.73,r'$\|\psi\|^2=|c_0|^2+|c_1|^2=1$',color=c['fg'],ha='center',fontsize=11)

def matrix_map(ax,c):
    ax.axis('off'); ax.set(xlim=(0,10),ylim=(0,6))
    ax.text(1,4.5,r'$\mathbf{v}$',color=c['blue'],fontsize=20,ha='center')
    ax.text(5,4.5,r'$A\mathbf{v}$',color=c['green'],fontsize=20,ha='center')
    ax.text(5,2.8,r'$B(A\mathbf{v})$',color=c['purple'],fontsize=16,ha='center')
    ax.text(5,1.3,r'$A(B\mathbf{v})$',color=c['orange'],fontsize=16,ha='center')
    ax.annotate('',xy=(4,4.5),xytext=(1.5,4.5),arrowprops={'arrowstyle':'->','lw':2,'color':c['blue']})
    ax.annotate('',xy=(4,2.8),xytext=(1.5,4.2),arrowprops={'arrowstyle':'->','lw':2,'color':c['purple']})
    ax.annotate('',xy=(4,1.3),xytext=(1.5,3.9),arrowprops={'arrowstyle':'->','lw':2,'color':c['orange']})
    ax.text(7,3.4,r'$AB\ne BA$',color=c['pink'],fontsize=18,ha='center')
    ax.text(7,2.5,'order can change the output',color=c['fg'],fontsize=10,ha='center')

def slope_area(ax,c):
    x=np.linspace(0,3,200); y=x*x/3
    ax.plot(x,y,color=c['blue'],lw=2.5,label=r'$f(x)$')
    ax.fill_between(x,y,0,color=c['green'],alpha=.25,label=r'$\int_0^3 f(x)dx$ (area)')
    x0=1.5; y0=x0*x0/3; slope=2*x0/3
    ax.plot(x0,y0,'o',color=c['orange']); ax.plot(x,y0+slope*(x-x0),'--',color=c['orange'],label='local slope')
    ax.legend(facecolor=c['bg'],labelcolor=c['fg'],edgecolor=c['grid'])
    ax.set(xlim=(0,3),ylim=(0,3.5))

def stats(ax,c):
    x=np.linspace(-4,4,400); p=np.exp(-x*x/2); p/=np.trapezoid(p,x)
    ax.plot(x,p,color=c['blue'],lw=2.5); ax.fill_between(x,p,where=(x>=-1)&(x<=1),color=c['green'],alpha=.35)
    ax.axvline(0,color=c['orange'],ls='--',label='mean'); ax.axvline(-1,color=c['purple'],ls=':'); ax.axvline(1,color=c['purple'],ls=':',label='one spread unit')
    ax.legend(facecolor=c['bg'],labelcolor=c['fg'],edgecolor=c['grid'])
    ax.text(-3,.28,'shaded area = probability in interval',color=c['fg'],fontsize=9)
    ax.set(xlim=(-4,4),ylim=(0,.9))

def landscape(ax,c):
    x=np.linspace(-3,3,300); v=.5*x*x
    ax.plot(x,v,color=c['blue'],lw=2.5); ax.axhline(1.5,color=c['orange'],ls='--',label='total energy E')
    ax.scatter([-np.sqrt(3),np.sqrt(3)],[1.5,1.5],color=c['pink'],zorder=4,label='turning points')
    ax.annotate('stable equilibrium',xy=(0,0),xytext=(.8,.6),color=c['green'],arrowprops={'arrowstyle':'->','color':c['green']})
    ax.legend(facecolor=c['bg'],labelcolor=c['fg'],edgecolor=c['grid']); ax.set(xlim=(-3,3),ylim=(-.2,4.8))

def taylor(ax,c):
    x=np.linspace(-2,2,400); exact=.5*x*x+.04*x**4
    ax.plot(x,exact,color=c['blue'],lw=2.5,label='smooth valley')
    ax.plot(x,.5*x*x,'--',color=c['orange'],lw=2.2,label='quadratic near minimum')
    ax.axvspan(-.7,.7,color=c['green'],alpha=.14,label='small-displacement region')
    ax.legend(facecolor=c['bg'],labelcolor=c['fg'],edgecolor=c['grid']); ax.set(xlim=(-2,2),ylim=(-.2,2.2))

def shm(ax,c):
    t=np.linspace(0,2*np.pi,400); x=np.cos(t)
    ax.plot(t,x,color=c['blue'],lw=2.5); ax.axhline(0,color=c['grid'])
    for tt in [0,np.pi/2,np.pi,3*np.pi/2,2*np.pi]: ax.plot(tt,np.cos(tt),'o',color=c['orange'])
    ax.set_xticks([0,np.pi/2,np.pi,3*np.pi/2,2*np.pi],[r'$0$',r'$T/4$',r'$T/2$',r'$3T/4$',r'$T$'])
    ax.set(xlim=(0,2*np.pi),ylim=(-1.4,1.4))

def length(ax,c):
    labels=[r'$m\omega$ small',r'$m\omega$ large']; vals=[1.35,.72]
    ax.bar(labels,vals,color=[c['green'],c['purple']],width=.55)
    ax.set_ylim(0,1.7); ax.set_ylabel(r'characteristic length $\xi=\sqrt{\hbar/(m\omega)}$')
    ax.text(0,.8,'lighter / softer → broader',ha='center',color=c['fg'],fontsize=10)

def degeneracy(ax,c):
    states=[(1,1,2),(1,2,1),(2,1,1)]
    for i,(a,b,d) in enumerate(states):
        ax.bar(i,a,color=c['blue']); ax.bar(i,b,bottom=a,color=c['green']); ax.bar(i,d,bottom=a+b,color=c['orange'])
        ax.text(i,4.3,f'({a},{b},{d})',ha='center',color=c['fg'])
    ax.set_xticks(range(3),['state A','state B','state C']); ax.set_ylabel(r'$n_x^2+n_y^2+n_z^2$')
    ax.set_ylim(0,5); ax.text(1,3,'same sum → same energy',ha='center',color=c['purple'],fontsize=11)

save('c.3.0.1_complex_amplitude_plane','Complex amplitudes are arrows',complex_plane,'real part','imaginary part')
save('c.3.0.2_quantum_state_coordinates','A state’s complex amplitudes in a two-state basis',state_coords)
save('c.3.0.3_matrix_transformations','Matrices act as ordered transformations',matrix_map)
save('c.3.0.4_slope_and_probability_area','Derivative as slope; integral as area',slope_area,'input x','function value')
save('c.3.0.5_expectation_and_spread','Mean and spread of measurement outcomes',stats,'position x','probability density')
save('c.4.0.1_energy_landscape','Potential energy, turning points, and stable equilibrium',landscape,'position x','potential energy V')
save('c.4.0.2_taylor_valley_to_parabola','A smooth valley is locally parabolic',taylor,'displacement from equilibrium','potential energy')
save('c.4.0.3_classical_shm_motion','One cycle of simple harmonic motion',shm,'time','position')
save('c.4.0.4_oscillator_length_scale','Quantum length scale shrinks as mass or frequency rises',length)
save('c.4.0.5_separation_and_degeneracy','Different coordinate states can share one energy',degeneracy,'quantum-number triple','energy contribution')
print('Generated 10 paired light/dark prerequisite diagrams.')
