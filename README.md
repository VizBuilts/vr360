# Napco VizBuilts 360

A GitHub Pages-compatible PWA for QR-linked YouTube 360 viewing.

This version uses YouTube as the video source, but provides custom controls underneath the viewing window so the user does not need to rely on YouTube's embedded drag/touch 360 controls.

## QR URL Format

```text
https://vizbuilts.github.io/vr360/?video=VIDEO_ID&t=2.7&yaw=176&pitch=0&roll=0&fov=80
```

## Files

- `index.html`
- `manifest.webmanifest`
- `sw.js`
- `icon-192.png`
- `icon-512.png`
- `favicon.png`

## Notes

The PWA shell can install on a user's device, but the YouTube version requires an internet connection to stream the video and use the YouTube IFrame API.

For fully offline and fully controlled mobile interaction, a future Three.js self-hosted equirectangular video viewer is recommended.


## V2 Notes

- Adds a mobile/iPhone guidance overlay explaining Safari **aA → Request Desktop Website**.
- Adds buttons to copy or reload the same QR/viewer link.
- Inverts left/right yaw controls so the external controls feel more natural for the current YouTube viewpoint behavior.
