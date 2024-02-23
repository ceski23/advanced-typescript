import { Equal, Expect } from '../tests'

type First = unknown

type Test1 = Expect<Equal<First<[1, 2, 3]>, 1>>
type Test2 = Expect<Equal<First<[() => 1, { a: string }]>, () => 1>>
type Test3 = Expect<Equal<First<[]>, never>>
type Test4 = Expect<Equal<First<[undefined]>, undefined>>
