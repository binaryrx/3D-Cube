import DoubleCube from './3d-cube';

const cubeContainer = document.querySelector('.cube-container');
const cubeEl1 = document.querySelector('#cube-1');
const cubeEl2 = document.querySelector('#cube-2');
const cubeEl3 = document.querySelector('#cube-3');
const cubeEl4 = document.querySelector('#cube-4');
const cubeEl5 = document.querySelector('#cube-5');
const cubeEl6 = document.querySelector('#cube-6');
const cubesEls = Array.from(cubeContainer.children)


const cube1 = new DoubleCube(cubeEl1)
const cube2 = new DoubleCube(cubeEl2)
const cube3 = new DoubleCube(cubeEl3)
const cube4 = new DoubleCube(cubeEl4)
const cube5 = new DoubleCube(cubeEl5)
const cube6 = new DoubleCube(cubeEl6)


// cube1.rotate({speed:1500,direction: ';lef'})
// cube1.render()
// cube2.rotate({speed:1000,direction: 'right'})
// cube1.rotate({speed:2000,direction: 'top'})
// cube2.rotate({speed:3000,direction: 'left'})


const directions = ['left','right','topLeft','topRight','bottomLeft','bottomRight']

const randomIndex = () => Math.floor((Math.random() * directions.length))

// const i = directions[randomIndex()]
// console.log(i)
// console.log(cube1.onClick(directions[i]))
// cube1.rotate({speed:2000,direction:'right'})
// cube2.rotate({speed:2000,direction:'left'})
// cube3.rotate({speed:2000,direction:'topLeft'})
// cube4.rotate({speed:2000,direction:'topRight'})
// cube5.rotate({speed:2000,direction:'bottomLeft'})
// cube6.rotate({speed:2000,direction:'bottomRight'})
cube1.onClick('left')
cube2.onClick('right')
cube3.onClick('topRight')
cube5.onClick('bottomLeft')
cube4.onClick('topLeft')
cube6.onClick('bottomRight')
// cube2.wrapperEl.parentElement.style.display = 'none'
// cube3.wrapperEl.parentElement.style.display = 'none'
// cube4.wrapperEl.parentElement.style.display = 'none'
// cube5.wrapperEl.parentElement.style.display = 'none'
// cube6.wrapperEl.parentElement.style.display = 'none'


// cube1.rotate().rotateOuter()

