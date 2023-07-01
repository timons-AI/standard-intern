import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';


const useBearStore = create((set)=>({
    bears: 0,
    increasePopulation: ()=>set((state: any)=>({bears: state.bears + 1})),
    removeAllBears: ()=>set({bears: 0})
}))

// const courseStore = create((set)=>({
//     courses: [],
//     addCourse: (course: any )=>{
//         set((state : any ) =>({
//             courses: [ course, ...state.courses],
//         }))
//     },
//     removeCourse: (courseId: any)=>{
//         set((state: any )=>({
//             courses: state.courses.filter((course: any )=> course.id !== courseId)
//         }))
//     },
//     toggleCourseStatus: ( courseId : any )=>{
//         set((state: any )=>({
//             courses: state.courses.map((course: any )=> course.id === courseId ? {...course, completed: !course.completed}: course )
//         }))
//     }
// }))
export default useBearStore;
// export default courseStore;