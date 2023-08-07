import idGen from "./idGenerator.ts";

const { v4 } = idGen;
const id1 = v4();
const id2 = v4();
const id3 = v4();
const id4 = v4();

const getID = (param: number):string => {
    const IdArray = [id1, id2, id3, id4]
    return IdArray[param % 4]
}

console.log(getID(2), getID(7));
