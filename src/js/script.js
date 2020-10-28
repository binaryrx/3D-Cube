import DoubleCube from './3d-cube';

const cubeContainer = document.querySelector('.cube-container');
const cubes = Array.from(cubeContainer.children)

cubes.map( (child,index) => {
    if(index % 2 === 0){
        const cube = new DoubleCube(child,{direction:'left',speed: 3000})
    }else{
        const cube = new DoubleCube(child,{direction:'right',speed: 3000})
    }
})
console.log(cubes)
