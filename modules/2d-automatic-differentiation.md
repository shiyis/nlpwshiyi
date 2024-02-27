@def sequence = ["automatic-diff"]

# Automatic differentiation: What Is It and Why Do We Need It? 

**Table of Contents**

\toc

Automatic differentiation (AD) is a crucial technique in the field of machine learning for optimizing models through the training process. Here are some reasons why automatic differentiation is essential in this context:

> **Efficient Gradient Computation**: 
> Autodiff allows you to compute gradients efficiently without manually deriving and implementing them.

Sample python code: 

```python
import tensorflow as tf

x = tf.constant(2.0)

with tf.GradientTape() as tape:
    y = x**2

dy_dx = tape.gradient(y, x)
print(dy_dx.numpy())  # Output: 4.0

```

---


> **Higher-order Gradients**: Autodiff can easily compute higher-order derivatives without much additional effort.

Sample python code: 

```
import tensorflow as tf

x = tf.constant(2.0)

with tf.GradientTape() as tape1:
    with tf.GradientTape() as tape2:
        y = x**3
    dy_dx = tape2.gradient(y, x)

d2y_dx2 = tape1.gradient(dy_dx, x)
print(d2y_dx2.numpy())  # Output: 12.0

```

---

> **Optimization with Gradient Descent**: Autodiff facilitates gradient-based optimization algorithms like gradient descent.

Sample python code:

```
import tensorflow as tf

x = tf.Variable(3.0, trainable=True)
y = x**2

optimizer = tf.optimizers.SGD(learning_rate=0.1)

for _ in range(100):
    with tf.GradientTape() as tape:
        y = x**2
    gradients = tape.gradient(y, x)
    optimizer.apply_gradients([(gradients, x)])

print(x.numpy())  # Output: close to 0.0 (minimum of y=x^2)

```

---

> **Neural Network Training**: Autodiff is essential for training neural networks efficiently by computing gradients for the backpropagation algorithm.

Sample python code:

```
import tensorflow as tf

# Define a simple neural network
model = tf.keras.Sequential([
        tf.keras.layers.Dense(10, activation='relu', input_shape=(5,)),
        tf.keras.layers.Dense(1)])

# Define a sample dataset
data = tf.constant(tf.random.normal((100, 5)))
labels = tf.constant(tf.random.normal((100, 1)))

# Training loop
optimizer = tf.optimizers.Adam(learning_rate=0.01)

for epoch in range(100):
    with tf.GradientTape() as tape:
        predictions = model(data)
        loss = tf.losses.mean_squared_error(labels, predictions)

    gradients = tape.gradient(loss, model.trainable_variables)
    optimizer.apply_gradients(zip(gradients, model.trainable_variables))

# Model is now trained

```

---

Below attached is a video of one of the lessons from the CMU deep learning classes cmu10714 I find really helpful and useful. It's one of the steps of a simple implementation of a ML Module called NEEDLE, and in this video the important gists of automatic differentiation is covered. 




## Technicalities of Automatic Differentiation

{{youtube_placeholder automatic-diff}}
{{yt_tsp 0 0 Introduction}}
{{yt_tsp 222 0 The NEEDLE Module}}
{{yt_tsp 649 0 Codebase and Data Structures}}
{{yt_tsp 860 0 Computational Graph}}
{{yt_tsp 1779 0 Executing The Computation}}
{{yt_tsp 2758 0 Scenarios Where Things Might Go Amok}}
{{yt_tsp 3137 0 Reverse Mode Auto Diff}}


