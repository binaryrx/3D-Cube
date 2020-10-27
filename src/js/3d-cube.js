const cubeWrapperEl = document.querySelector('.cube-wrapper');


class Cube {
    constructor(cubeEl,rX,rY,rDeg,speed){
        this.cubeEl = cubeEl;
        
        this.panels = {
            front: {
                element:  ( () => {
                    const div = document.createElement('div');
                    div.classList = 'cube__face panel-front';
                    return div;
                })(),
                faceBorders: {
                    top: [1, 1, 1, 1],
                    right: [6, 1, 1, 1],
                    bottom: [6, 1, 1, 6],
                    left: [1, 1, 1, 6]
                },
                iteration: 0
            },
            bottom: {
                element:  ( () => {
                    const div = document.createElement('div');
                    div.classList = 'cube__face panel-bottom';
                    return div;
                })(),
                faceBorders: {
                    top: [1, 1, 1, 1],
                    right: [1, 1, 1, 1],
                    bottom: [1, 1, 1, 1],
                    left: [1, 1, 1, 1]
                },
                iteration: 0
            },
        
            top: {
                element:  ( () => {
                    const div = document.createElement('div');
                    div.classList = 'cube__face panel-top';
                    return div;
                })(),
                faceBorders: {
                    top: [6, 1, 1, 6],
                    right: [6, 6, 1, 1],
                    bottom: [1, 6, 6, 1],
                    left: [1, 1, 6, 6]
                },
                iteration: 0
            },
            left: {
                element:  ( () => {
                    const div = document.createElement('div');
                    div.classList = 'cube__face panel-left';
                    return div;
                })(),
                faceBorders: {
                    top: [1, 1, 1, 1],
                    right: [1, 6, 1, 1],
                    bottom: [6, 6, 1, 1],
                    left: [6, 1, 1, 1]
                },
                iteration: 0

            },
            right: {
                element:  ( () => {
                    const div = document.createElement('div');
                    div.classList = 'cube__face panel-right';
                    return div;
                })(),
                faceBorders: {
                    top: [1, 1, 1, 1],
                    right: [1, 1, 1, 6],
                    bottom: [1, 1, 6, 6],
                    left: [1, 1, 6, 1]
                },
                iteration: 0
            },
            back: {
                element:  ( () => {
                    const div = document.createElement('div');
                    div.classList = 'cube__face panel-back';
                    return div;
                })(),
                faceBorders: {
                    top: [1, 1, 1, 1],
                    right: [1, 1, 6, 1],
                    bottom: [1, 6, 6, 1],
                    left: [1, 6, 1, 1]
                },
                iteration: 0
            },
           
           
        };
        this.rotateYStart = rY
        this.rotateX = rX;
        this.deg = rDeg;
        this.speed = speed
        this.hidden = false;

        this.render = this.renderCube();
        this.rotation = this.rotateCube(this.speed);

        // this.cubeEl.addEventListener('click',this.rotateCube)
        

    }

    renderCube = () => {
        const angles =  ["rotateX(0deg)", "rotateX(-90deg)", "rotateX(90deg)", "rotateY(-90deg)", "rotateY(90deg)", "rotateY(180deg)"]
        let index = 0;

        const width = getComputedStyle(document.body).getPropertyValue('--cube-container-width')

        


        for( pl in this.panels){
            const panel = this.panels[pl]

            if(this.cubeEl.classList.contains('outer')){
                // angles.map( (angle) => {
                    
                    panel.element.style.transform = `${angles[index]} translateZ(calc(${width}/4))`
                    index += 1;
                // })
                panel.element.style.borderTopWidth = `${panel.faceBorders.top[panel.iteration ]}px`;
                panel.element.style.borderRightWidth = `${panel.faceBorders.right[panel.iteration ]}px`;
                panel.element.style.borderBottomWidth = `${panel.faceBorders.bottom[panel.iteration ]}px`;
                panel.element.style.borderLeftWidth = `${panel.faceBorders.left[panel.iteration ]}px`;

                
            }else{
                panel.element.style.transform = `${angles[index]} translateZ(calc(${width}/8))`
                index += 1;
            }
            this.cubeEl.appendChild(panel.element);
           
        }
    }


    rotateCube = () => {
        
        setInterval( ()=>{
            

            if(this.hidden === false){

                this.cubeEl.style.transform = `rotateX(${this.rotateX}) rotateY(${this.rotateYStart += this.deg}deg) scale3d(1,1,1) rotateZ(0deg)`;

                this.rotated += this.deg;
                // console.log(roate)
                if(this.cubeEl.classList.contains('outer')){
                
                    const frontEl = this.panels.front.element;
                    // this.panelBorders()
                    // console.log(this.panels)
                    for( pl in this.panels){
                        const panel = this.panels[pl]
                        // console.log(panel.iteration)   

                        panel.iteration === 3 ? panel.iteration = 0 : panel.iteration += 1;

                        console.log('iter:' + panel.iteration)

                        panel.element.style.borderTopWidth = `${panel.faceBorders.top[panel.iteration]}px`;
                        panel.element.style.borderRightWidth = `${panel.faceBorders.right[panel.iteration]}px`;
                        panel.element.style.borderBottomWidth = `${panel.faceBorders.bottom[panel.iteration]}px`;
                        panel.element.style.borderLeftWidth = `${panel.faceBorders.left[panel.iteration]}px`;


                    }
                }
            }

        },this.speed)
        
        this.cubeEl.addEventListener("visibilitychange", ()=> {
            this.hidden === true ? this.hidden = false : this.hidden = true;
            console.log('hidden')
        });
                
    }


}

class DoubleCube {
    constructor(cubeWrapperEl){
        this.cubeWrapperEl = cubeWrapperEl;
        this.outerCubeEl = this.cubeWrapperEl.querySelector('.cube.outer');
        this.innerCubeEl = this.cubeWrapperEl.querySelector('.cube.inner');
        this.outerCube = new Cube(this.outerCubeEl,'-33.5deg',45,90,3000)
        this.innerCube = new Cube(this.innerCubeEl,'-33.5deg',45,-90,3000)
    }

}

const newCube = new DoubleCube(cubeWrapperEl)
console.log(newCube)
// console.log(newCube);
