import { Equal, Expect } from './tests'

type CreateArray<TItem, TCount, TAcc extends Array<unknown> = []> = TAcc['length'] extends TCount
    ? TAcc
    : CreateArray<TItem, TCount, [TItem, ...TAcc]>

type Test1 = Expect<Equal<CreateArray<'test', 2>, ['test', 'test']>>
type Test2 = Expect<Equal<CreateArray<'test', 0>, []>>
type Test3 = Expect<Equal<CreateArray<1, 11>, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]>>
