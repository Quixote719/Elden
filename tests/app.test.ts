import getID from '../scripts/weapon.ts'

describe('weaponTest',() => {
    test('3 should result in type string', () => {
        const res1 = getID(3)
        const res2 = getID(3)
        expect(typeof(res1)).toBe('string');
        expect(res1.length === res2.length).toBe(true);
      });
});