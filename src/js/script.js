import DoubleCube from './3d-cube';

const cubeContainer = document.querySelector('.cube-container');
const cubes = Array.from(cubeContainer.children)

cubes.map( (child) => {
    const cube = new DoubleCube(child)
})
console.log(cubes)
