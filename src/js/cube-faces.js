export function createElement (element,classes){
    const el = document.createElement(element)
        el.classList = classes;
    return el;
}



// const thicBorder = 6;
// const thinBorder = 1;


export default class Faces {
    constructor(thinBorder = 1, thicBorder = 6) {
        this.front = {
            el: createElement('section', 'cube__face face__front'),
            directionalBorder: {
                left: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thinBorder, thinBorder],
                        right: [thicBorder, thinBorder, thinBorder, thinBorder],
                        bottom: [thicBorder, thinBorder, thinBorder, thicBorder],
                        left: [thinBorder, thinBorder, thinBorder, thicBorder]
                    }
                },
                right: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thinBorder, thinBorder],
                        right: [thicBorder, thinBorder, thinBorder, thinBorder],
                        bottom: [thicBorder, thicBorder, thinBorder, thinBorder],
                        left: [thinBorder, thicBorder, thinBorder, thicBorder]
                    }
                },
                topRight: {
                    faceBorders: {
                        top: [thinBorder, thicBorder, thicBorder, thinBorder],
                        right: [thicBorder, thicBorder, thinBorder, thinBorder],
                        bottom: [thicBorder, thinBorder, thinBorder, thicBorder],
                        left: [thinBorder, thinBorder, thicBorder, thicBorder]
                    }
                },
                topLeft: {
                 faceBorders: {
                        top: [thinBorder, thicBorder, thinBorder, thinBorder],
                        right: [thicBorder, thicBorder, thinBorder, thinBorder],
                        bottom: [thicBorder, thinBorder, thinBorder, thinBorder],
                        left: [thinBorder, thinBorder, thinBorder, thinBorder]
                    }
                },
                bottomLeft: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thicBorder, thicBorder],
                        right: [thicBorder, thinBorder, thinBorder, thicBorder],
                        bottom: [thicBorder, thicBorder, thinBorder, thinBorder],
                        left: [thinBorder, thicBorder, thicBorder, thinBorder]
                    }
                },
                bottomRight: {
                    faceBorders: {
                        top: [thinBorder, thicBorder, thinBorder, thicBorder],
                        right: [thicBorder, thinBorder, thinBorder, thicBorder],
                        bottom: [thicBorder, thinBorder, thinBorder, thinBorder],
                        left: [thinBorder, thinBorder, thicBorder, thinBorder]
                    }
                },
            },
            initialRotation: 'rotateX(0deg)',
            iteration: 0
        }
        this.bottom = {
            el: createElement('section', 'cube__face face__bottom'),
            directionalBorder: {
                left:{
                    faceBorders: {
                        top: [thinBorder, thinBorder, thinBorder, thinBorder],
                        right: [thinBorder, thinBorder, thinBorder, thinBorder],
                        bottom: [thinBorder, thinBorder, thinBorder, thinBorder],
                        left: [thinBorder, thinBorder, thinBorder, thinBorder]
                    }
                },
                right: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thinBorder, thinBorder],
                        right: [thinBorder, thinBorder, thinBorder, thinBorder],
                        bottom: [thinBorder, thinBorder, thinBorder, thinBorder],
                        left: [thinBorder, thinBorder, thinBorder, thinBorder]
                    }
                },
                topRight: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thinBorder, thinBorder],
                        right: [thinBorder, thicBorder, thinBorder, thinBorder],
                        bottom: [thinBorder, thicBorder, thicBorder, thinBorder],
                        left: [thinBorder, thinBorder, thicBorder, thinBorder]
                    }
                },
                topLeft: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thicBorder, thinBorder],
                        right: [thinBorder, thicBorder, thicBorder, thinBorder],
                        bottom: [thinBorder, thicBorder, thinBorder, thinBorder],
                        left: [thinBorder, thinBorder, thinBorder, thinBorder]
                    }
                },
                bottomLeft: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thinBorder, thinBorder],
                        right: [thinBorder, thicBorder, thinBorder, thicBorder],
                        bottom: [thinBorder, thinBorder, thicBorder, thicBorder],
                        left: [thinBorder, thinBorder, thicBorder, thinBorder]
                    }
                },
                bottomRight: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thicBorder, thinBorder],
                        right: [thinBorder, thinBorder, thicBorder, thicBorder],
                        bottom: [thinBorder, thinBorder, thinBorder, thicBorder],
                        left: [thinBorder, thinBorder, thinBorder, thinBorder]
                    } 
                },
            },
            initialRotation: 'rotateX(-90deg)',
            iteration: 0
        }
        this.top = {
            el: createElement('section', 'cube__face face__top'),
            directionalBorder: {
                left: {
                    faceBorders: {
                        top: [thicBorder, thinBorder, thinBorder, thicBorder],
                        right: [thicBorder, thicBorder, thinBorder, thinBorder],
                        bottom: [thinBorder, thicBorder, thicBorder, thinBorder],
                        left: [thinBorder, thinBorder, thicBorder, thicBorder]
                    },
                },
                right: {
                    faceBorders: {
                        top: [thicBorder, thicBorder, thinBorder, thinBorder],
                        right: [thicBorder, thinBorder, thinBorder, thicBorder],
                        bottom: [thinBorder, thinBorder, thicBorder, thicBorder],
                        left: [thinBorder, thicBorder, thicBorder, thinBorder]
                    },
                },
                topRight: {
                    faceBorders: {
                        top: [thicBorder, thinBorder, thinBorder, thicBorder],
                        right: [thicBorder, thinBorder, thinBorder, thinBorder],
                        bottom: [thinBorder, thinBorder, thicBorder, thinBorder],
                        left: [thinBorder, thicBorder, thinBorder, thicBorder]
                    },
                },
                topLeft: {
                    faceBorders: {
                        top: [thicBorder, thinBorder, thinBorder, thinBorder],
                        right: [thicBorder, thinBorder, thinBorder, thicBorder],
                        bottom: [thinBorder, thinBorder, thinBorder, thicBorder],
                        left: [thinBorder, thicBorder, thinBorder, thinBorder]
                    },
                },
                bottomLeft: {
                    faceBorders: {
                        top: [thicBorder, thicBorder, thinBorder, thinBorder],
                        right: [thicBorder, thinBorder, thinBorder, thinBorder],
                        bottom: [thinBorder, thinBorder, thicBorder, thinBorder],
                        left: [thinBorder, thicBorder, thinBorder, thicBorder]
                    },
                },
                bottomRight: {
                    faceBorders: {
                        top: [thicBorder, thinBorder, thinBorder, thinBorder],
                        right: [thicBorder, thicBorder, thinBorder, thinBorder],
                        bottom: [thinBorder, thicBorder, thinBorder, thinBorder],
                        left: [thinBorder, thinBorder, thinBorder, thinBorder]
                    },
                },
            },
            initialRotation: 'rotateX(90deg)',
            iteration: 0
        }
        this.left= {
            el: createElement('section', 'cube__face face__left'), 
            directionalBorder: {
                left: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thinBorder, thinBorder],
                        right: [thinBorder, thicBorder, thinBorder, thinBorder],
                        bottom: [thicBorder, thicBorder, thinBorder, thinBorder],
                        left: [thicBorder, thinBorder, thinBorder, thinBorder]
                    }
                },
                right: {
                    faceBorders: {
                        top: [thinBorder, thicBorder, thinBorder, thinBorder],
                        right: [thinBorder, thinBorder, thinBorder, thicBorder],
                        bottom: [thicBorder, thinBorder, thinBorder, thicBorder],
                        left: [thicBorder, thinBorder, thinBorder, thinBorder]
                    }
                },
                topLeft: {
                    faceBorders: {
                        top: [thinBorder, thicBorder, thicBorder, thinBorder],
                        right: [thinBorder, thinBorder, thicBorder, thicBorder],
                        bottom: [thicBorder, thinBorder, thinBorder, thicBorder],
                        left: [thicBorder, thicBorder, thinBorder, thinBorder]
                    }
                },
                topRight: {
                    faceBorders: {
                        top: [thinBorder, thicBorder, thinBorder, thinBorder],
                        right: [thinBorder, thinBorder, thinBorder, thinBorder],
                        bottom: [thicBorder, thinBorder, thinBorder, thinBorder],
                        left: [thicBorder, thicBorder, thinBorder, thinBorder]
                    }
                },
                bottomLeft: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thinBorder, thicBorder],
                        right: [thinBorder, thinBorder, thinBorder, thinBorder],
                        bottom: [thicBorder, thinBorder, thinBorder, thinBorder],
                        left: [thicBorder, thinBorder, thinBorder, thicBorder]
                    }
                },
                bottomRight: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thicBorder, thicBorder],
                        right: [thinBorder, thicBorder, thicBorder, thinBorder],
                        bottom: [thicBorder, thicBorder, thinBorder, thinBorder],
                        left: [thicBorder, thinBorder, thinBorder, thicBorder]
                    }
                },
            },
            initialRotation: 'rotateY(-90deg)',
            iteration: 0
        }
        this.right= {
            el: createElement('section', 'cube__face face__right'), 
            directionalBorder: {
                left: {
                faceBorders: {
                    top: [thinBorder, thinBorder, thinBorder, thinBorder],
                    right: [thinBorder, thinBorder, thinBorder, thicBorder],
                    bottom: [thinBorder, thinBorder, thicBorder, thicBorder],
                    left: [thinBorder, thinBorder, thicBorder, thinBorder]
                }
              },
              right: {
                faceBorders: {
                    top: [thinBorder, thinBorder, thinBorder, thinBorder],
                    right: [thinBorder, thicBorder, thinBorder, thicBorder],
                    bottom: [thinBorder, thicBorder, thicBorder, thinBorder],
                    left: [thinBorder, thinBorder, thicBorder, thinBorder]
                }
              }, 
              topRight: {
                faceBorders: {
                    top: [thinBorder, thinBorder, thicBorder, thinBorder],
                    right: [thinBorder, thinBorder, thicBorder, thicBorder],
                    bottom: [thinBorder, thicBorder, thinBorder, thicBorder],
                    left: [thinBorder, thinBorder, thinBorder, thinBorder]
                }
              },
              topLeft: {
                faceBorders: {
                    top: [thinBorder, thinBorder, thinBorder, thinBorder],
                    right: [thinBorder, thinBorder, thicBorder, thicBorder],
                    bottom: [thinBorder, thicBorder, thinBorder, thinBorder],
                    left: [thinBorder, thinBorder, thinBorder, thinBorder]
                }
              },
              bottomLeft: {
                faceBorders: {
                    top: [thinBorder, thinBorder, thicBorder, thinBorder],
                    right: [thinBorder, thicBorder, thicBorder, thinBorder],
                    bottom: [thinBorder, thicBorder, thinBorder, thicBorder],
                    left: [thinBorder, thinBorder, thinBorder, thinBorder]
                }
              },
              bottomRight: {
                faceBorders: {
                    top: [thinBorder, thinBorder, thinBorder, thinBorder],
                    right: [thinBorder, thinBorder, thinBorder, thinBorder],
                    bottom: [thinBorder, thinBorder, thinBorder, thinBorder],
                    left: [thinBorder, thinBorder, thinBorder, thinBorder]
                }
              },
              
            },
            initialRotation: 'rotateY(90deg)',
            iteration: 0
        }
        this.back= {
            el: createElement('section', 'cube__face face__back'),
            directionalBorder: {
                left: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thinBorder, thinBorder],
                        right: [thinBorder, thinBorder, thicBorder, thinBorder],
                        bottom: [thinBorder, thicBorder, thicBorder, thinBorder],
                        left: [thinBorder, thicBorder, thinBorder, thinBorder]
                    }
                },
                right: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thinBorder, thinBorder],
                        right: [thinBorder, thinBorder, thicBorder, thinBorder],
                        bottom: [thinBorder, thinBorder, thicBorder, thicBorder],
                        left: [thinBorder, thinBorder, thinBorder, thicBorder]
                    }
                },
                topRight: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thinBorder, thinBorder],
                        right: [thinBorder, thinBorder, thinBorder, thinBorder],
                        bottom: [thinBorder, thinBorder, thicBorder, thinBorder],
                        left: [thinBorder, thinBorder, thinBorder, thinBorder]
                    }
                },
                topLeft: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thicBorder, thinBorder],
                        right: [thinBorder, thinBorder, thinBorder, thinBorder],
                        bottom: [thinBorder, thinBorder, thinBorder, thicBorder],
                        left: [thinBorder, thinBorder, thicBorder, thicBorder]
                    }
                },
                bottomLeft: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thinBorder, thinBorder],
                        right: [thinBorder, thinBorder, thinBorder, thicBorder],
                        bottom: [thinBorder, thinBorder, thicBorder, thicBorder],
                        left: [thinBorder, thicBorder, thinBorder, thinBorder]
                    }
                },
                bottomRight: {
                    faceBorders: {
                        top: [thinBorder, thinBorder, thicBorder, thinBorder],
                        right: [thinBorder, thinBorder, thinBorder, thinBorder],
                        bottom: [thinBorder, thicBorder, thinBorder, thinBorder],
                        left: [thinBorder, thicBorder, thicBorder, thinBorder]
                    }
                },
            },
            initialRotation: 'rotateY(180deg)',
            iteration: 0
        }
    }
    
}