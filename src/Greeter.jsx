// export default function Greeter({ person = "everyone", from = "anonymous" }) {
//   return (
//     <>
//       <h1>Hi there, {person}!!!</h1>
//       <h2>-{from}</h2>
//     </>
//   );
// }

export default function Greeter({ name, workplace }) {
  return (
    <>
      <div className="Greeter">
        <p>Hi there {name}!</p>
        <p>I hope you like working at {workplace}</p>
      </div>
    </>
  );
}
