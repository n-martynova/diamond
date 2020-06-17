import { DisplayObject, Sprite } from 'pixi.js'

/** Removes the current child from his parent. Also destroys it if needDestroy-prop is passed as true. Returns the child. */
DisplayObject.prototype.removeFromParent = function removeFromParent(needDestroy) {
	if (needDestroy) {
        this.destroy({ children: true })
    }

	if (!this.parent) return this
	if (this.parent.getChildIndex(this) == -1) return this
	this.parent.removeChild(this)
	return this
}

/** The function sets the anchor in particular place. Default - in center.
	We can pass a parameter from 1 to 9, where, e.g., 1 is top-left, 5 - center,
	8 - bottom-center etc. For understanding imagine a squre:
		1 2 3
		4 5 6
		7 8 9
	Returns itself for chaining
*/
Sprite.prototype.alignAnchor = function alignAnchor(pos) {
	pos = pos || 5
	if (pos < 1 || pos > 9) throw `Wrong number ${pos} for aligning anchor`
	let ky = Math.floor((pos - 1) / 3)
	let kx = (pos - 1) - ky * 3
	this.anchor.set(kx * 0.5, ky * 0.5)
	return this
}