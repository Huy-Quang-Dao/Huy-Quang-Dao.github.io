---
layout: page
title: Aggressive standing-up
description: Submitted to Humanoids. Optimized get-up maneuvers for humanoids on diverse terrain.
img: assets/img/standing-up-card.jpg
importance: 1
category: research
---

**Robust and Optimized Aggressive Standing-Up Maneuvers for Humanoid Robots across Diverse Terrains.** Submitted to the IEEE-RAS International Conference on Humanoid Robots (Humanoids). Not yet published.

Equal contribution: Chuong Nguyen, Quang Huy Dao, and Loc Pham, with Truong Nguyen and Quan Nguyen. Affiliations: VinMotion, VinUniversity, and the University of Southern California.

{% include video.liquid path="assets/video/standing-up-humanoids.mp4" class="img-fluid rounded z-depth-1" controls=true %}

A full-size humanoid that falls on anything other than a lab floor still has to stand up. This paper optimizes contact timing and a whole-body trajectory for aggressive get-up maneuvers, including martial-arts-style kip-ups, then tracks that plan with a learned controller.

The video walks through the pipeline. Stage one takes an initial pose, a final pose, and a contact schedule, and optimizes timing and the trajectory. A real-time loop interpolates the reference and tracks it with joint-space PD control at 500 Hz. We compare that learned tracker with trajectory optimization paired with linear model predictive control and with nonlinear model predictive control, from both supine and prone starts. Hardware and simulation clips cover grass, scattered debris, and other uneven surfaces.

The title on the opening frame of the video is an earlier wording (*Optimized and Robust Martial-Arts-Inspired Standing-Up Maneuvers for Full-Sized Humanoid Robots*). The submitted title is the one at the top of this page.
