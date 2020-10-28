

function createElement (element,classes){
    const el = document.createElement(element)
        el.classList = classes;
    return el;
}


class Cube {
    constructor(element, options = {}){
        this.cubeEl = element;
        this.options = options;

        this.faces = {
            front: {
                el: createElement('section', 'cube__face face__front'),
                directionalBorder: {
                    right: {
                        faceBorders: {
                            top: [1, 1, 1, 1],
                            right: [6, 1, 1, 1],
                            bottom: [6, 1, 1, 6],
                            left: [1, 1, 1, 6]
                        }
                    },
                    left: {
                        faceBorders: {
                            top: [1, 1, 1, 1],
                            right: [6, 1, 1, 1],
                            bottom: [6, 6, 1, 1],
                            left: [1, 1, 1, 6]
                        }
                    },
                },
                initialRotation: 'rotateX(0deg)',
                iteration: 0
            },
            bottom: {
                el: createElement('section', 'cube__face face__bottom'),
                directionalBorder: {
                    right:{
                        faceBorders: {
                            top: [1, 1, 1, 1],
                            right: [1, 1, 1, 1],
                            bottom: [1, 1, 1, 1],
                            left: [1, 1, 1, 1]
                        }
                    },
                    left: {
                        faceBorders: {
                            top: [1, 1, 1, 1],
                            right: [1, 1, 1, 1],
                            bottom: [1, 1, 1, 1],
                            left: [1, 1, 1, 1]
                        }
                    }
                },
                initialRotation: 'rotateX(-90deg)',
                iteration: 0
            },
            top: {
                el: createElement('section', 'cube__face face__top'),
                directionalBorder: {
                    right: {
                        faceBorders: {
                            top: [6, 1, 1, 6],
                            right: [6, 6, 1, 1],
                            bottom: [1, 6, 6, 1],
                            left: [1, 1, 6, 6]
                        },
                    },
                    left: {
                        faceBorders: {
                            top: [6, 6, 1, 1],
                            right: [6, 1, 1, 6],
                            bottom: [1, 1, 6, 6],
                            left: [1, 6, 6, 1]
                        },
                    }
                },
                initialRotation: 'rotateX(90deg)',
                iteration: 0
            },
            left: {
                el: createElement('section', 'cube__face face__left'), 
                directionalBorder: {
                    right: {
                        faceBorders: {
                            top: [1, 1, 1, 1],
                            right: [1, 6, 1, 1],
                            bottom: [6, 6, 1, 1],
                            left: [6, 1, 1, 1]
                        }
                    },
                    left: {
                        faceBorders: {
                            top: [1, 1, 1, 1],
                            right: [1, 6, 1, 1],
                            bottom: [6, 1, 1, 6],
                            left: [6, 1, 1, 1]
                        }
                    }
                },
                initialRotation: 'rotateY(-90deg)',
                iteration: 0
            },
            right: {
                el: createElement('section', 'cube__face face__right'), 
                directionalBorder: {
                  right: {
                    faceBorders: {
                        top: [1, 1, 1, 1],
                        right: [1, 1, 1, 6],
                        bottom: [1, 1, 6, 6],
                        left: [1, 1, 6, 1]
                    }
                  },
                  left: {
                    faceBorders: {
                        top: [1, 1, 1, 1],
                        right: [1, 6, 1, 6],
                        bottom: [1, 6, 6, 1],
                        left: [1, 1, 6, 1]
                    }
                  }  
                },
                initialRotation: 'rotateY(90deg)',
                iteration: 0
            },
            back: {
                el: createElement('section', 'cube__face face__back'),
                directionalBorder: {
                    right: {
                        faceBorders: {
                            top: [1, 1, 1, 1],
                            right: [1, 1, 6, 1],
                            bottom: [1, 6, 6, 1],
                            left: [1, 6, 1, 1]
                        }
                    },
                    left: {
                        faceBorders: {
                            top: [1, 1, 1, 1],
                            right: [1, 1, 6, 1],
                            bottom: [1, 1, 6, 6],
                            left: [1, 1, 1, 1]
                        }
                    } 
                },
                initialRotation: 'rotateY(180deg)',
                iteration: 0
            }
        }

        this.rotateX = options.rotateX;
        this.rotateY = options.rotateY;
        this.speed = options.speed;
        this.rotation = options.rotation;
        this.direction = options.direction;
        this.isOuter = ( () => {
            return this.cubeEl.classList.contains('outer')
        })();
        
        this.hidden = false;
        this.render = this.renderCube()
        this.rotate = this.rotateCube()

        // this.cubeEl.addEventListener('click', this.rotateCube)


    }

        
    renderCube = () => {
        const width = getComputedStyle(document.body).getPropertyValue('--cube-container-width');
        
        if(this.isOuter){
            Object.assign(this.cubeEl.style, {
                width: `calc(${width}/2)`,
                height: `calc(${width}/2)`,
                transform: `translateX(50%) rotateX(0deg) rotateY(${this.rotateY}deg) scale3d(1,1,1) rotateZ(0deg)`
            })
        }else{
            Object.assign(this.cubeEl.style, {
                width: `calc(${width}/2)`,
                height: `calc(${width}/2)`,
                transform: `translateX(50%) rotateX(0deg) rotateY(${this.rotateY}deg) scale3d(.5,.5,.5) rotateZ(0deg)`
            })
        }

        for( let f in this.faces) {
            const face = this.faces[f];
            
            if(this.isOuter){
                console.log(this.direction)
                Object.assign(face.el.style, {
                    transform: `${face.initialRotation} translateZ(calc(${width}/4))`,
                    borderTopWidth: `${face.directionalBorder[this.direction].faceBorders.top[face.iteration]}px`,
                    borderRightWidth: `${face.directionalBorder[this.direction].faceBorders.right[face.iteration]}px`,
                    borderBottomWidth: `${face.directionalBorder[this.direction].faceBorders.bottom[face.iteration]}px`,
                    borderLeftWidth: `${face.directionalBorder[this.direction].faceBorders.left[face.iteration]}px`
                })
            }else {
                Object.assign(face.el.style, {
                    transform:`${face.initialRotation} translateZ(calc(${width}/4))`,
                })
            }
            
            this.cubeEl.appendChild(face.el)
        }

    }

    transformCube = (direction) => {
            const n = (this.isOuter) ? 1 : 2;

            switch(direction){
                case 'right':
                    if(this.isOuter){
                        return Object.assign(this.cubeEl.style, {
                            transform: `translateX(50%) rotateY(${this.rotateY += this.rotation}deg) scale3d(${1/n},${1/n},${1/n}) rotateZ(0deg)`
                        })
                    }else{
                        return Object.assign(this.cubeEl.style, {
                            transform: `translateX(50%) rotateY(${this.rotateY -= this.rotation}deg) scale3d(${1/n},${1/n},${1/n}) rotateZ(0deg)`
                        })
                    }  
                break;
                case 'left':
                    if(this.isOuter){
                        return Object.assign(this.cubeEl.style, {
                            transform: `translateX(50%) rotateY(${this.rotateY -= this.rotation}deg) scale3d(${1/n},${1/n},${1/n}) rotateZ(0deg)`
                        })
                    }else{
                        return Object.assign(this.cubeEl.style, {
                            transform: `translateX(50%) rotateY(${this.rotateY += this.rotation}deg) scale3d(${1/n},${1/n},${1/n}) rotateZ(0deg)`
                        })
                    } 
                break;
            }
        
    }


    rotateCube = () => {

        setInterval(() => {
            if(this.hidden === false){

                switch(this.direction){
                    case 'right':
                        this.transformCube('right')
                    break;
                    case 'left':
                        this.transformCube('left')
                    break;
                }
           
                if(this.isOuter){
                    
                    for (let f in this.faces) {
                        const face = this.faces[f]

                        face.iteration === 3 ? face.iteration = 0 : face.iteration += 1;

                        //borders
                        Object.assign(face.el.style, {
                            borderTopWidth: `${face.directionalBorder[this.direction].faceBorders.top[face.iteration]}px`,
                            borderRightWidth: `${face.directionalBorder[this.direction].faceBorders.right[face.iteration]}px`,
                            borderBottomWidth: `${face.directionalBorder[this.direction].faceBorders.bottom[face.iteration]}px`,
                            borderLeftWidth: `${face.directionalBorder[this.direction].faceBorders.left[face.iteration]}px`
                        })

                    }
                
                //inner cube
                }
            }


        },this.speed)

        document.addEventListener("visibilitychange", ()=> {
            this.hidden === true ? this.hidden = false : this.hidden = true;
        });
        
    }

}

export default class DoubleCube {
    constructor(element, options = {}){
        this.wrapperEl = element;

        this.options = {
            rotateX: options.rotateX || -35.5,//deg
            rotateY: options.rotateY || 0,//deg
            rotation: options.rotation || 90,
            speed: options.speed || 3000,
            direction: options.direction || 'right'
        }

        this.outerCubeEl = createElement('figure','cube outer');
        this.innerCubeEl = createElement('figure','cube inner');


        this.outerCube = new Cube(this.outerCubeEl, this.options);
        this.innerCube = new Cube(this.innerCubeEl, this.options);

        this.wrapperEl.appendChild(this.outerCubeEl)
        this.wrapperEl.appendChild(this.innerCubeEl)
        

    }
}

