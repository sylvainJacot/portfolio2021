const colors = {
    Yellow : "#F9CA1C",
    Red : "#FA2A62",
    Purple : "#5B2AFA",

    //----Neutral

    // Black : "#000000",
    DarkGrey : "#202a3d",
    DarkGrey2 : "#171e2b",

    // DarkGrey2 : "#7D7D7D",
    // LightGrey : "#C5C5C5",
    // LightGrey2 : "#e8e8e8",
    White : "#FFFFFF",

    //----Neutral Alpha
    White_10 : "hsla(0, 0%, 100%,0.1)",

    // OrangeSketch : "#EC6C00",
    // PinkSass : "#D1629A",
    // React : "#5ED3F3",

}


export const colorsRoles = {
    uiCol : colors.Yellow,
    frontCol : colors.Red,
    retouchCol : colors.Purple,

    //----Neutral Alpha
    White : colors.White,
    DarkGrey: colors.DarkGrey,
    DarkGrey2: colors.DarkGrey2,
    // DarkGrey2: colors.DarkGrey2,
    // LightGrey : colors.LightGrey,
    // LightGrey2: colors.LightGrey2,
    // Black: colors.Black,

    //----Neutral Alpha
    White_10 : colors.White_10,

    // Sketch: colors.OrangeSketch,
    // Sass: colors.PinkSass,
    // React: colors.React
}

export const gradients = {
    uiCol : `
    background-image: linear-gradient(0deg, ${colorsRoles.uiCol} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -webkit-background-image: linear-gradient(0deg, ${colorsRoles.uiCol} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -moz-background-image: linear-gradient(0deg, ${colorsRoles.uiCol} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -o-background-image: linear-gradient(0deg, ${colorsRoles.uiCol} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    `,
    frontCol : `
    background-image: linear-gradient(0deg, ${colorsRoles.frontCol} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -webkit-background-image: linear-gradient(0deg, ${colorsRoles.frontCol} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -moz-background-image: linear-gradient(0deg, ${colorsRoles.frontCol} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -o-background-image: linear-gradient(0deg, ${colorsRoles.frontCol} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    `,
    retouchCol : `
    background-image: linear-gradient(0deg, ${colorsRoles.retouchCol} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -webkit-background-image: linear-gradient(0deg, ${colorsRoles.retouchCol} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -moz-background-image: linear-gradient(0deg, ${colorsRoles.retouchCol} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -o-background-image: linear-gradient(0deg, ${colorsRoles.retouchCol} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    `,
    DarkGrey: `
    background-image: linear-gradient(-45deg, ${colorsRoles.DarkGrey} 0%, ${colorsRoles.DarkGrey2} 100%); opacity: 50%;
    -webkit-background-image: linear-gradient(-45deg, ${colorsRoles.DarkGrey} 0%, ${colorsRoles.DarkGrey2} 100%); opacity: 50%;
    -moz-background-image: linear-gradient(-45deg, ${colorsRoles.DarkGrey} 0%, ${colorsRoles.DarkGrey2} 100%); opacity: 50%;
    -o-background-image: linear-gradient(-45deg, ${colorsRoles.DarkGrey} 0%, ${colorsRoles.DarkGrey2} 100%); opacity: 50%;
    `,
    RadialBg1 : `
    background-image: radial-gradient(closest-side, ${colors.White} 0%, rgba(255,255,255,0.00) 100%); opacity 30%;
    -webkit-background-image: radial-gradient(closest-side, ${colors.White} 0%, rgba(255,255,255,0.00) 100%); opacity 30%;
    -moz-background-image: radial-gradient(closest-side, ${colors.White} 0%, rgba(255,255,255,0.00) 100%); opacity 30%;
    -o-background-image: radial-gradient(closest-side, ${colors.White} 0%, rgba(255,255,255,0.00) 100%); opacity 30%;
    `,
}