
function animate(ele, srcArr, reps) {
    let i = 0
    let j = 0
    let sources = srcArr;
    let repetitions = reps;
    sources.forEach(src => {
        i++
        console.log(repetitions)
        setTimeout(() => {
            ele.forEach(e => {
                e.src = src;
                j++
                if(j === sources.length && repetitions > 0){
                    repetitions--
                    animate(ele, sources, repetitions);
                }
            })
        }, i*50);
    });
}

// function animate2(ele, srcArr, reps) {
//     let i = 0
//     let j = 0
//     let sources = srcArr;
//     let repetitions = reps;

//     function changeImg() {

//     }

//     sources.forEach(src => {
//         i++
//         console.log(repetitions)
//         setTimeout(() => {
//             ele.forEach(e => {
//                 e.src = src;
//                 j++
//                 if(j === sources.length && repetitions > 0){
//                     repetitions--
//                     animate(ele, sources, repetitions);
//                 }
//             })
//         }, i*50);
//     });


// }