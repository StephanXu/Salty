import 'echarts-gl'
import echarts from 'echarts'

class Salty {
    constructor(element, dots) {
        this.InitGraph(element, dots)
    }

    InitGraph(element, dots) {
        var myChart = echarts.init(element);
        var data = dots.concat();
        data = data.sort((lhs, rhs) => {
            return lhs[1] < rhs[1] || (lhs[1] == rhs[1] && lhs[0] < rhs[0]) ? -1 : 1;
        });
        myChart.setOption({
            tooltip: {},
            xAxis3D: {
                type: "value",
                min: 0,
                max: 3000
            },
            yAxis3D: {
                type: "value",
                min: 0,
                max: 1000
            },
            zAxis3D: {
                type: "value",
                min: 0,
                max: 500
            },
            visualMap: {
                min: 0,
                max: 500
                // inRange: {
                //   color: [
                //     "#313695",
                //     "#4575b4",
                //     "#74add1",
                //     "#abd9e9",
                //     "#e0f3f8",
                //     "#ffffbf",
                //     "#fee090",
                //     "#fdae61",
                //     "#f46d43",
                //     "#d73027",
                //     "#a50026"
                //   ]
                // }
            },
            grid3D: {
                boxWidth: 288,
                show: false,
                backgroundColor: "#fff",
                axisPointer: {
                    show: false
                },
                viewControl: {
                    distance: 100,
                    maxDistance: 500,
                    minDistance: 100,
                    alpha: 38,
                    beta: 220,
                    minAlpha: 25
                },
                postEffect: {
                    enable: true,
                    SSAO: {
                        enable: true,
                        intensity: 1.3,
                        radius: 5
                    },
                    screenSpaceReflection: {
                        enable: false
                    }
                },
                light: {
                    main: {
                        intensity: 1,
                        shadow: true,
                        shadowQuality: "ultra",
                        alpha: 30
                    },
                    ambient: {
                        intensity: 0
                    },
                    ambientCubemap: {
                        texture: "canyon.hdr",
                        exposure: 2,
                        diffuseIntensity: 1,
                        specularIntensity: 1
                    }
                }
            },
            series: [{
                    type: "surface",
                    silent: true,
                    wireframe: {
                        show: false
                    },
                    shading: "realistic",
                    realisticMaterial: {
                        detailTexture: "snowdrift1_albedo.png",
                        roughness: "snowdrift1_ao.png",
                        normalTexture: "snowdrift1_Normal-ogl.png",
                        textureTiling: [4, 2]
                    },
                    itemStyle: {
                        color: "#fff"
                    },
                    data: data
                },
                {
                    type: "surface",
                    silent: true,
                    wireframe: {
                        show: false
                    },
                    shading: "realistic",
                    realisticMaterial: {
                        detailTexture: "granite-gray-white-albedo.png",
                        roughness: "granite-gray-white-ao.png",
                        normalTexture: "granite-gray-white-Normal-ogl.png",
                        textureTiling: [4, 2]
                    },
                    itemStyle: {
                        color: "#300"
                    },
                    equation: {
                        x: {
                            step: 100,
                            min: -10000,
                            max: 10000
                        },
                        y: {
                            step: 100,
                            min: -10000,
                            max: 10000
                        },
                        z: function () {
                            return 0;
                        }
                    }
                }
            ]
        });
    }
}

export default Salty;