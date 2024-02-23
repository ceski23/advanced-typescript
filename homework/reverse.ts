import { Equal, Expect } from '../tests'

type Reverse = unknown

type Test1 = Expect<Equal<Reverse<'abc'>, 'cba'>>
type Test2 = Expect<Equal<Reverse<'abcd'>, 'dcba'>>
type Test3 = Expect<Equal<Reverse<'ab'>, 'ba'>>
type Test4 = Expect<Equal<Reverse<'a'>, 'a'>>
type Test5 = Expect<Equal<Reverse<''>, ''>>
