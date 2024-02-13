// https://github.com/Simonwep/pickr
function init({ exc, props, container }) {
    const el = document.createElement("div")
    container.appendChild(el)
    exc('load(["https://z.zccdn.cn/vendor/colorpickr_1.8.2.css", "https://z.zccdn.cn/vendor/colorpickr_1.8.2.js"])', {}, () => {
        const pickr = Pickr.create({
            el,
            default: props.color,
            defaultRepresentation: "RGBA", // HEX, RGBA, HSVA, HSLA and CMYK
            theme: "nano",
            swatches: [
                "rgba(244, 67, 54, 1)",
                "rgba(233, 30, 99, 0.95)",
                "rgba(156, 39, 176, 0.9)",
                "rgba(103, 58, 183, 0.85)",
                "rgba(63, 81, 181, 0.8)",
                "rgba(33, 150, 243, 0.75)",
                "rgba(3, 169, 244, 0.7)",
                "rgba(0, 188, 212, 0.7)",
                "rgba(0, 150, 136, 0.75)",
                "rgba(76, 175, 80, 0.8)",
                "rgba(139, 195, 74, 0.85)",
                "rgba(205, 220, 57, 0.9)",
                "rgba(255, 235, 59, 0.95)",
                "rgba(255, 193, 7, 1)"
            ],
            components: {
                preview: true,
                opacity: true,
                hue: true,
                interaction: {
                    input: true,
                    clear: true,
                    save: true
                }
            },
            i18n: {
                "btn:save": "OK",
                "btn:clear": "清除"
            }
        })
        pickr.on("save", (color, instance) => {
            pickr.hide()
        })
    })
}

$plugin({
    id: "zp102",
    props: [{
        prop: "color",
        type: "exp",
        label: "默认颜色"
    }],
    init
})