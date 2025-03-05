// export default function Conditions() {
//     const display = false
//     if (display){
//         return(
//             <div>
//                 TRUE
//             </div>
//         )
//     }
//     else{
//         return(
//         <div>
//             FALSE
//         </div>
//         )
//     }
// }

// export default function Conditions() {
//     const display = false
//     let element = null
//     if(display){
//         return(
//             <div>
//                 <h2> {element} TRUE </h2>
//             </div>
//         )
//     }
//     else{
//         return(
//             <div>
//                 <h2> {element} FALSE </h2>
//             </div>
//         )
//     }
// }

export default function Conditions(){
    const display = false
    return(
        <div>
            {display ? <h2> TRUE </h2>: <h2> FALSE </h2>}
        </div>
    )
}