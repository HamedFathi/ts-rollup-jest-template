import { hello } from '../src/index';

describe('Hello function', () => {
    it('should return hello world', () => {
        const result = hello();
        expect(result).toBe('Hello world!');
    });
});
