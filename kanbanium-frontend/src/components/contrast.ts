const RED = 0.2126;
const GREEN = 0.7152;
const BLUE = 0.0722;

const GAMMA = 2.4;
class Color {
    r: number = 0;
    g: number = 0;
    b: number = 0;
    constructor(r:number, g:number, b:number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    static from_hex(hex:string) {
        const r = Number("0x"+hex.slice(1,3));
        const g = Number("0x"+hex.slice(3,5));
        const b = Number("0x"+hex.slice(5,7));
        return new this(r,g,b);
    }
}
function luminance(r:number, g:number, b:number) {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928
      ? v / 12.92
      : Math.pow((v + 0.055) / 1.055, GAMMA);
  });
  return a[0] * RED + a[1] * GREEN + a[2] * BLUE;
}

function contrast(rgb1: Color, rgb2:Color) {
  const lum1 = luminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = luminance(rgb2.r, rgb2.g, rgb2.b);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}
export function checkContrast(bg: string, text:string): number {
    let bgColor = Color.from_hex(bg);
    let textColor = Color.from_hex(text);
    console.log(`${bg} is bg, ${text} is fg`)
    console.log(contrast(bgColor, textColor));
    return contrast(bgColor, textColor);
}

// note: minimal recommended contrast ratio is 4.5, or 3 for larger font-sizes
