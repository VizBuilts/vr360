# Napco VizBuilts 360 (YouTube Wrapper)

A lightweight YouTube 360 viewing wrapper for use with VizBuilts QR codes.

This viewer allows users to:

* Open a YouTube 360 video
* Jump to a specific timestamp
* Restore a saved viewing direction
* View project spaces using QR codes

---

# Example URL

```text
https://YOURNAME.github.io/REPO/?video=VIDEO_ID&t=18&yaw=90&pitch=-7&roll=0&fov=80
```

---

# Supported Parameters

| Parameter | Description                  |
| --------- | ---------------------------- |
| `video`   | YouTube video ID             |
| `t`       | Time in seconds              |
| `yaw`     | Horizontal viewing direction |
| `pitch`   | Vertical viewing angle       |
| `roll`    | Camera tilt                  |
| `fov`     | Field of view                |

---

# GitHub Pages Setup

1. Upload:

* `index.html`
* `README.md`

2. Go to:

```text
Repository → Settings → Pages
```

3. Set:

* Source: `Deploy from a branch`
* Branch: `main`
* Folder: `/root`

4. Save and wait several minutes for publishing.

---

# QR Code Workflow

QR codes can launch directly into:

* a specific video
* a specific timestamp
* a specific viewing direction

Example:

```text
https://YOURNAME.github.io/REPO/?video=zxZBpxrye3o&t=8.36&yaw=88.1&pitch=-7&roll=0&fov=80
```

---

# Notes

This project uses YouTube's IFrame API and spherical video controls.

Behavior may vary slightly depending on:

* browser
* mobile device
* operating system
* YouTube player updates

Desktop Chrome generally provides the best experience.

---

# Napco VizBuilts

Developed for VizBuilts interactive viewing and QR-linked 360 navigation workflows.
