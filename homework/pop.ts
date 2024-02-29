import { Equal, Expect } from '../tests'

type Pop<A extends Array<unknown>> = A extends [infer H, ...infer T]
    ? T['length'] extends 0
        ? []
        : [H, ...Pop<T>]
    : []

type Test1 = Expect<Equal<Pop<[1, 2, 3]>, [1, 2]>>
type Test2 = Expect<Equal<Pop<[() => 1, () => 2]>, [() => 1]>>
type Test3 = Expect<Equal<Pop<['abc']>, []>>
type Test4 = Expect<Equal<Pop<[]>, []>>