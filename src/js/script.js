import DoubleCube,{debounce} from './3d-cube';

const cubeContainer = document.querySelector('.cube-container');
const cubeEl1 = document.querySelector('#cube-1');
// const cubeEl2 = document.querySelector('#cube-2');
// const cubeEl3 = document.querySelector('#cube-3');
// const cubeEl4 = document.querySelector('#cube-4');
// const cubeEl5 = document.querySelector('#cube-5');
// const cubeEl6 = document.querySelector('#cube-6');
const cubesEls = Array.from(cubeContainer.children)


const cube1 = new DoubleCube(cubeEl1)

const reRender = debounce( () => cube1.render(), 25);
window.addEventListener('resize', reRender)
// const cube2 = new DoubleCube(cubeEl2)
// const cube3 = new DoubleCube(cubeEl3)
// const cube4 = new DoubleCube(cubeEl4)
// const cube5 = new DoubleCube(cubeEl5)
// const cube6 = new DoubleCube(cubeEl6)


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
// cube1.onClick('left')
// cube1.outerCube.onClick('left','right')

// cube1.onClick('bottomRight','right')
const rotationSequence =[
    {
        speed: 1000,
        direction: 'right'
    },
    {
        speed: 2000,
        direction: 'left'
    },
    {
        speed: 3000,
        direction: 'topRight'
    },
    {
        speed: 3000,
        direction: 'topLeft'
    },
];
// cube1.outerCube.rotate().sequence(rotationSequence)

// cube1.outerCube.rotate({speed:2000,direction:'right'})
// cube1.innerCube.rotate({speed:2000,direction:'topRight'})

cube1.onClick('right','topRight')


