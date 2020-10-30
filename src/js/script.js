import DoubleCube,{debounce} from './3d-cube';

const cubeEl1 = document.getElementById('cube-1');
console.log(cubeEl1);
const cube1 = new DoubleCube(cubeEl1)

const reRender = debounce( () => cube1.render(), 25);
window.addEventListener('resize', reRender)



const directions = ['left','right','topLeft','topRight','bottomLeft','bottomRight']


const rotationSequence =[
    {speed: 1000, direction: 'right'},{ speed: 2000, direction: 'left'},{speed: 3000,direction: 'topRight'},{speed: 3000,direction: 'topLeft'},
];
// cube1.outerCube.rotate().sequence(rotationSequence)

cube1.outerCube.rotate({speed:2000,direction:'right'})
cube1.innerCube.rotate({speed:2000,direction:'left'})

cube1.outerCube.onClick('right','left')




