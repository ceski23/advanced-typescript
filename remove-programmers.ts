import { Equal, Expect } from './tests'

type Programmers = [
    'GW', 'Adrianna', 'Pratick',
    'Adrian', 'Krishna', 'Mohamed',
    'GT', 'Joshua', 'Cezary', 'Przemek'
]

type ProgrammersToKick = [
    'Pratick', 'Krishna', 'Mohamed', 'Joshua'
]

type KickProgrammers<TGood extends Array<unknown>, TKick extends Array<unknown>> = Exclude<TGood[number], TKick[number]>

type Test = Expect<Equal<KickProgrammers<Programmers, ProgrammersToKick>, 'GW' | 'Adrianna' | 'Adrian' | 'GT' | 'Cezary' | 'Przemek'>>
