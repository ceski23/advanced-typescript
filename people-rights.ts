import { Equal, Expect } from './tests'

type People = [ '🖐🏻', '🖐🏼', '🖐🏽', '🖐🏾', '🖐🏿', '🖐' ]

type GoodPeople = '🖐🏻' | '🖐🏼'

type PeopleRights = unknown

type Test = Expect<Equal<PeopleRights, {
    '🖐🏻': true,
    '🖐🏼': true,
    '🖐🏽': false,
    '🖐🏾': false,
    '🖐🏿': false,
    '🖐': false
}>>
