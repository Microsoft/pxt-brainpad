/**
 * Tagged image literal converter
 */
//% shim=@f4 helper=image::ofBuffer
//% groups=["0.,","1#*"]
function img(lits: any, ...args: any[]): Image { return null }

// This file would be usually overridden by the target.
const screen = image.create(128, 64)

namespace _screen_internal {
    //% shim=pxt::updateScreen
    function updateScreen(img: Image): void {}
    //% shim=pxt::updateStats
    function updateStats(msg: string): void {}

    control.setupScreenRefresh(() => updateScreen(screen))

    export function _stats(msg: string) {
        updateStats(msg)
    }
}