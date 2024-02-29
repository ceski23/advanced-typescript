import { Equal, Expect } from './tests'

type Salaries = {
    CEO: '1000000 USD',
    Senior: '20000 USD',
    Mid: '10000 USD',
    Junior: '1 USD'
}

type SalariesInNumber = {
    [K in keyof Salaries]: Salaries[K] extends `${infer C extends number} USD` ? C : never
}

type Test1 = Expect<Equal<SalariesInNumber, {
    CEO: 1000000,
    Senior: 20000,
    Mid: 10000,
    Junior: 1
}>>
