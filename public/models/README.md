# 3D models

- `penalty-kick.min.glb` — **committed** Draco/WebP compressed Mixamo Ch28 + kick (~0.5MB). Used by `/lab`.
- `penalty-kick.glb` — optional local original (~113MB), gitignored.

Regenerate the compressed file:

```bash
cp "/Users/nathanalbe/Downloads/Soccer Penalty Kick (1).fbx.glb" public/models/penalty-kick.glb
npx @gltf-transform/cli optimize public/models/penalty-kick.glb public/models/penalty-kick.min.glb \
  --compress draco --texture-compress webp --texture-size 1024
```
