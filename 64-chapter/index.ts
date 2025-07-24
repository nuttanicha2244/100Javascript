// //bad
// declare function fn(x:unknown): unknown;
// declare function fn(x:HTMLElement): number;
// declare function fn(x:HTMLDivElement): string;

// let myEl:HTMLDivElement;
// const y = fn(myEl);


//good
// declare function fn(x:HTMLDivElement): string;
// declare function fn(x:HTMLElement): number;
// declare function fn(x:unknown): unknown;



// let myEl:HTMLDivElement;
// const y = fn(myEl)
// let myEl2:HTMLElement;
// const z = fn(myEl2)