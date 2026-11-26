---
layout: post
title: "InstantTrack, one month in: 35 repos and 4 papers"
date: 2026-11-26 10:00:00+0700
description: From 15 minutes to under 3 in six releases, a fork that came back, and the projects that build on InstantTrack.
tags: instanttrack motion-tracking open-source
categories: projects
featured: true
toc:
  sidebar: left
---

On 29 October I released [InstantTrack](https://github.com/Huy-Quang-Dao/instantTrack): one whole-body motion-tracking policy for all 40 LAFAN1 clips (2.45 h of motion) on the Unitree G1, trained on one RTX 5090 in 15 minutes. Four weeks later it trains in under 3 minutes, and other people have built on it in ways I did not plan for. This post records both.

{% include video.liquid path="assets/video/instanttrack.mp4" class="img-fluid rounded z-depth-1" autoplay=true loop=true muted=true caption="Same 6 minutes of training on fallAndGetUp2_subject3: SuperMimic + EMA, InstantTrack v1.1, and InstantTrack v1.2. Faint blue ghost: reference motion." %}

## From 15 minutes to under 3

Every release is measured the same way: train until the deployed policy reaches a normalized return of 0.82 with 0 of 40 clips failed, and holds it for three checkpoints in a row. The baseline is SuperMimic with a policy EMA on the same machine, simulator, MDP and evaluator, which takes 0.55 h.

| Release | Date | Time to target | vs SuperMimic + EMA | What changed |
| :-- | :-- | --: | --: | :-- |
| v1.0 | 29&nbsp;Oct | 15&nbsp;min | 2.2× | SuperMimic-style world model with an InstantMimic-style GPU training loop |
| v1.1 | 30&nbsp;Oct | 11.4&nbsp;min | 2.8× | The policy outputs a correction to the reference pose |
| v1.2 | 1&nbsp;Nov | 7.2&nbsp;min | 4.7× | Muon for the hidden weight matrices, CUDA-graph captured updates, one goal-encoder pass per rollout |
| v1.3 | 4&nbsp;Nov | ≤&nbsp;3&nbsp;min | ≥ 10.9× | BlinkMimic's changes merged back: structured world model, mirror augmentation, evaluation-guided resets, overlapped CUDA streams |
| v1.4 | 7&nbsp;Nov | 2.74&nbsp;min | | Overlapped critic update, 11.87 it/s (from 10.28) |
| v1.4.1 | 23&nbsp;Nov | | | `CITATION.cff` and a Zenodo DOI |

From v1.3 on, checkpoints are evaluated every 100 iterations instead of every 1.5 to 3 minutes, so the times are finer than the old schedule could show. The v1.4 figure is the mean of 15 seeds (range 2.21–3.61 min). The [changelog](https://github.com/Huy-Quang-Dao/instantTrack/blob/main/CHANGELOG.md) has every run, including the changes that did not help.

## A fork that came back

The biggest single step, v1.2 to v1.3, did not come from me. Fuyi Chen forked InstantTrack v1.2, made it faster and released it as [BlinkMimic](https://github.com/fuyichen0725/blinkmimic). Because both projects are MIT-licensed, I could merge those changes back into InstantTrack v1.3 with credit, and then build v1.4 on top. BlinkMimic was in turn rebuilt in JAX as [XMimic](https://github.com/nico-bohlinger/xmimic), which trains the same task in under a minute on four H100s.

That loop is the main reason I keep the code open and every run logged: someone else can pick up a result, check it, and push it further than I would alone.

## Who builds on InstantTrack

Below are the papers that cite InstantTrack and the public repositories I found that build on its code, carry its training recipe to new robots, run it as a backend or baseline, or teach it.

{% include instanttrack_users.liquid %}

## What's next

Next up is **InstantGMT**: the same training ideas applied to general motion tracking for humanoid teleoperation.

If you use InstantTrack, please cite it:

```bibtex
@misc{instanttrack2026,
  title   = {InstantTrack: Whole-Body Motion Tracking for the Unitree G1 in Minutes on One GPU},
  author  = {Dao, Huy Quang},
  year    = {2026},
  version = {1.4.1},
  doi     = {10.5281/zenodo.24461144},
  url     = {https://github.com/Huy-Quang-Dao/instantTrack}
}
```
