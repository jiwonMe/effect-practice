import { Effect as _, Context } from "effect"
import { EF_SVGElement, EF_SVGElementType, EF_SVGAttributes } from "../core/types"
import { Environment } from "../environment/environment"
import type { Effect } from "effect/Effect"

// SVG Engine 서비스
export class SVGEngine extends Context.Tag("SVGEngine")<
SVGEngine, {
  createElement: (type: EF_SVGElementType, attributes: EF_SVGAttributes) => 
    Effect<EF_SVGElement, never, never>
  setAttributes: (attributes: EF_SVGAttributes) =>
    (element: EF_SVGElement) => 
      Effect<EF_SVGElement, never, never>
  appendChild: (child: EF_SVGElement) =>
    (parent: EF_SVGElement) =>
      Effect<EF_SVGElement, never, never>
  createGroup: () =>
    Effect<EF_SVGElement, never, never>
  createPath: (data: string) =>
    Effect<EF_SVGElement, never, never>
  applyTransform: (transform: string) =>
    (element: EF_SVGElement) =>
      Effect<EF_SVGElement, never, never>
  setStyle: (style: string) =>
    (element: EF_SVGElement) =>
      Effect<EF_SVGElement, never, never>
  addEventListener: (event: string, handler: () => void) =>
    (element: EF_SVGElement) =>
      Effect<void, never, never>
  render: (element: EF_SVGElement) =>
    Effect<string, never, never>
  importSVG: (svgString: string) =>
    Effect<EF_SVGElement, Error, Environment>
}>  () {}