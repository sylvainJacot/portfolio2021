import { keyframes } from "styled-components"

export const transitions = {
    easeOut3ms : "all 0.3s ease-out",
    easeOut4ms : "all 0.4s ease-out",
    easeOut6ms : "all 0.6s ease-out",
    easeIn3ms : "all 0.3s ease-in"
}

const bounceIn = keyframes`
    0%{
    opacity: 0.8;
    transform: scale(0.8);
    transform-origin: center center;
    }
    50%{
    opacity: 0.9;
    transform: scale(1.1);
    transform-origin: center center;
    }
    80%{
    opacity: 1;
    transform: scale(0.89);
    transform-origin: center center;
    }
    100%{
    opacity: 1;
    transform: scale(1);
    transform-origin: center center;
    }
`

const leftRotate = keyframes`
    0%{
        transform: rotate(0deg);
        transform-origin: center center;
    }
    50%{
        transform: rotate(-16deg);
        transform-origin: center center;
    }
    100%{
        transform: rotate(0deg);
        transform-origin: center center;
    }
`

export const animations = {
    bounceIn : bounceIn,
    leftRotate : leftRotate,
}

