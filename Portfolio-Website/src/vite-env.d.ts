/// <reference types="vite/client" />

/**
 * SplitText / ScrollSmoother are shipped as JS-only modules in some GSAP npm variants.
 * Ambient types so Vercel `tsc -b` doesn't fail on missing declaration files.
 */
declare module 'gsap/SplitText' {
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
