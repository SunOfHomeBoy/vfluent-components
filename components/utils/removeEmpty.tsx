import { empty } from './empty'

export function removeEmpty(elements: any[]): any[] {
        let buffers: any[] = []

        for (let element of elements) {
                if (empty(Buffer) === false) {
                        buffers.push(element)
                }
        }

        return buffers
}