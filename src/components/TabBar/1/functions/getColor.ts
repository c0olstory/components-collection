export default function getColor(colors:any, color:string, variant:number) {
  return colors.value[color][variant].value;
}