import { CompanionBones, Species, Hat } from "./types.js";

const BODIES: Record<Species, string[][]> = {
  cat: [
    [
      '            ',
      '   /\\_/\\    ',
      '  ( {E}   {E})  ',
      '  (  ω  )   ',
      '  (")_(")   ',
    ],
    [
      '            ',
      '   /\\-/\\    ',
      '  ( {E}   {E})  ',
      '  (  ω  )   ',
      '  (")_(")~  ',
    ],
  ],
  dragon: [
    [
      '            ',
      '  /^\\  /^\\  ',
      ' <  {E}  {E}  > ',
      ' (   ~~   ) ',
      '  `-vvvv-´  ',
    ],
    [
      '   ~    ~   ',
      '  /^\\  /^\\  ',
      ' <  {E}  {E}  > ',
      ' (   ~~   ) ',
      '  `-vvvv-´  ',
    ],
  ],
  duck: [
    [
      '            ',
      '    __      ',
      '  <({E} )___  ',
      '   (  ._>   ',
      '    `--´    ',
    ],
    [
      '            ',
      '    __      ',
      '  <({E} )___  ',
      '   (  ._>   ',
      '    `--´~   ',
    ]
  ],
  ghost: [
    [
      '            ',
      '   .----.   ',
      '  / {E}  {E} \\  ',
      '  |      |  ',
      '  ~`~``~`~  ',
    ],
    [
      '    ~  ~    ',
      '   .----.   ',
      '  / {E}  {E} \\  ',
      '  |      |  ',
      '  ~~`~~`~~  ',
    ]
  ],
  robot: [
    [
      '            ',
      '   .[||].   ',
      '  [ {E}  {E} ]  ',
      '  [ ==== ]  ',
      '  `------´  ',
    ],
    [
      '     *      ',
      '   .[||].   ',
      '  [ -==- ]  ',
      '  `------´  ',
    ]
  ]
};

const HAT_LINES: Record<Hat, string> = {
  none: '',
  crown: '   \\^^^/    ',
  beanie: '   (___)    ',
  wizard: '    /^\\     ',
  propeller: '    -+-     ',
};

export function renderSprite(bones: CompanionBones, frame = 0): string[] {
  const frames = BODIES[bones.species];
  const activeFrame = frames[frame % frames.length];
  
  if (!activeFrame) return [];

  const body = activeFrame.map((line) => line.replaceAll('{E}', bones.eye));
  const lines = [...body];
  
  if (bones.hat !== 'none') {
    lines[0] = HAT_LINES[bones.hat];
  }
  
  return lines;
}
