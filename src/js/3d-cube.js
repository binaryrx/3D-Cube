import Faces,{createElement} from './cube-faces'

class Cube {
    constructor(element, options = {}){
        this.cubeEl = element;
        this.options = options;

        this.faces = new Faces()
        
        this.rotate = options.rotate;
        this.speed = options.speed;
        this.rotation = options.rotation;
        this.direction = options.direction;
        this.isOuter = ( () => {
            return this.cubeEl.classList.contains('outer')
        })();
        
        this.hidden = false;
        this.render = this.renderCube()
        // this.rotate = this.rotateCube()

        // this.cubeEl.addEventListener('click', this.rotateCube)

    }

    setBorders = (direction) => {
                    
        for (let f in this.faces) {
            const face = this.faces[f]

            face.iteration === 3 ? face.iteration = 0 : face.iteration += 1;

            if(this.isOuter){   
        
                Object.assign(face.el.style, {
                    borderTopWidth: `${face.directionalBorder[direction].faceBorders.top[face.iteration]}px`,
                    borderRightWidth: `${face.directionalBorder[direction].faceBorders.right[face.iteration]}px`,
                    borderBottomWidth: `${face.directionalBorder[direction].faceBorders.bottom[face.iteration]}px`,
                    borderLeftWidth: `${face.directionalBorder[direction].faceBorders.left[face.iteration]}px`
                })

            }
        
        }
    }

        
    renderCube = () => {
        const width = getComputedStyle(document.body).getPropertyValue('--cube-container-width');

        const n = (this.isOuter) ? 1 : 2;
        
        Object.assign(this.cubeEl.style, {
            width: `calc(${width}/2)`,
            height: `calc(${width}/2)`,
            transform: `translateX(50%) rotateX(0deg) rotateY(${this.rotate}deg) scale3d(${1/n},${1/n},${1/n}) rotateZ(0deg)`
        })
 

        for( let f in this.faces) {
            const face = this.faces[f];

            Object.assign(face.el.style, {
                transform:`${face.initialRotation} translateZ(calc(${width}/4))`,
            })
            
            if(this.isOuter){
                Object.assign(face.el.style, {
                    borderTopWidth: `${face.directionalBorder[this.direction].faceBorders.top[face.iteration]}px`,
                    borderRightWidth: `${face.directionalBorder[this.direction].faceBorders.right[face.iteration]}px`,
                    borderBottomWidth: `${face.directionalBorder[this.direction].faceBorders.bottom[face.iteration]}px`,
                    borderLeftWidth: `${face.directionalBorder[this.direction].faceBorders.left[face.iteration]}px`
                })
            }

            this.cubeEl.appendChild(face.el)
            
        }

    }

    click (direction) {
        this.cubeEl.addEventListener('click',() => this.rotateCube(null,direction,'click'))
    }

    transformCube = (direction) => {
            const n = (this.isOuter) ? 1 : 2;
            const o = (this.isOuter) ? "" : "-";
            const op = (this.isOuter) ? "+" : "-";


            const transformation = (rX = 0,rY = 0,rZ = 0) => {
                let s = `${o}${this.rotate = eval(`${this.rotate} ${op} ${this.rotation}`) }`
                if(s.charAt(1) === '-')  s = s.substring(1,s.length);

                let rotateX = rX > 0 ? s : rX < 0 ? -s : 0;
                let rotateY = rY > 0 ? s : rY < 0 ? -s : 0;
                let rotateZ = rZ > 0 ? s : rZ < 0 ? -s : 0;

                return Object.assign(this.cubeEl.style, {
                    transform: `translateX(50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale3d(${1/n},${1/n},${1/n})`
                })

            }
            
            const transform ={
                right: () => {
                    transformation(0,1,0);
                },
                left: () => {
                    transformation(0,-1,0);
                },
                topLeft: () => {
                    transformation(0,0,1);
                },
                topRight: () => {
                    transformation(1,0,0);
                },
                bottomLeft: () => {
                    transformation(0,0,-1);
                },
                bottomRight: () => {
                    transformation(-1,0,0);
                }
            }
            transform[direction]()
        
    }


    rotateCube = (speed, direction,str = null) => {
        const rotate = () => {
            if(this.hidden === false){
                
                this.transformCube(direction)

                if( str === 'click') this.innerCube.transformCube(direction)

                this.setBorders(direction,true);
      
            }
        }

        speed === null ? rotate() : setInterval( () => rotate(),speed)
        

        document.addEventListener("visibilitychange", ()=> {
            this.hidden === true ? this.hidden = false : this.hidden = true;
        });
        
    }

}

export default class DoubleCube {
    constructor(element, options = {}){
        this.wrapperEl = element;

        this.options = {
            // rotateX: options.rotateX || -35.5,//deg
            rotate: options.rotate || 0,//deg
            rotation: options.rotation || 90,
            speed: options.speed || 3000,
            direction: options.direction || 'right'
        }

        this.outerCubeEl = createElement('figure','cube outer');
        this.innerCubeEl = createElement('figure','cube inner');


        this.outerCube = new Cube(this.outerCubeEl, this.options);
        this.innerCube = new Cube(this.innerCubeEl, this.options);

        this.outerCube.innerCube = this.innerCube

        this.wrapperEl.appendChild(this.outerCubeEl)
        this.wrapperEl.appendChild(this.innerCubeEl)

    }

    render ()  { 
        this.outerCube.renderCube()
        this.innerCube.renderCube()

        console.log(this.outerCube)
        console.log(this.innerCube)
    }

    onClick (direction) {
        this.outerCube.click(direction)
        this.innerCube.click(direction)
    }
    

    rotate (obj = { speed:3000,direction:'right'}){
        console.log(Object.entries(obj).length)
        if(arguments[0] === undefined){
            return this
        }

        this.outerCube.rotateCube(obj.speed, obj.direction)
        this.innerCube.rotateCube(obj.speed, obj.direction)
    }
    rotateOuter() { console.log('rotateOuter')}
    rotateInner() { console.log('rotateOuter')}
}
