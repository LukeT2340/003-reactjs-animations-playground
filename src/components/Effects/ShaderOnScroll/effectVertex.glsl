float PI = 3.141592653589793;

uniform vec2 uResolution; // in pixel
uniform float uTime; // in s
uniform vec2 uCursor; // 0 (left) 0 (top) / 1 (right) 1 (bottom)
uniform float uScrollVelocity; // - (scroll up) / + (scroll down)
uniform sampler2D uTexture; // texture
uniform vec2 uTextureSize; // size of texture
uniform vec2 uQuadSize; // size of texture element
uniform float uBorderRadius; // pixel value
uniform float uMouseEnter; // 0 - 1 (enter) / 1 - 0 (leave)
uniform vec2 uMouseOverPos; // 0 (left) 0 (top) / 1 (right) 1 (bottom)

// random
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// contain
vec2 getContainUvFrag(vec2 uv, vec2 textureSize, vec2 quadSize) {
  vec2 tempUv = uv - vec2(0.5);

  float quadAspect = quadSize.x / quadSize.y;
  float textureAspect = textureSize.x / textureSize.y;

  if (quadAspect > textureAspect) {
    tempUv *= vec2(quadAspect / textureAspect, 1.0);
  } else {
    tempUv *= vec2(1.0, textureAspect / quadAspect);
  }

  tempUv += vec2(0.5);

  return tempUv;
}

// cover
vec2 getCoverUvVert(vec2 uv, vec2 textureSize, vec2 quadSize) {
  vec2 ratio = vec2(
    min((quadSize.x / quadSize.y) / (textureSize.x / textureSize.y), 1.0),
    min((quadSize.y / quadSize.x) / (textureSize.y / textureSize.x), 1.0)
  );

  return vec2(
    uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    uv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
}

vec2 getCoverUvFrag(vec2 uv, vec2 textureSize, vec2 quadSize) {
  vec2 tempUv = uv - vec2(0.5);

  float quadAspect = quadSize.x / quadSize.y;
  float textureAspect = textureSize.x / textureSize.y;

  if (quadAspect < textureAspect) {
    tempUv *= vec2(quadAspect / textureAspect, 1.0);
  } else {
    tempUv *= vec2(1.0, textureAspect / quadAspect);
  }

  tempUv += vec2(0.5);

  return tempUv;
}

// uv, rotation (in radians), mid (point to rotate around)
vec2 rotate(vec2 uv, float rotation, vec2 mid) {
  return vec2(
    cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
    cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
  );
}

out vec2 vUv;  // 0 (left) 0 (bottom) - 1 (top) 1 (right)
out vec2 vUvCover;


vec3 deformationCurve(vec3 position, vec2 uv) {
  position.y = position.y - (sin(uv.x * PI) * min(abs(uScrollVelocity), 5.0) * sign(uScrollVelocity) * -0.01);

  return position;
}

void main() {
  vUv = uv;
  vUvCover = getCoverUvVert(uv, uTextureSize, uQuadSize);

  vec3 deformedPosition = deformationCurve(position, vUvCover);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(deformedPosition, 1.0);
}
