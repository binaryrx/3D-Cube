import Faces,{createElement} from './cube-faces';

export function debounce(func, wait, immediate) {
	let timeout;
	return () => {
		const context = this, args = arguments;
		const later = () => {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

class Cube {
    constructor(element, options = {},wrapperEl){
        this.cubeEl = element;
        this.wrapperEl = wrapperEl;
        this.options = options;
        this.border = {
            thinWidth: getComputedStyle(document.body).getPropertyValue('--cube-border-thin'),
            thicWidth: getComputedStyle(document.body).getPropertyValue('--cube-border-thic')
        }

        this.faces = new Faces(this.border.thinWidth, this.border.thicWidth)

        this.rot = options.rotate;
        this.speed = options.speed;
        this.rotation = options.rotation;
        this.direction = options.direction;
        this.isOuter = ( () => this.cubeEl.classList.contains('outer'))();
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
            transform: `translateX(50%) rotateX(0deg) rotateY(${this.rot}deg) scale3d(${1/n},${1/n},${1/n}) rotateZ(0deg)`
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
    

    onClick (outerDirection,innerDirection) {
        this.cubeEl.addEventListener('click',() => {
            console.log(this)
            this.rotateCube(null,outerDirection,innerDirection)
        })
    }

    transformCube = (direction) => {

            const transformation = (rX = 0,rY = 0,rZ = 0) => {
                const n = (this.isOuter) ? 1 : 2;
                let s = parseInt(`${this.rot = this.rot + this.rotation}`);
                // let sm = parseInt(`${this.rot = this.rot - this.rotation}`);
                console.log(s,direction)
                
                // console.log(s,sm,direction);
                

                let rotateX = rX > 0 ? s : rX < 0 ? -s : 0;
                let rotateY = rY > 0 ? s : rY < 0 ? -s : 0;
                let rotateZ = rZ > 0 ? s : rZ < 0 ? -s : 0;

                console.log(rotateX, rotateY, rotateZ)
                return Object.assign(this.cubeEl.style, {
                    transform: `translateX(50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale3d(${1/n},${1/n},${1/n})`
                })

            }
            
            const transform ={
                right: () => {
                    transformation(0,-1,0);
                },
                left: () => {
                    transformation(0,1,0);
                },
                topLeft: () => {
                    transformation(1,0,0);
                },
                topRight: () => {
                    transformation(0,0,1);
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


    rotateCube = (speed, direction,innerDirection = null) => {

        const rotate = () => {
            if(this.hidden === false){
                
                this.transformCube(direction)

                if( innerDirection !== null ) this.innerCube.transformCube(innerDirection)

                this.setBorders(direction,true);
      
            }
        }

        speed === null ? rotate() : setInterval( () => rotate(),speed)
        

        document.addEventListener("visibilitychange", ()=> {
            this.hidden === true ? this.hidden = false : this.hidden = true;
        });
        
    }

    sequence(directionsArr) {

        

        const rotate = (direction) => {
            this.transformCube(direction)
            this.setBorders(direction,true);
    }

        const loop  = (function l(i) {
            setTimeout( () => {
                rotate(directionsArr[i].direction)
                if(++i <directionsArr.length ){
                    l(i)
                }else{
                    loop(0)
                }
            },3000)
        })
        loop(0);

    }

    rotate (obj = { speed:3000,direction:'right'}){
        if(arguments[0] === undefined){
            return this
        }
        this.rotateCube(obj.speed, obj.direction)
    }

}

export default class DoubleCube {
    constructor(wrapper, options = {}){
        this.wrapperEl = wrapper;

        this.options = {
            // rotateX: options.rotateX || -35.5,//deg
            rotate: options.rotate || 0,//deg
            rotation: options.rotation || 90,
            speed: options.speed || 3000,
            direction: options.direction || 'right'
            
        }

        this.outerCubeEl = createElement('figure','cube outer');
        this.innerCubeEl = createElement('figure','cube inner');


        
        this.outerCube = new Cube(this.outerCubeEl, this.options, this.wrapperEl);
        this.innerCube = new Cube(this.innerCubeEl, this.options, this.wrapperEl);

        this.outerCube.innerCube = this.innerCube
        this.outerCube.wrapperEl = this.wrapperEl;
        this.innerCube.wrapperEl = this.wrapperEl;

        this.wrapperEl.appendChild(this.outerCubeEl)
        this.wrapperEl.appendChild(this.innerCubeEl)

    }

    render ()  { 
        this.outerCube.renderCube()
        this.innerCube.renderCube()
    }

    onClick (outerDirection,innerDirection) {
        this.outerCube.onClick(outerDirection,innerDirection)
        return this
    }


    rotate (obj = { speed:3000,direction:'right'}){
        console.log(Object.entries(obj).length)
        if(arguments[0] === undefined){
            return this
        }
        
        this.outerCube.rotateCube(obj.speed, obj.direction)
        this.innerCube.rotateCube(obj.speed, obj.direction)
    }
}
