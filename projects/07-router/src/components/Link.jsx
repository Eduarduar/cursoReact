import { EVENTS } from '../utils/constants.js'

function navigate (href) {
    window.history.pushState({}, '', href)
    // create custom event
    const navigationEvent = new Event(EVENTS.PUSH_STATE)
    // dispatch event
    window.dispatchEvent(navigationEvent) 
}

// eslint-disable-next-line react/prop-types
export function Link ({ target, to, ...props}) {
    const handleClick = (e) => {
        const isMainEvent = e.button === 0
        const isModifiedEvent = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
        const isManageableEvent = target === undefined || target === '_self' 

        if (isMainEvent && !isModifiedEvent && isManageableEvent) {
            e.preventDefault()
            navigate(to)
        }
    }

    return <a onClick={handleClick} href={to} target={target} {...props} ></a>
}