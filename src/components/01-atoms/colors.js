const colors = {
    Yellow : "#F9CA1C",
    Red : "#FA2A62",
    Purple : "#5B2AFA",

    //----Neutral

    // Black : "#000000",
    DarkGrey : "#202a3d",
    DarkGrey2 : "#171e2b",


    LightGrey : "hsla(219, 30.303030303030305%, 12.941176470588237%,0.1)",
    // LightGrey2 : "#e8e8e8",
    White : "#FFFFFF",

    //----Neutral Alpha
    White_10 : "hsla(0, 0%, 100%,0.1)",
    White_20 : "hsla(0, 0%, 100%,0.2)",
    White_30 : "hsla(0, 0%, 100%,0.3)",
    White_40 : "hsla(0, 0%, 100%,0.4)",
    White_50 : "hsla(0, 0%, 100%,0.5)",
    White_60 : "hsla(0, 0%, 100%,0.6)",
    White_70 : "hsla(0, 0%, 100%,0.7)",
    White_80 : "hsla(0, 0%, 100%,0.8)",

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
    LightGrey: colors.LightGrey,
    // DarkGrey2: colors.DarkGrey2,
    // LightGrey : colors.LightGrey,
    // LightGrey2: colors.LightGrey2,
    // Black: colors.Black,

    //----Neutral Alpha
    White_10 : colors.White_10,
    White_20 : colors.White_20,
    White_30 : colors.White_30,
    White_40 : colors.White_40,
    White_50 : colors.White_50,
    White_60 : colors.White_60,
    White_70 : colors.White_70,
    White_80 : colors.White_80,

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
    DarkGreyLeftToRight: `
    background-image: linear-gradient(90deg, ${colorsRoles.DarkGrey2} 0%, ${colorsRoles.DarkGrey} 100%);
    -webkit-background-image: linear-gradient(90deg, ${colorsRoles.DarkGrey2} 0%, ${colorsRoles.DarkGrey} 100%);
    -moz-background-image: linear-gradient(90deg, ${colorsRoles.DarkGrey2} 0%, ${colorsRoles.DarkGrey} 100%);
    -o-background-image: linear-gradient(90deg, ${colorsRoles.DarkGrey2} 0%, ${colorsRoles.DarkGrey} 100%);
    `,
    RadialBg1 : `
    background-image: radial-gradient(closest-side, ${colors.White} 0%, rgba(255,255,255,0.00) 100%); opacity 30%;
    -webkit-background-image: radial-gradient(closest-side, ${colors.White} 0%, rgba(255,255,255,0.00) 100%); opacity 30%;
    -moz-background-image: radial-gradient(closest-side, ${colors.White} 0%, rgba(255,255,255,0.00) 100%); opacity 30%;
    -o-background-image: radial-gradient(closest-side, ${colors.White} 0%, rgba(255,255,255,0.00) 100%); opacity 30%;
    `,
}


export const shadows = {
    shadowButton: `0px 0.5rem 1rem ${colorsRoles.DarkGrey}10`,
    shadowPicture: `0px 0.5rem 3rem ${colorsRoles.DarkGrey}30`,
}


export const projectColors = {
    Evergreen: "#6CCDAC",
    Samsung: "#1327a0",
    Kia : "#BB152B",
    Telenet : "#FFBA00",
    Clavie : "#205aa4",
    SoSmart : "#e31742",
    Parentreprise : "#6c3d8e",
}