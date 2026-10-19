String.prototype.toTitleCase = function (): string {
    return this.replace(/\w\S*/g, (txt)=>{
        return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    })
}