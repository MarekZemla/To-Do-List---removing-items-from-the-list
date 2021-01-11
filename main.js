const removeTask = (e)=>{

//   VERSION 1 //

//  e.target.parentNode.remove()

//   VERSION 2 //

//  e.target.parentNode.style.textDecoration = "line-through"
//  e.target.remove()

//   VERSION 3 //

const index = e.target.dataset.key;
console.log(index)
document.querySelector(`li[data-key="${index}"]`).remove()
}

document.querySelectorAll('button[data-key]').forEach(item=> item.addEventListener('click',removeTask))

let div = document.querySelector('div')

