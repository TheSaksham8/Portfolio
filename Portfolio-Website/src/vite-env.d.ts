/// <reference types="vite/client" />

/**
 * gsap-trial ships SplitText as JS only (no .d.ts). Ambient types for CI / Vercel `tsc -b`.
 */
declare module 'gsap-trial/SplitText' {
  import type { TweenTarget } from 'gsap';

  export class SplitText {
    constructor(target: TweenTarget, vars?: Record<string, unknown>);
    /** Split targets — typed as TweenTarget so they work with gsap.fromTo / timelines */
    chars: TweenTarget;
    words: TweenTarget;
    lines: TweenTarget;
    revert(): void;
  }
}
