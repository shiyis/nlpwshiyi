# To Continue Our Discussion on Modeling Random Processes

In the previous section, we have talked about how a HMM network could be constructed to model spectral features (in acoustic modeling) and also to elicit POS (part-of-speech) tagging in sequence labeling. These are accomplished through the forward algorithm. And to find the optimal sequence in either scenarios, the backward algorithm or the viterbi algorithm is applied.

Breaking down what the backward algorithm entails, below is a brief overview:

1. **Backward Probabilities:**
   The backward algorithm computes a set of probabilities, often denoted as $\beta$ values. These probabilities represent the likelihood of observing the remaining part of the sequence, given that the system is in a particular state at a specific time.
2. **Calculation Process:**
   Similar to the forward algorithm, the backward algorithm is computed recursively. It starts from the last observation in the sequence and moves backward in time, updating probabilities for each state. The final result is a set of probabilities representing the likelihood of observing the remaining part of the sequence from each state at each time.
3. **Application in HMMs:**
   The backward probabilities are used in various applications, including:
   * **Likelihood Calculation:** The backward algorithm is crucial for cal culating the likelihood of the observed sequence, which is essential for training HMMs using methods like the Expectation-Maximization (EM) algorithm.
   * **Decoding and Inference:** The backward probabilities, combined with the forward probabilities, are used to perform tasks like sequence decoding and finding the most likely state sequence given the observed sequence. This is commonly known as the Viterbi algorithm.
4. **Relationship with Forward Algorithm:**
   The forward and backward algorithms are related through their combination in the context of HMMs. The forward and backward probabilities are used together to compute the posterior probabilities of being in a particular state at a specific time given the observed sequence. This information is crucial for various tasks, including parameter estimation and decoding.

In summary, the backward algorithm in HMMs calculates probabilities representing the likelihood of observing the rest of the sequence given the system's state at a specific time. Together with the forward algorithm, it plays a key role in various aspects of HMMs, including training, decoding, and inference.

###### A Graphic Demonstration of How Viterbi is Applied in Sentence Segmentation

![img](../extras/hmm/viterbi.jpg)
