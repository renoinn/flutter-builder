import { Opacity, Widget } from "@bridged.xyz/flutter-builder"

const prebuilt = Widget.prebuilt("UndifinedCustomWidget()")


const opacity = new Opacity({
    opacity: 0.0,
    child: prebuilt
})

console.log(opacity.build().finalize())
