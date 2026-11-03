---
layout: page
title: InstantTrack
description: Whole-body motion tracking for the Unitree G1 in about 7 minutes on one GPU. Open source.
video: assets/video/instanttrack.mp4
importance: 0
category: lab
github: https://github.com/Huy-Quang-Dao/instantTrack
github_stars: Huy-Quang-Dao/instantTrack
---

[**InstantTrack**](https://github.com/Huy-Quang-Dao/instantTrack) trains a single motion-tracking policy for all 40 LAFAN1 clips (2.45 h of motion) on the Unitree G1 in about 7 minutes on one RTX 5090, with no failed clips. That is 4.7× faster than SuperMimic with a policy EMA, on the same machine, simulator, MDP, and evaluator.

<p>
  <a href="https://github.com/Huy-Quang-Dao/instantTrack"><i class="fa-brands fa-github"></i> Code</a>
  <span data-github-stars="Huy-Quang-Dao/instantTrack" hidden>&nbsp;·&nbsp; <i class="fa-solid fa-star"></i> <span class="stars-count"></span> stars</span>
  &nbsp;·&nbsp;
  <a href="https://huy-quang-dao.github.io/instantTrack/">Project page</a>
</p>

{% include video.liquid path="assets/video/instanttrack.mp4" class="img-fluid rounded z-depth-1" autoplay=true loop=true muted=true caption="Same 6 minutes of training on fallAndGetUp2_subject3: SuperMimic + EMA, InstantTrack v1.1, and InstantTrack v1.2. Faint blue ghost: reference motion." %}

It builds on SuperMimic (one differentiable world model, backpropagation through imagined rollouts) and adds InstantMimic-style GPU work on the training loop, Muon for the hidden weight matrices, CUDA-graph captured updates, and a contact reward. It runs on [mjlab](https://github.com/mujocolab/mjlab) / MuJoCo Warp.

Next up is **InstantGMT**: the same training ideas applied to general motion tracking for humanoid teleoperation.
