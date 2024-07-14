// export default function ListPicker({ values }) {
//   const randIdx = Math.floor(Math.random() * values.length);
//   const randElement = values[randIdx];
//   return (
//     <div>
//       <p>The list of values: {values}</p>
//       <p>Random element is: {randElement}</p>
//     </div>
//   );
// }

export default function ListPicker({ values }) {
  const rndIdx = Math.floor(Math.random() * values.length);
  const rndElement = values[rndIdx];
  return (
    <>
      <p>Random value: {rndElement}</p>
      <p>The list of values: {values}</p>
    </>
  );
}
