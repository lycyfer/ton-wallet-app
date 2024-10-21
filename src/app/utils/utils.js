export function isMobile() {

    return window.innerWidth <= 500
}

export function isDesktop() {
    return window.innerWidth >= 1050
}

export function openLink(href, target) {
    window.open(href, target, "noOPEN")
}