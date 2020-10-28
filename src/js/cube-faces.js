export function createElement (element,classes){
    const el = document.createElement(element)
        el.classList = classes;
    return el;
}

export default class Faces {
    constructor(){
        this.front = {
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
                topLeft: {
                    faceBorders: {
                        top: [1, 6, 1, 1],
                        right: [6, 6, 1, 1],
                        bottom: [6, 1, 1, 6],
                        left: [1, 1, 6, 6]
                    }
                },
                //TODO
                topRight: {
                 faceBorders: {
                        top: [1, 6, 1, 1],
                        right: [6, 6, 1, 1],
                        bottom: [6, 1, 1, 6],
                        left: [1, 1, 6, 6]
                    }
                },
                bottomLeft: {
                    faceBorders: {
                        top: [1, 6, 1, 1],
                        right: [6, 6, 1, 1],
                        bottom: [6, 1, 1, 6],
                        left: [1, 1, 6, 6]
                    }
                },
                bottomRight: {
                    faceBorders: {
                        top: [1, 6, 1, 1],
                        right: [6, 6, 1, 1],
                        bottom: [6, 1, 1, 6],
                        left: [1, 1, 6, 6]
                    }
                },
            
                
            },
            initialRotation: 'rotateX(0deg)',
            iteration: 0
        }
        this.bottom = {
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
                },
                topLeft: {
                    faceBorders: {
                        top: [1, 1, 1, 1],
                        right: [1, 6, 1, 1],
                        bottom: [1, 6, 1, 1],
                        left: [1, 1, 6, 1]
                    }
                },
                //TODO
                topRight: {
                    faceBorders: {
                        top: [1, 1, 1, 1],
                        right: [1, 6, 1, 1],
                        bottom: [1, 6, 1, 1],
                        left: [1, 1, 6, 1]
                    }
                },
                bottomLeft: {
                    faceBorders: {
                        top: [1, 1, 1, 1],
                        right: [1, 6, 1, 1],
                        bottom: [1, 6, 1, 1],
                        left: [1, 1, 6, 1]
                    }
                },
                bottomRight: {
                    faceBorders: {
                        top: [1, 1, 1, 1],
                        right: [1, 6, 1, 1],
                        bottom: [1, 6, 1, 1],
                        left: [1, 1, 6, 1]
                    } 
                },
                
            },
            initialRotation: 'rotateX(-90deg)',
            iteration: 0
        }
        this.top = {
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
                },
                topLeft: {
                    faceBorders: {
                        top: [6, 1, 1, 6],
                        right: [6, 1, 1, 1],
                        bottom: [1, 1, 6, 1],
                        left: [1, 6, 1, 6]
                    },
                },
                //TODO
                topRight: {
                    faceBorders: {
                        top: [6, 1, 1, 6],
                        right: [6, 1, 1, 1],
                        bottom: [1, 1, 6, 1],
                        left: [1, 6, 1, 6]
                    },
                },
                bottomLeft: {
                    faceBorders: {
                        top: [6, 1, 1, 6],
                        right: [6, 1, 1, 1],
                        bottom: [1, 1, 6, 1],
                        left: [1, 6, 1, 6]
                    },
                },
                bottomRight: {
                    faceBorders: {
                        top: [6, 1, 1, 6],
                        right: [6, 1, 1, 1],
                        bottom: [1, 1, 6, 1],
                        left: [1, 6, 1, 6]
                    },
                },
            },
            initialRotation: 'rotateX(90deg)',
            iteration: 0
        }
        this.left= {
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
                        top: [1, 6, 1, 1],
                        right: [1, 1, 1, 1],
                        bottom: [6, 1, 1, 6],
                        left: [6, 6, 1, 1]
                    }
                },
                topLeft: {
                    faceBorders: {
                        top: [1, 6, 1, 1],
                        right: [1, 1, 1, 1],
                        bottom: [6, 1, 1, 1],
                        left: [6, 6, 1, 1]
                    }
                },
                //TODO
                topRight: {
                    faceBorders: {
                        top: [1, 6, 1, 1],
                        right: [1, 1, 1, 1],
                        bottom: [6, 1, 1, 1],
                        left: [6, 6, 1, 1]
                    }
                },
                bottomLeft: {
                    faceBorders: {
                        top: [1, 6, 1, 1],
                        right: [1, 1, 1, 1],
                        bottom: [6, 1, 1, 1],
                        left: [6, 6, 1, 1]
                    }
                },
                bottomRight: {
                    faceBorders: {
                        top: [1, 6, 1, 1],
                        right: [1, 1, 1, 1],
                        bottom: [6, 1, 1, 1],
                        left: [6, 6, 1, 1]
                    }
                },
                
            },
            initialRotation: 'rotateY(-90deg)',
            iteration: 0
        }
        this.right= {
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
              }, 
              topLeft: {
                faceBorders: {
                    top: [1, 1, 6, 1],
                    right: [1, 1, 6, 6],
                    bottom: [1, 6, 1, 6],
                    left: [1, 1, 1, 1]
                }
              },
                //TODO
                topRight: {
                    top: [1, 1, 6, 1],
                    right: [1, 1, 6, 6],
                    bottom: [1, 6, 1, 6],
                    left: [1, 1, 1, 1]
                },
                bottomLeft: {
                    top: [1, 1, 6, 1],
                    right: [1, 1, 6, 6],
                    bottom: [1, 6, 1, 6],
                    left: [1, 1, 1, 1]
                },
                bottomRight: {
                    top: [1, 1, 6, 1],
                    right: [1, 1, 6, 6],
                    bottom: [1, 6, 1, 6],
                    left: [1, 1, 1, 1]
                },
              
              
              
            },
            initialRotation: 'rotateY(90deg)',
            iteration: 0
        }
        this.back= {
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
                },
                topLeft: {
                    faceBorders: {
                        top: [1, 1, 1, 1],
                        right: [1, 1, 1, 1],
                        bottom: [1, 1, 6, 1],
                        left: [1, 1, 1, 1]
                    }
                },
                //TODO
                topRight: {
                    faceBorders: {
                        top: [1, 1, 1, 1],
                        right: [1, 1, 1, 1],
                        bottom: [1, 1, 6, 1],
                        left: [1, 1, 1, 1]
                    }
                },
                bottomLeft: {
                    faceBorders: {
                        top: [1, 1, 1, 1],
                        right: [1, 1, 1, 1],
                        bottom: [1, 1, 6, 1],
                        left: [1, 1, 1, 1]
                    }
                },
                bottomRight: {
                    faceBorders: {
                        top: [1, 1, 1, 1],
                        right: [1, 1, 1, 1],
                        bottom: [1, 1, 6, 1],
                        left: [1, 1, 1, 1]
                    }
                },
            },
            initialRotation: 'rotateY(180deg)',
            iteration: 0
        }
    }
    
}