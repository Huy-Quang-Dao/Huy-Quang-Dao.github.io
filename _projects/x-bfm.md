---
layout: page
title: X-BFM
description: Submitted to ICRA. A behavioral foundation model for extreme humanoid control.
img: assets/img/xbfm-card.jpg
importance: 2
category: research
---

**X-BFM: a Behavioral Foundation Model for Extreme Humanoid Control via World-Model Conditioning and Decoupled Recovery Priors.** Submitted to the IEEE International Conference on Robotics and Automation (ICRA). Not yet published.

{% include video.liquid path="assets/video/xbfm-icra.mp4" class="img-fluid rounded z-depth-1" controls=true %}

Extreme skills and ordinary recovery are usually trained as separate policies. X-BFM treats them as one behavioral model. A world-model conditioner and decoupled recovery priors let the same system teleoperate, commit to a dynamic move such as a flip, and stand back up when the landing or a push goes wrong.

The video is organized around four behaviors:

- **Teleoperation**, including walking through a workspace with a person
- **Flips** on a short patch of turf
- **Natural recovery** after a loss of balance
- **Recovery under perturbations**, when contact happens while the robot is already trying to get up

The full author list will be added here when the manuscript is public. I am an author on the submission.
