const draggables = document.querySelectorAll('[data-draggable]');
const containers = document.querySelectorAll('.container');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart',() => {
        draggable.classList.add('dragging');
    })

    draggable.addEventListener('dragend',(e) => {
        const container = e.target.closest('.container');
        const belowEle = getBelowElement(container,e.clientY);
        if(belowEle.ele === null) {
            draggable.classList.remove('dragging');
            return;
        }
        belowEle.ele.insertAdjacentElement('beforebegin',draggable);
        draggable.classList.remove('dragging');
    })
})

containers.forEach(container => {
    container.addEventListener('dragover',(e) => {
        e.preventDefault();
        const draggedNode = document.querySelector('.dragging');
        container.appendChild(draggedNode);
    })
})

function getBelowElement(container,yCursor) {
    const childArr = [...container.querySelectorAll('[data-draggable]:not(.dragging)')];
    let belowEle = childArr.reduce((closestToY,childNode) => {
        let childInfo = childNode.getBoundingClientRect();
        let yChild = (childInfo.top) + (childInfo.height)/2;
        if(yCursor < yChild) {
            let currDisn = yChild - yCursor;
            if(currDisn < closestToY.disn) {
                closestToY.disn = yChild - yCursor;
                closestToY.ele = childNode;
            }
        }
        return closestToY;
    },{disn:Number.POSITIVE_INFINITY, ele:null});
    return belowEle;
}