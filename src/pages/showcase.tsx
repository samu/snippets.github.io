import { CSSProperties, useState } from "react";
import { IPhoneX } from "../common/components/IPhoneX/IPhoneX";
import { ThemeImage } from "../common/components/ThemeImage/ThemeImage";
import styles from "./showcase.module.css";

const FULL_SCENE_HEIGHT = 2777;
const MOBILE_SCENE_WIDTH = 1284 / 4;
const LARGE_SCENE_WIDTH = 1284;

type Scene = {
  id: string;
  label: string;
  kicker: string;
  title: string;
  viewportWidth?: number;
  layout?: "full" | "peek" | "desktop";
  imageVariant?: "light" | "dark";
  lightSrc: string;
  darkSrc: string;
  alt: string;
  theme: CSSProperties;
};

const scenes: Scene[] = [
  {
    id: "editor",
    label: "Focused Writing",
    kicker: "Write anywhere",
    title: "Capture ideas before they disappear.",
    viewportWidth: 432,
    imageVariant: "dark",
    lightSrc: require("@site/static/media/mobile-editor-light.png").default,
    darkSrc: require("@site/static/media/mobile-editor-dark.png").default,
    alt: "Snippets mobile editor",
    theme: {
      "--scene-background":
        "linear-gradient(160deg, #fff5ea 0%, #f6e0cb 45%, #d7b18b 100%)",
      "--scene-glow":
        "radial-gradient(circle at 20% 15%, rgba(255, 255, 255, 0.78), transparent 34%)",
      "--scene-panel-border": "rgba(129, 84, 36, 0.2)",
      "--scene-text": "#5b3110",
      "--scene-muted": "rgba(91, 49, 16, 0.72)",
      "--scene-title-size": "26.88em",
      "--scene-button": "rgba(255, 248, 240, 0.72)",
      "--scene-button-border": "rgba(129, 84, 36, 0.2)",
      "--scene-button-active": "#7a4a1f",
      "--scene-button-active-text": "#fff8f2",
      "--scene-chip": "rgba(255, 250, 244, 0.78)",
      "--scene-chip-border": "rgba(129, 84, 36, 0.22)",
      "--device-drop-shadow":
        "drop-shadow(0 28px 56px rgba(136, 78, 31, 0.24))",
      "--device-shell-highlight": "#d5a071",
      "--device-shell": "#8c5228",
      "--device-shell-deep": "#5f3316",
      "--device-rim-light": "rgba(255, 242, 229, 0.42)",
      "--device-rim-dark": "rgba(78, 42, 17, 0.55)",
      "--device-detail": "#5b3110",
      "--device-slider": "rgba(74, 39, 14, 0.92)",
      "--device-button": "#72401b",
      "--device-screen-bezel": "#160d07",
      "--device-screen-frame": "rgba(54, 27, 8, 0.75)",
    } as CSSProperties,
  },
  {
    id: "search",
    label: "Instant Recall",
    kicker: "Find anything",
    title: "Search your notes in seconds.",
    viewportWidth: 432,
    imageVariant: "light",
    lightSrc: require("@site/static/media/mobile-search.png").default,
    darkSrc: require("@site/static/media/mobile-search.png").default,
    alt: "Snippets mobile search",
    theme: {
      "--scene-background":
        "linear-gradient(160deg, #eff9ff 0%, #d6eeff 42%, #8dbdd8 100%)",
      "--scene-glow":
        "radial-gradient(circle at 75% 18%, rgba(255, 255, 255, 0.88), transparent 32%)",
      "--scene-panel-border": "rgba(16, 90, 125, 0.18)",
      "--scene-text": "#0d4662",
      "--scene-muted": "rgba(13, 70, 98, 0.75)",
      "--scene-button": "rgba(248, 253, 255, 0.72)",
      "--scene-button-border": "rgba(16, 90, 125, 0.18)",
      "--scene-button-active": "#0f6f97",
      "--scene-button-active-text": "#f5fcff",
      "--scene-chip": "rgba(248, 253, 255, 0.74)",
      "--scene-chip-border": "rgba(16, 90, 125, 0.18)",
      "--device-drop-shadow":
        "drop-shadow(0 28px 56px rgba(19, 112, 154, 0.24))",
      "--device-shell-highlight": "#8dc6de",
      "--device-shell": "#4b8baa",
      "--device-shell-deep": "#24526c",
      "--device-rim-light": "rgba(236, 250, 255, 0.4)",
      "--device-rim-dark": "rgba(27, 61, 78, 0.55)",
      "--device-detail": "#163d51",
      "--device-slider": "rgba(18, 51, 67, 0.92)",
      "--device-button": "#2c6782",
      "--device-screen-bezel": "#091721",
      "--device-screen-frame": "rgba(10, 30, 42, 0.72)",
    } as CSSProperties,
  },
  {
    id: "navigation",
    label: "Everyday Flow",
    kicker: "Stay organized",
    title: "Keep your notebook beautifully structured.",
    viewportWidth: 432,
    imageVariant: "light",
    lightSrc: require("@site/static/media/mobile-navigation-view.png").default,
    darkSrc: require("@site/static/media/mobile-navigation-view.png").default,
    alt: "Snippets mobile navigation",
    theme: {
      "--scene-background":
        "linear-gradient(165deg, #effcea 0%, #d6f0cf 42%, #8db783 100%)",
      "--scene-glow":
        "radial-gradient(circle at 18% 18%, rgba(255, 255, 255, 0.82), transparent 34%)",
      "--scene-panel-border": "rgba(43, 97, 43, 0.16)",
      "--scene-text": "#204b21",
      "--scene-muted": "rgba(32, 75, 33, 0.72)",
      "--scene-title-size": "26.88em",
      "--scene-button": "rgba(248, 255, 246, 0.72)",
      "--scene-button-border": "rgba(43, 97, 43, 0.16)",
      "--scene-button-active": "#3f7c43",
      "--scene-button-active-text": "#f8fff7",
      "--scene-chip": "rgba(250, 255, 248, 0.74)",
      "--scene-chip-border": "rgba(43, 97, 43, 0.18)",
      "--device-drop-shadow":
        "drop-shadow(0 28px 56px rgba(51, 110, 47, 0.22))",
      "--device-shell-highlight": "#8db784",
      "--device-shell": "#537e52",
      "--device-shell-deep": "#2f4f2f",
      "--device-rim-light": "rgba(241, 252, 239, 0.38)",
      "--device-rim-dark": "rgba(33, 58, 34, 0.54)",
      "--device-detail": "#274327",
      "--device-slider": "rgba(28, 51, 29, 0.92)",
      "--device-button": "#406940",
      "--device-screen-bezel": "#0b150b",
      "--device-screen-frame": "rgba(16, 31, 15, 0.72)",
    } as CSSProperties,
  },
  {
    id: "quick-add",
    label: "Quick Capture",
    kicker: "Add in a flash",
    title: "Drop fresh notes into your day.",
    viewportWidth: 432,
    layout: "peek",
    imageVariant: "dark",
    lightSrc: require("@site/static/media/mobile-editor-light.png").default,
    darkSrc: require("@site/static/media/mobile-editor-dark.png").default,
    alt: "Snippets mobile editor",
    theme: {
      "--scene-background":
        "linear-gradient(165deg, #fff0f0 0%, #f3c6c8 40%, #c95963 100%)",
      "--scene-glow":
        "radial-gradient(circle at 78% 16%, rgba(255, 255, 255, 0.88), transparent 30%)",
      "--scene-panel-border": "rgba(144, 41, 55, 0.16)",
      "--scene-text": "#6e1824",
      "--scene-muted": "rgba(110, 24, 36, 0.7)",
      "--scene-title-size": "37.6em",
      "--scene-button": "rgba(255, 246, 246, 0.72)",
      "--scene-button-border": "rgba(144, 41, 55, 0.16)",
      "--scene-button-active": "#bf394c",
      "--scene-button-active-text": "#fff7f8",
      "--scene-chip": "rgba(255, 247, 247, 0.74)",
      "--scene-chip-border": "rgba(144, 41, 55, 0.18)",
      "--device-drop-shadow":
        "drop-shadow(0 36px 60px rgba(157, 49, 66, 0.24))",
      "--device-shell-highlight": "#dc7b84",
      "--device-shell": "#b53e4f",
      "--device-shell-deep": "#741b28",
      "--device-rim-light": "rgba(255, 234, 236, 0.42)",
      "--device-rim-dark": "rgba(90, 18, 30, 0.55)",
      "--device-detail": "#651320",
      "--device-slider": "rgba(85, 16, 29, 0.92)",
      "--device-button": "#8d2434",
      "--device-screen-bezel": "#180407",
      "--device-screen-frame": "rgba(65, 8, 16, 0.72)",
      "--scene-bottom-shadow":
        "linear-gradient(180deg, rgba(56, 5, 12, 0) 0%, rgba(73, 8, 18, 0.22) 38%, rgba(62, 6, 15, 0.64) 72%, rgba(28, 2, 7, 0.96) 100%)",
    } as CSSProperties,
  },
  {
    id: "desktop-store",
    label: "Lemon Squeezy",
    kicker: "Desktop overview",
    title: "Note taking that grows with you",
    viewportWidth: 880,
    layout: "desktop",
    lightSrc: require("@site/static/media/journal-light.png").default,
    darkSrc: require("@site/static/media/journal-dark.png").default,
    alt: "Snippets journaling and habit tracking",
    theme: {
      "--scene-background":
        "linear-gradient(165deg, #eef6ff 0%, #cfe3ff 42%, #7ea7ec 100%)",
      "--scene-pattern":
        "repeating-linear-gradient(-35deg, rgba(38, 96, 176, 0.18) 0 8px, rgba(38, 96, 176, 0) 8px 22px)",
      "--scene-pattern-size": "auto",
      "--scene-pattern-position": "0 0",
      "--scene-glow":
        "radial-gradient(circle at 78% 14%, rgba(246, 251, 255, 0.42), transparent 22%)",
      "--scene-panel-border": "rgba(31, 76, 146, 0.16)",
      "--scene-text": "#15335c",
      "--scene-muted": "rgba(21, 51, 92, 0.72)",
      "--scene-title-size": "28.8em",
      "--scene-title-highlight-text": "#1f5fc5",
      "--scene-title-underline": "#69a7ff",
      "--scene-button": "rgba(246, 251, 255, 0.72)",
      "--scene-button-border": "rgba(31, 76, 146, 0.18)",
      "--scene-button-active": "#1f5fc5",
      "--scene-button-active-text": "#f5f9ff",
      "--scene-chip": "rgba(247, 251, 255, 0.78)",
      "--scene-chip-border": "rgba(31, 76, 146, 0.18)",
      "--scene-screenshot-aspect": "11 / 8",
      "--scene-desktop-shell-highlight": "#4b5565",
      "--scene-desktop-shell": "#151922",
      "--scene-desktop-shell-deep": "#06080d",
      "--scene-desktop-rim-light": "rgba(255, 255, 255, 0.08)",
      "--scene-desktop-rim-dark": "rgba(0, 0, 0, 0.34)",
      "--scene-desktop-screen-frame": "rgba(255, 255, 255, 0.06)",
      "--scene-desktop-screen-inset-shadow":
        "inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 16px 24px rgba(0, 0, 0, 0.22), inset 0 -12px 18px rgba(0, 0, 0, 0.16)",
      "--scene-screenshot-shadow":
        "0 52px 120px rgba(15, 23, 42, 0.3), 0 22px 44px rgba(15, 23, 42, 0.2)",
      "--scene-screenshot-sheen":
        "linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.06) 18%, rgba(255, 255, 255, 0) 40%)",
      "--scene-screenshot-halo":
        "radial-gradient(circle at center, rgba(156, 198, 255, 0.34) 0%, rgba(110, 166, 255, 0.14) 34%, rgba(110, 166, 255, 0) 72%)",
    } as CSSProperties,
  },
];

export default function Showcase() {
  const [activeSceneId, setActiveSceneId] = useState(scenes[0].id);
  const [isFullWidth, setIsFullWidth] = useState(false);
  const activeScene =
    scenes.find((scene) => scene.id === activeSceneId) ?? scenes[0];
  const isPeekScene = activeScene.layout === "peek";
  const isDesktopScene = activeScene.layout === "desktop";
  const authoredWidth =
    activeScene.viewportWidth ?? (isDesktopScene ? 880 : 432);
  const designWidth = isDesktopScene ? authoredWidth : 1284;
  const designHeight = isDesktopScene
    ? designWidth * (3 / 4)
    : FULL_SCENE_HEIGHT;
  const targetWidth = isDesktopScene
    ? authoredWidth
    : isFullWidth
      ? LARGE_SCENE_WIDTH
      : MOBILE_SCENE_WIDTH;
  const viewportStyle = {
    ...activeScene.theme,
    "--scene-design-width": String(designWidth),
    "--scene-design-height": String(designHeight),
    "--scene-target-width-px": `${targetWidth}px`,
    "--scene-layout-scale": String(
      isDesktopScene ? 1 : designWidth / authoredWidth,
    ),
  } as CSSProperties;

  return (
    <div className={styles.outer} style={viewportStyle}>
      <div className={styles.toolbar}>
        <div
          className={styles.widthToggle}
          role="group"
          aria-label="Scene width"
        >
          <button
            type="button"
            aria-pressed={!isFullWidth}
            className={[
              styles.widthToggleButton,
              !isFullWidth ? styles.widthToggleButtonActive : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => setIsFullWidth(false)}
          >
            {MOBILE_SCENE_WIDTH}px
          </button>
          <button
            type="button"
            aria-pressed={isFullWidth}
            className={[
              styles.widthToggleButton,
              isFullWidth ? styles.widthToggleButtonActive : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => setIsFullWidth(true)}
          >
            {LARGE_SCENE_WIDTH}px
          </button>
        </div>
      </div>

      <div className={styles.controls} aria-label="Showcase scene selector">
        {scenes.map((scene) => {
          const isActive = scene.id === activeScene.id;

          return (
            <button
              key={scene.id}
              type="button"
              aria-pressed={isActive}
              className={[
                styles.sceneButton,
                isActive ? styles.sceneButtonActive : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setActiveSceneId(scene.id)}
            >
              <span className={styles.sceneButtonLabel}>{scene.label}</span>
              <span className={styles.sceneButtonKicker}>{scene.kicker}</span>
            </button>
          );
        })}
      </div>

      <div
        className={[
          "viewport",
          styles.viewport,
          isPeekScene ? styles.viewportPeek : "",
          isDesktopScene ? styles.viewportDesktop : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={viewportStyle}
      >
        {isDesktopScene ? null : (
          <div className={styles.copy}>
            <div className={styles.kicker}>
              <span className={styles.kickerLabel}>{activeScene.kicker}</span>
            </div>
            <h1 className={styles.title}>{activeScene.title}</h1>
          </div>
        )}

        <div
          className={[
            styles.device,
            isPeekScene ? styles.devicePeek : "",
            isDesktopScene ? styles.deviceDesktop : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {isDesktopScene ? (
            <div className={styles.desktopScreenshot}>
              <div className={styles.desktopScreen}>
                <ThemeImage
                  lightSrc={activeScene.lightSrc}
                  darkSrc={activeScene.darkSrc}
                  alt={activeScene.alt}
                  variant={activeScene.imageVariant}
                />
              </div>
            </div>
          ) : (
            <div
              className={[
                styles.deviceFrame,
                isPeekScene ? styles.deviceFramePeek : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <IPhoneX
                className={[
                  styles.iPhoneX,
                  isPeekScene ? styles.iPhoneXPeek : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={viewportStyle}
              >
                <ThemeImage
                  lightSrc={activeScene.lightSrc}
                  darkSrc={activeScene.darkSrc}
                  alt={activeScene.alt}
                  variant={activeScene.imageVariant}
                />
              </IPhoneX>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
