"""
Module I: The Computational Thinking (Units 1 & 2)
ASD-STE100 Compliant Technical Text strictly adhering to Karl Beecher Chapters 1 & 2
and Kinder & Nelson Chapter 1.1
"""

def get_mod1_stations():
    return [
        {
            "id": "u1",
            "title": "Unit 1 · Computational Thinking Approach & Logical Thinking",
            "short": "Computational Thinking & Logic",
            "est": "~25 min",
            "body": r"""
gist("Computational thinking is a method to solve problems. It breaks large tasks into steps that a computer or a human can execute.")

tp("The Four Pillars of Computational Thinking")
<p>Computational thinking consists of four core techniques (Karl Beecher, Chapter 1):</p>
<ul>
  <li><b>Decomposition:</b> You break a complex problem into small, manageable components.</li>
  <li><b>Pattern Recognition:</b> You find similarities, repetitions, or trends among different parts of the problem.</li>
  <li><b>Abstraction:</b> You remove unnecessary details and focus only on information that is critical to the solution.</li>
  <li><b>Algorithm Design:</b> You write step-by-step instructions to solve each sub-problem correctly.</li>
</ul>

must("In physics, computational thinking converts continuous physical laws into discrete numerical procedures that execute in finite time.")

why("Physical systems often produce nonlinear differential equations with no closed-form analytical solution. Decomposition and numerical algorithms allow you to compute realistic solutions.")

tp("Propositional Logic and Truth Values")
<p>A <b>proposition</b> is a declarative statement that is either strictly <b>True</b> (1) or strictly <b>False</b> (0). It cannot be both.</p>
<p>Consider two propositions $P$ and $Q$. We combine them using five fundamental logical operators:</p>

std_table([
  "Operator", "Symbol", "Meaning", "True Condition"
], [
  ["Negation (NOT)", "$\\neg P$ or $\\sim P$", "Opposite truth value", "True when $P$ is False"],
  ["Conjunction (AND)", "$P \\land Q$", "Both conditions required", "True only when both $P$ and $Q$ are True"],
  ["Disjunction (OR)", "$P \\lor Q$", "At least one condition required", "True when $P$ is True, $Q$ is True, or both are True"],
  ["Implication (IMPLIES)", "$P \\to Q$", "Conditional consequence", "False only when $P$ is True and $Q$ is False"],
  ["Biconditional (IFF)", "$P \\leftrightarrow Q$", "Equivalence", "True when $P$ and $Q$ have identical truth values"]
])

tp("Truth Tables and Compound Propositions")
<p>The truth table below defines the operation of all compound logical operators across all possible binary inputs:</p>

std_table([
  "$P$", "$Q$", "$\\neg P$", "$P \\land Q$", "$P \\lor Q$", "$P \\to Q$", "$P \\leftrightarrow Q$"
], [
  ["True (1)", "True (1)", "False (0)", "True (1)", "True (1)", "True (1)", "True (1)"],
  ["True (1)", "False (0)", "False (0)", "False (0)", "True (1)", "False (0)", "False (0)"],
  ["False (0)", "True (1)", "True (1)", "False (0)", "True (1)", "True (1)", "False (0)"],
  ["False (0)", "False (0)", "True (1)", "False (0)", "False (0)", "True (1)", "True (1)"]
])

must("Textbook Rule (Karl Beecher, Ch. 2): The conditional statement $P \\to Q$ is True whenever the antecedent $P$ is False, regardless of the truth value of $Q$. In formal logic, a false premise vacuumously implies any conclusion.")

tp("Boolean Python Evaluation")
<p>Execute this Python program to verify the truth table values directly in the browser:</p>

ex(r'''# Evaluate compound Boolean propositions
def evaluate_logic(P, Q):
    not_P = not P
    p_and_q = P and Q
    p_or_q = P or Q
    p_implies_q = (not P) or Q
    p_iff_q = (P == Q)
    return not_P, p_and_q, p_or_q, p_implies_q, p_iff_q

print(f"{'P':<6}{'Q':<6}{'NOT P':<8}{'AND':<8}{'OR':<8}{'IMPLIES':<10}{'IFF':<6}")
print("-" * 52)
for P in [True, False]:
    for Q in [True, False]:
        res = evaluate_logic(P, Q)
        print(f"{str(P):<6}{str(Q):<6}{str(res[0]):<8}{str(res[1]):<8}{str(res[2]):<8}{str(res[3]):<10}{str(res[4]):<6}")
''', {title: "Truth Table Evaluation in Python"})

tp("De Morgan's Laws & Logical Equivalences")
<p>Karl Beecher defines two fundamental laws of propositional equivalence:</p>
<ul>
  <li><b>De Morgan's First Law:</b> $\neg(P \land Q) \equiv \neg P \lor \neg Q$ (The negation of a conjunction is the disjunction of the negations).</li>
  <li><b>De Morgan's Second Law:</b> $\neg(P \lor Q) \equiv \neg P \land \neg Q$ (The negation of a disjunction is the conjunction of the negations).</li>
</ul>
<p>For any conditional proposition $P \to Q$, the textbook defines three related statements:</p>
<ul>
  <li><b>Converse:</b> $Q \to P$ (Not logically equivalent to $P \to Q$).</li>
  <li><b>Inverse:</b> $\neg P \to \neg Q$ (Not logically equivalent to $P \to Q$).</li>
  <li><b>Contrapositive:</b> $\neg Q \to \neg P$ (Always logically equivalent to $P \to Q$).</li>
</ul>
"""
        },
        {
            "id": "u2",
            "title": "Unit 2 · Algorithmic Thinking, Flowcharts & Core Numerical Algorithms",
            "short": "Algorithms & Flowcharts",
            "est": "~30 min",
            "body": r"""
gist("An algorithm is a finite sequence of unambiguous instructions. It takes specific inputs and produces a definite output.")

tp("Properties of Effective Algorithms")
<p>Every valid algorithm must satisfy five fundamental criteria (Karl Beecher, Chapter 2):</p>
<ul>
  <li><b>Input:</b> It receives zero or more well-defined inputs.</li>
  <li><b>Output:</b> It produces at least one well-defined output.</li>
  <li><b>Definiteness:</b> Each step must be clear and unambiguous.</li>
  <li><b>Finiteness:</b> The algorithm must terminate after a finite number of steps for all valid inputs.</li>
  <li><b>Effectiveness:</b> Every operation must be basic enough to execute exactly in finite time.</li>
</ul>

tp("Flowchart Conventions")
<p>Flowcharts represent the control flow visually using standardized geometric symbols:</p>
<ul>
  <li><b>Oval (Terminal):</b> Marks the START or END of the algorithm.</li>
  <li><b>Parallelogram (Input/Output):</b> Represents reading input data or printing results.</li>
  <li><b>Rectangle (Process):</b> Represents arithmetic calculations or variable assignments.</li>
  <li><b>Diamond (Decision):</b> Represents conditional tests (Yes/No or True/False) that branch the path.</li>
  <li><b>Arrow (Flow line):</b> Shows the direction of sequential execution.</li>
</ul>

tp("Core Syllabus Algorithms with Complete Python Code")

<p><b>1. Sum of Two Numbers:</b></p>
ex(r'''# Algorithm: Sum of two numbers
# Input: numbers a and b
# Output: sum s = a + b
def compute_sum(a, b):
    s = a + b
    return s

val1, val2 = 12.5, 7.3
print(f"Sum of {val1} and {val2} = {compute_sum(val1, val2)}")
''', {title: "Algorithm 1 · Sum of Two Numbers"})

<p><b>2. Factorial Calculation:</b></p>
ex(r'''# Algorithm: Factorial calculation
# Input: non-negative integer n
# Output: n! = n * (n-1) * ... * 1, with 0! = 1
def factorial(n):
    if n < 0:
        raise ValueError("Factorial is not defined for negative integers.")
    fact = 1
    for i in range(1, n + 1):
        fact *= i
    return fact

for num in [0, 1, 5, 7]:
    print(f"{num}! = {factorial(num)}")
''', {title: "Algorithm 2 · Factorial Calculation"})

<p><b>3. Bubble Sort Algorithm:</b></p>
ex(r'''# Algorithm: Bubble Sort
# Input: unsorted numerical list
# Output: sorted list in ascending order
def bubble_sort(arr):
    a = arr.copy()
    n = len(a)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j] # Swap adjacent items
                swapped = True
        if not swapped:
            break # Optimized: list is already sorted
    return a

data = [64, 34, 25, 12, 22, 11, 90]
print("Unsorted data:", data)
print("Sorted data:  ", bubble_sort(data))
''', {title: "Algorithm 3 · Bubble Sort"})

<p><b>4. Fibonacci Sequence Generation:</b></p>
ex(r'''# Algorithm: Fibonacci sequence generation
# Input: integer N >= 1
# Output: first N terms of Fibonacci sequence: F_0=0, F_1=1, F_n = F_{n-1} + F_{n-2}
def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    
    fib = [0, 1]
    while len(fib) < n:
        fib.append(fib[-1] + fib[-2])
    return fib

print("First 10 Fibonacci terms:", fibonacci(10))
''', {title: "Algorithm 4 · Fibonacci Sequence"})

<p><b>5. Euclidean Algorithm for Greatest Common Divisor (GCD):</b></p>
ex(r'''# Algorithm: Euclidean algorithm for GCD
# Input: positive integers a and b
# Output: gcd(a, b)
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

print("GCD(48, 18) =", gcd(48, 18))
print("GCD(101, 10) =", gcd(101, 10))
''', {title: "Algorithm 5 · Euclidean GCD"})

tp("Algorithmic Complexity & Loop Analysis")
<p>The textbook analyzes the performance characteristics of algorithms:</p>
<ul>
  <li><b>Bubble Sort Complexity:</b> For an unsorted array of $n$ elements, the algorithm requires $n - 1$ passes. In the worst case (reverse order), the number of pairwise comparisons is $(n - 1) + (n - 2) + \dots + 1 = \frac{n(n - 1)}{2} = \mathcal{O}(n^2)$.</li>
  <li><b>Fibonacci Series Generation:</b> The iterative algorithm maintains two rolling state variables $A$ and $B$, achieving linear time complexity $\mathcal{O}(n)$ and constant space complexity $\mathcal{O}(1)$.</li>
  <li><b>Euclidean GCD Algorithm:</b> By replacing the pair $(a, b)$ with $(b, a \bmod b)$, the size of the numbers decreases by at least a factor of two every two iterations, yielding logarithmic time complexity $\mathcal{O}(\log(\min(a, b)))$.</li>
</ul>
"""
        }
    ]
