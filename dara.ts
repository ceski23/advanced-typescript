import { Equal, Expect } from './tests'

type A = 'kebab'
type B = 'kebab-pita'
type C = 'kebab-pita-mieszany-mieszany'

type KebabToCamel = unknown

type Test1 = Expect<Equal<KebabToCamel<A>, 'kebab'>>
type Test2 = Expect<Equal<KebabToCamel<B>, 'kebabPita'>>
type Test3 = Expect<Equal<KebabToCamel<C>, 'kebabPitaMieszanyMieszany'>>
