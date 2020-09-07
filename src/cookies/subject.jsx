import Cookies from 'universal-cookie'
import Set from 'collections/set'
const cookies = new Cookies()

export function getCookies() {
    return cookies
} 

export default class Subject {
    observers = new Set()

    constructor() {
        this.onUpdate = this.onUpdate.bind(this)
        this.attach = this.attach.bind(this)
        this.disattach = this.disattach.bind(this)

        this.observers = new Set()
    }

    onUpdate(props) {
        this.observers.forEach(obj => {
            obj.onPreferencesUpdate(props)
        })
    }

    attach(obj) {
        this.observers.add(obj)
    }

    disattach(obj) {
        this.observers.delete(obj)
    }
}