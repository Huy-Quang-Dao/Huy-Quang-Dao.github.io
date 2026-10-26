---
layout: page
title: CitoMimic
description: Trajectory optimization with RL motion tracking on the Unitree G1.
video: assets/video/citomimic-cover.mp4
importance: 1
category: lab
---

Trajectory optimization with a motion-tracking policy, on the Unitree G1.

<style>
  .cito-videos { display: flex; gap: 0.75rem; align-items: flex-start; }
  .cito-videos figure { margin: 0; min-width: 0; }
  .cito-videos video { width: 100%; height: auto; display: block; }
  .cito-videos figcaption { text-align: center; font-size: 0.875rem; margin-top: 0.25rem; }
  /* flex-grow follows each clip's aspect ratio so both play at the same height */
  .cito-sim { flex: 1.998 1 0; }
  .cito-real { flex: 0.5625 1 0; }
  @media (max-width: 576px) {
    .cito-videos { flex-direction: column; align-items: center; }
    .cito-sim { flex: none; width: 100%; }
    .cito-real { flex: none; width: 60%; }
  }
</style>

<div class="cito-videos">
  <figure class="cito-sim">
    <video src="{{ '/assets/video/citomimic-cover.mp4' | relative_url }}" class="rounded z-depth-1" autoplay muted loop playsinline></video>
    <figcaption>Simulation</figcaption>
  </figure>
  <figure class="cito-real">
    <video src="{{ '/assets/video/G1_kipup.mp4' | relative_url }}" class="rounded z-depth-1" autoplay muted loop playsinline></video>
    <figcaption>Real robot (Unitree G1 kip-up)</figcaption>
  </figure>
</div>
