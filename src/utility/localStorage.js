

export const getLocalStorage = () => {
    const myItem = localStorage.getItem("applayJobs")
    if (myItem) {
        return JSON.parse(myItem)
    }
    return []
}

export const savLocalStorage = (id) => {
    if (id) {
        const getLoalItems = getLocalStorage()
        const alredyExistItem = getLoalItems.find(Lid => Lid == id)
        if (!alredyExistItem) {
            getLoalItems.push(id)
            localStorage.setItem("applayJobs", JSON.stringify(getLoalItems))
        }
    }
    return
}

export const removeLocalItems=(id)=>{
    const getAllLocalItems=getLocalStorage()
    const macthedItem=getAllLocalItems.filter(Lid=>Lid !== id)
    localStorage.setItem("applayJobs", JSON.stringify(macthedItem))
}