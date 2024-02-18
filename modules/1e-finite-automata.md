# Finite State Machine and Automata

A finite automaton is the most basic machine capable of pattern recognition (FA). It is used to describe a Regular Language, just like in `/baa+!/`.

It is also used to recognize and evaluate Natural Language Expressions. There are five parts, or tuples, to the abstract machine called the finite automata or finite state machine. Its various states and the rules for transitioning between them are contingent upon the input symbol that is utilized.

Depending on the states and the regulations, the input string may be accepted or denied. It is essentially a model of an abstract digital computer that interprets an input string and adjusts its internal state based on the input symbol that is being received at that moment.

The following characteristics of automata in the aforementioned figure are

---

![finite_fig1](../extras/finite_automata/fig1.png)

---

Input
Output
States of automata
State relation
Output relation
A Finite Automata consists of the following:

```
Q : Finite set of states.       
Σ : set of Input Symbols.       
q : Initial state.       
F : set of Final States.       
δ : Transition Function.

```

Formal specification of machine is

```
{ Q, Σ, q, F, δ }

```

1. Deterministic Finite Automata (DFA):

```python
DFA consists of 5 tuples {Q, Σ, q, F, δ}.
Q : set of all states.
Σ : set of input symbols. ( Symbols which machine takes as input )
q : Initial state. ( Starting state of a machine )
F : set of final state.
δ : Transition Function, defined as δ : Q X Σ --> Q.

```

In a DFA, the machine only enters one state for a specific input character. For every input symbol, a transition function is defined for each state. Additionally, DFA does not support null (or) moves, meaning that it cannot change its state without an input character.

```python
Create a DFA that, for instance, only accepts strings that end in 'a'.

    Assumed: Σ = {a,b}, q = {q0}, F={q1}, Q = {q0, q1}

If you want to create a state transition diagram that is accurate, you should first take into account a language set of all the potential acceptable strings.

    L = {a, a, a, a, a, aa, aaa, aaaa, ba, bba, bbbaa, aba, abba, aaba, abaa}

The list above is just a small portion of all possible acceptable strings; there are many other strings that contain the letters "a" and "b".
```

See below figure:
    As you can see in the transition function is for any input including null (or ?), NFA can go to any state number of states. For example, below is an NFA for the above problem.

| State / Symbol | a             | b       |
| :------------- | :------------ | :------ |
| $q_0$        | ${q_0,q_1}$ | $q_0$ |
| $q_1$        | ?             | ?       |

---

![finite_fig2](../extras/finite_automata/fig2.png)

---

One important thing to note is, in NFA, if any path for an input string leads to a final state, then the input string is accepted. For example, in the above NFA, there are multiple paths for the input string `“00”`. Since one of the paths leads to a final state, `“00”` is accepted by the above NFA.

Some Important Points:

- Justification:

Since all the tuples in DFA and NFA are the same except for one of the tuples, which is Transition Function (?)

```
In case of DFA
? : Q X ? --> Q
In case of NFA
? : Q X ? --> $2^Q$  
```

ℹ️ Now if you observe you’ll find out `Q X ? –> Q` is part of `Q X ? –> 2 ^ Q`.

On the RHS side, Q is the subset of $2^Q$ which indicates Q is contained in $2^Q$ or Q is a part of $2^Q$, however, the reverse isn’t true. So mathematically, we can conclude that every DFA is NFA but not vice-versa. Yet there is a way to convert an NFA to DFA, so there exists an equivalent DFA for every NFA.

- Both NFA and DFA have the same power and each NFA can be translated into a DFA.
- There can be multiple final states in both DFA and NFA.
- NFA is more of a theoretical concept.
- DFA is used in Lexical Analysis in Compiler.
- If the number of states in the NFA is N then, its DFA can have maximum $2^N$ number of states.
