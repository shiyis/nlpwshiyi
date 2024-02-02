# What Are Markov Processes? A Simple Introduction

In this blog, the generalities of Markov Processes will be introduced. The foundation of Markov Processes dewells on the idea that there are states and events. The future behavior of the system depends only on its current state and not on the sequence of events that preceded it. This property is often referred to as the memoryless property.

The key components of markov processes are listed below,

---

@@colbox-blue

##### What Are Markov Processes Consist of?

1. **States:**

   A system can exist in different states, representing distinct configurations or conditions. Denoted by symbols, numbers, or labels.
2. **Transition Probabilities:**

   Markov processes are characterized by transition probabilities, which determine the likelihood of moving from one state to another in the next time step.

   These probabilities are often organized into a transition probability matrix.
3. **Transition Probability Matrix:**

   A square matrix where each element represents the probability of transitioning from one state to another.

   Rows correspond to the current state, and columns correspond to the next state.
4. **Markov Property:**

   The key feature of Markov processes is the Markov property, stating that the future evolution of the system depends only on its current state and is independent of how the system reached its current state.
5. **Homogeneity:**

   Markov processes are often assumed to be homogeneous, meaning that transition probabilities do not change over time. The system's dynamics are consistent throughout.
6. **Continuous and Discrete Time:**

   Markov processes can be classified into continuous-time and discrete-time processes based on whether the state transitions occur at every instant or at discrete time intervals.
7. **Stationary Distribution:**

   In a steady state, the system may reach a stationary distribution, where the probabilities of being in each state remain constant over time.
8. **Absorbing and Transient States:**

   Some states may be absorbing, meaning that once entered, the system stays in that state permanently.
   Transient states are those from which the system may leave and not return.
9. **Applications:**

   Markov processes find applications in various fields, including physics, economics, biology, and computer science, for modeling dynamic systems with probabilistic transitions.
10. **Markov Chain:**

    A specific type of Markov process where the state space is discrete and the time parameter takes on discrete values.


@@

---

##### How Are Markov Processes Applicable Theoretically?

Markov Processes are powerful statistical framework and ideas that could be applied in many different theoretical contexts. The most fundamental would be an investigation of these processes and measures in a mathematical analysis, such as how a limit is met (convergence or stability) while time approaches infinity. This is called the **limit theorem**.

ℹ️ What are limit theorems and how are they related to stability and convergence?

The theorem describes the distribution of the sum(or average) of a large number of independent, identically distributed random variables. For Markov processes, understanding how the process converges to a particular distribution over time is crucial.

The limit theorem states in the context of Markov processes, the law of large numbers where as the number of trials (or time steps in the case of a Markov process) increases, the average behavior of the process converges to the expected value. In the long run, the observed behavior becomes more predictable.

More on stability and convergence; _the behavior of a Markov process as time approaches infinity is often characterized by stability and convergence properties_. These properties help in understanding the long-term dynamics and equilibrium states of the process.


##### How Are Markov Processes Applicable in The Context of NLP?

To thoroughly explain this, we have to bring up the HMM or in full the hidden Markov Model here. It's the same probabilistic technique that branches out from the Markov processes that in particular is applied in the field of language processing.

In a different section (or [here](/modules/5a-finite-automata.md)), we have touched on the finite state automata and transducers. To recap, they are processes and states that could capture the nature of a regular language (or displays the properties of a regular grammar). On top of that, there's the **weighted finite-state automata**, which because of its nature of having states and transitions could be monitored as a Markov model with probabilities assigned to each state.

In signal processing, sound waves could be sliced up into spectral features and then further made into vectors for further processing and modeling with a HMM network.

Below is a graph demonstration of the workflow,

---

![](../extras/hmm/hmm.jpg)

---

If we take a look at HHM for the word _need_ and a sample observation sequence. Note the differences from the figure above, the observation sequences are now vectors of spectral features representing the speech signal. Next, note that we've also allowed one state to generate multiple copies of the same observation, by having a loop on the state. This loop allows HMMs to model the variable duration of phones; longer phones require more loops through the HMM.

In summary, here are the parameters that define an HMM:

- **states**: a set of states $Q = q_{1}q_{2}q_{3}$
- **transition probabilities**: a set of probabilities $A = a_{01}a_{02}...a_{n1}...a_{nn}$. Each $a_{ij}$ represents the probability of transitioning from state _i_ to state _j_. The set of these is the **transition probability matrix**.
- **observation likelihoods**: a set of observation likelihood $B=b_{i}(o_{t})$, each expressing the probability of an observation $o_{t}$ being generated from a state _i_.

In a separate blog, Viterbi algorithm will be visited to talk about how the algorithm helps track the best path in these states of an established automaton backed by weights (The forward path is established with an HMM network and the backward path finds the best path in the network with Viterbi or a dynamic programming algorithm).



##### How Are Markov Processes Applicable in Real Life?

There are many scenarios where Markov processes are applicable in real life due to their ability to model systems with probabilistic state transitions. With some digging, below are some practical applications of Markov processes in various fields.

Below are listed scenarios where they are applicable,

---

@@colbox-blue

**Modeling Stock Prices**: Markov processes are used to model the movement of stock prices, where each state represents a certain price level, and transitions occur based on market conditions.

**Economic Forecasting**: Markov models help in analyzing economic conditions by representing different states of the economy and the transitions between them.

**Disease Progression**: Markov models are employed to study the progression of diseases over time, helping healthcare professionals understand the likelihood of transitioning between different health states.

**Pharmacokinetics**: In pharmacology, Markov processes model the absorption, distribution, metabolism, and excretion of drugs within the human body.

**Network Protocols**: Markov processes are used to model communication protocols in computer networks, helping in the analysis of data transmission and error rates.

**Quality of Service**: Telecommunication systems use Markov models to assess and improve the quality of service by analyzing transitions between different states, such as signal strength or network congestion.

**Service Systems**: Markov processes model queueing systems, where the states represent the number of customers in a queue, and transitions correspond to the arrival or departure of customers.

**Call Centers**: Markov processes are applied to analyze call center dynamics, including the number of agents available, waiting times, and customer satisfaction.

**Climate Modeling**: Markov models are used in climate science to simulate transitions between different weather states and assess the likelihood of climate events.

**Ecosystem Dynamics**: Markov processes model transitions between ecological states, helping in the study of population dynamics and biodiversity changes.

**Customer Loyalty**: Markov models are applied to study customer behavior and loyalty, predicting transitions between different customer states, such as active, inactive, or loyal.

**Marketing Strategies**: Businesses use Markov processes to analyze the effectiveness of marketing strategies and understand how customer preferences evolve over time.

**Player Performance**: Markov models are used in sports analytics to model the transitions between different states of player performance during a game.

**Team Strategies**: Coaches and analysts use Markov processes to study the effectiveness of different team strategies and formations.

**Traffic Systems**: Markov processes model the transitions between different traffic flow states, helping in the analysis of congestion and traffic patterns.

**Public Transportation**: Markov models are applied to study the movement of vehicles or passengers in public transportation systems.

@@

---

In many cases, Markov processes reach a stationary or steady-state distribution as time  goes to infinity. In this state, the probabilities of being in each state no longer change with time. The stationary distribution provides insights into the long-term behavior of the system.

An ergodic Markov process is one for which, over a sufficiently long period, the system visits all states with a certain probability. This concept is important in understanding the long-term behavior of the process and is related to the idea of convergence.

All in all, the understanding of the Markov processes all comes down to equilibrium, homogeneity, stability, and predictability.
