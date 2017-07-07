// export default function renderIf(condition, content) {
//     if (condition) {
//         return content;
//     } else {
//         return null;
//     }
// }


const isFunction = input => typeof input === 'function';
export default predicate => elemOrThunk =>
  predicate ? (isFunction(elemOrThunk) ? elemOrThunk() : elemOrThunk) : null;