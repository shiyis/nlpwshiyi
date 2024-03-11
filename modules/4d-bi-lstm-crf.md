## Making Dynamic Decisions with Sequence to Sequence Language Processing Tasks

Pytorch is a dynamic neural network kit. Another example of a dynamic kit is Dynet (I mention this because working with Pytorch and Dynet is similar. If you see an example in Dynet, it will probably help you implement it in Pytorch). The opposite is the static tool kit, which includes Theano, Keras, TensorFlow, etc. The core difference is the following:

In a static toolkit, you define a computation graph once, compile it, and then stream instances to it.

In a dynamic toolkit, you define a computation graph for each instance. It is never compiled and is executed on-the-fly

Without a lot of experience, it is difficult to appreciate the difference. One example is to suppose we want to build a deep constituent parser. Suppose our model involves roughly the following steps:

We build the tree bottom up

Tag the root nodes (the words of the sentence)

From there, use a neural network and the embeddings of the words to find combinations that form constituents. Whenever you form a new constituent, use some sort of technique to get an embedding of the constituent. In this case, our network architecture will depend completely on the input sentence. In the sentence “The green cat scratched the wall”, at some point in the model, we will want to combine the span 
 $(i,j,r) = (1,3,NP)$ (that is, an NP constituent spans word 1 to word 3, in this case “The green cat”).

However, another sentence might be “Somewhere, the big fat cat scratched the wall”. In this sentence, we will want to form the constituent 
(
2
,
4
,
$
$
)
(2,4,NP) at some point. The constituents we will want to form will depend on the instance. If we just compile the computation graph once, as in a static toolkit, it will be exceptionally difficult or impossible to program this logic. In a dynamic toolkit though, there isn’t just 1 pre-defined computation graph. There can be a new computation graph for each instance, so this problem goes away.

Dynamic toolkits also have the advantage of being easier to debug and the code more closely resembling the host language (by that I mean that Pytorch and Dynet look more like actual Python code than Keras or Theano).

Bi-LSTM Conditional Random Field Discussion
For this section, we will see a full, complicated example of a Bi-LSTM Conditional Random Field for named-entity recognition. The LSTM tagger above is typically sufficient for part-of-speech tagging, but a sequence model like the CRF is really essential for strong performance on NER. Familiarity with CRF’s is assumed. Although this name sounds scary, all the model is a CRF but where an LSTM provides the features. This is an advanced model though, far more complicated than any earlier model in this tutorial. If you want to skip it, that is fine. To see if you’re ready, see if you can:

Write the recurrence for the viterbi variable at step i for tag k.

Modify the above recurrence to compute the forward variables instead.

Modify again the above recurrence to compute the forward variables in log-space (hint: log-sum-exp)

If you can do those three things, you should be able to understand the code below. Recall that the CRF computes a conditional probability. Let 
$y$ be a tag sequence and 
$x$ an input sequence of words. Then we compute

The image contains mathematical equations and explanations related to a Conditional Random Field (CRF) model used in conjunction with a Bi-LSTM neural network for sequence tagging tasks. Here are the equations presented in LaTeX:

1. The conditional probability of a tag sequence $y$ given an input sequence $x$ is computed as:
$$ P(y|x) = \frac{\exp(\text{Score}(x, y))}{\sum_{y'} \exp(\text{Score}(x, y'))} $$

2. The score of a sequence is the sum of log potentials $\psi_i(x, y)$:
$$ \text{Score}(x, y) = \sum_{i} \log \psi_i(x, y) $$

3. The score is further detailed for a Bi-LSTM CRF model, considering emission and transition potentials:
$$ \text{Score}(x, y) = \sum_{i} \log \psi_{\text{EMIT}}(y_i \rightarrow x_i) + \log \psi_{\text{TRANS}}(y_{i-1} \rightarrow y_i) $$

4. The score is then expressed in terms of the hidden state $h_i$ of the Bi-LSTM and the transition scores $P_{y_i,y_{i-1}}$:
$$ \text{Score}(x, y) = \sum_{i} h_i[y_i] + P_{y_i,y_{i-1}} $$

The text also mentions that the potentials must only look at local features to make the partition function tractable and that the transition scores are stored in a matrix $P$, where $P_{j,k}$ is the score of transitioning to tag $j$ from tag $k$.