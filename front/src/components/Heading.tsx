
interface B {
  label : string
}

export function Heading ({label} : B) {
return (
  <>
  <div className="font-bold text-3xl pt-6 text-center">
    {label}
  </div>
  </>
)
}

// export function Heading({label}) {
//     return <div className="font-bold text-4xl pt-6">
//       {label}
//     </div>
// }