import { Equal, Expect } from './tests'

type A = 'kebab'
type B = 'kebab-pita'
type C = 'kebab-pita-mieszany-mieszany'

type KebabToCamel<T extends string> = T extends `${infer F}-${infer S}`
    ? `${F}${KebabToCamel<Capitalize<S>>}`
    : T

type Test1 = Expect<Equal<KebabToCamel<A>, 'kebab'>>
type Test2 = Expect<Equal<KebabToCamel<B>, 'kebabPita'>>
type Test3 = Expect<Equal<KebabToCamel<C>, 'kebabPitaMieszanyMieszany'>>
