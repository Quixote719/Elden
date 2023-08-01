import idGen from "./idGenerator.ts";

const { v4 } = idGen;
const id1 = v4();
const id2 = v4();
const id3 = v4();
const id4 = v4();

console.log(id1, id2, id3, id4);
