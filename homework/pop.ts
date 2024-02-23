import { Equal, Expect } from '../tests'

type Pop = unknown

type Test1 = Expect<Equal<Pop<[1, 2, 3]>, [1, 2]>>
type Test2 = Expect<Equal<Pop<[() => 1, () => 2]>, [() => 1]>>
type Test3 = Expect<Equal<Pop<['abc']>, []>>
type Test4 = Expect<Equal<Pop<[]>, []>>
