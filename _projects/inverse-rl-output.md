---
layout: page
title: Inverse RL via output feedback
description: Preprint. Model-based and off-policy inverse RL for zero-sum games from output data.
img: assets/img/irl/output.png
importance: 3
category: preprint
---

**Model-Based and Off-Policy Data-Driven Inverse Reinforcement Learning for Linear Discrete-Time Two-Player Zero-Sum Games via Output Feedback.** Preprint.

Quang Huy Dao, Quoc Dat Lai, and Phuong Nam Dao.

The learner imitates an expert zero-sum policy from output feedback, first with a model and then from input-output-disturbance data alone. The plots below are temporary result figures.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/irl/output.png" class="img-fluid rounded z-depth-1" caption="Output: expert and learner." %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/irl/equivalence.png" class="img-fluid rounded z-depth-1" caption="Equivalence of the recovered solution." %}
  </div>
</div>
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/irl/attenuation.png" class="img-fluid rounded z-depth-1" caption="Disturbance attenuation." %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/irl/solution.png" class="img-fluid rounded z-depth-1" caption="Recovered solution." %}
  </div>
</div>
