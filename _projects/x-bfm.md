---
layout: page
title: X-BFM
description: Under review at ICRA. A behavioral foundation model for extreme humanoid control.
img: assets/img/xbfm-card.jpg
importance: 2
category: research
---

**X-BFM: a Behavioral Foundation Model for Extreme Humanoid Control via World-Model Conditioning and Decoupled Recovery Priors.** Under review at the IEEE International Conference on Robotics and Automation (ICRA).

Dai-Nhan Duong, Huy Dao, Khoa Vu, Hieu Luong, Thuong Tran, An Le, Tuyen P. Le, Vu Dao, Truong Nguyen, and Quan Nguyen.

{% include video.liquid path="assets/video/xbfm-intro.mp4" class="img-fluid rounded z-depth-1" controls=true caption="Opening 10 seconds." %}

Extreme skills and ordinary recovery are usually trained as separate policies. X-BFM treats them as one behavioral model. A world-model conditioner and decoupled recovery priors let the same system teleoperate, commit to a dynamic move such as a flip, and stand back up when the landing or a push goes wrong.

The video is organized around four behaviors:

- **Teleoperation**, including walking through a workspace with a person
- **Flips** on a short patch of turf
- **Natural recovery** after a loss of balance
- **Recovery under perturbations**, when contact happens while the robot is already trying to get up

