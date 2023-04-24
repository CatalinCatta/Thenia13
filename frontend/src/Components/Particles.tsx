import Particles from "react-tsparticles";
import {Engine} from "tsparticles-engine";
import {loadSlim} from "tsparticles-slim";
import React, {useCallback, useMemo} from "react";

const ParticlesComponent = (props: { id: string }) => {
    const options = useMemo(() => {
        return {
            autoPlay: true,
            background: {
                color: "#000",
            },
            fullScreen: {
                enable: true,
                zIndex: -1,
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    repulse: {
                        distance: 100,
                    },
                },
            },
            particles: {
                number: {
                    value: 150
                },
                links: {
                    enable: true,
                    distance: 200,
                    color: {
                        value: "#76d01e"
                    },
                },
                move: {
                    enable: true,
                    speed: {min: 1, max: 5},
                },
                opacity: {
                    value: {min: 0.1, max: 1},
                },
                size: {
                    value: {min: 1, max: 5},
                },
                color: {
                    value: "#76d01e"
                },
            },
        };
    }, []);

    const particlesInit = useCallback((engine: Engine) => {
        loadSlim(engine);
    }, []);

    // @ts-ignore
    return <Particles id={props.id} init={particlesInit} options={options}/>;
};

export default ParticlesComponent;