import './DD.css';
// export default function Heading({ color = "olive", text, fontSize }) {
//   return <h1 style={{ color: color, fontSize: fontSize }}>{text}</h1>;
// }

export default function Heading({
  color = 'black',
  text = 'No Header',
  fontSize = 'big',
}) {
  return <h1 style={{ color: color, fontSize: fontSize }}>{text}</h1>;
}
